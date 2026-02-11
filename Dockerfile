# Simple Docker image to run the static server on Railway
FROM node:20-alpine

WORKDIR /app

# No dependencies, but keep package.json for platform detection
COPY package.json ./
COPY server.js ./
COPY index.html ./
COPY styles.css ./
COPY app.js ./
COPY README.md ./

ENV NODE_ENV=production

# Railway sets PORT; default for local Docker runs
ENV PORT=8080
EXPOSE 8080

CMD ["node", "server.js"]
