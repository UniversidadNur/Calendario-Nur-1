const http = require("http");
const fs = require("fs");
const path = require("path");

const port = Number.parseInt(process.env.PORT ?? "3000", 10);
const host = "0.0.0.0";
const rootDir = __dirname;

const contentTypesByExt = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
};

function safeResolve(requestPath) {
  const decoded = decodeURIComponent(requestPath);
  const withoutQuery = decoded.split("?")[0].split("#")[0];

  const clean = withoutQuery.replace(/\0/g, "");
  const normalized = path.posix.normalize(clean);

  const relative = normalized.startsWith("/") ? normalized.slice(1) : normalized;
  const resolved = path.join(rootDir, relative);

  if (!resolved.startsWith(rootDir)) {
    return null;
  }

  return resolved;
}

const server = http.createServer((req, res) => {
  const method = req.method ?? "GET";
  if (method !== "GET" && method !== "HEAD") {
    res.writeHead(405, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Method Not Allowed");
    return;
  }

  const url = req.url ?? "/";
  const requestedPath = url === "/" ? "/index.html" : url;

  const resolved = safeResolve(requestedPath);
  if (!resolved) {
    res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Bad Request");
    return;
  }

  fs.stat(resolved, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not Found");
      return;
    }

    const ext = path.extname(resolved).toLowerCase();
    const contentType = contentTypesByExt[ext] ?? "application/octet-stream";

    res.writeHead(200, {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=0",
    });

    if (method === "HEAD") {
      res.end();
      return;
    }

    const stream = fs.createReadStream(resolved);
    stream.on("error", () => {
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Internal Server Error");
    });
    stream.pipe(res);
  });
});

server.listen(port, host, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on http://${host}:${port}`);
});
