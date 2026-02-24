# Calendario Académico 2026 — Universidad NUR

Proyecto web estático (HTML/CSS/JavaScript) que muestra el calendario completo de 2026 y resalta fechas importantes (tutorías, parciales y feriados). Es un proyecto sencillo pensado para practicar bases sólidas: estructura de datos, lógica de fechas y manipulación del DOM.

## Demo (opcional)

Si quieres que cualquiera lo vea sin instalar nada, puedes publicarlo con **GitHub Pages**:

1. En GitHub: **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / folder: `/ (root)`

Luego pega aquí tu link público:

- Demo: (pon aquí tu URL de GitHub Pages)

## Capturas (recomendado)

Agrega 1–2 screenshots para que se entienda el proyecto en 5 segundos.

- Crea una carpeta `docs/` y guarda imágenes como `docs/screenshot-1.png`.
- Luego enlázalas aquí:
	- `![Calendar](docs/screenshot-1.png)`

## Funcionalidades

- Vista anual con 12 meses.
- Días resaltados según tipo de evento (eventos académicos / feriados nacionales / feriados institucionales).
- Panel lateral con los eventos del día seleccionado.
- Experiencia responsive (en móvil, los eventos se muestran en un modal).

## Tecnologías

- HTML + CSS (sin frameworks)
- JavaScript (vanilla)
- Node.js (opcional) para servir los archivos localmente
- Docker (opcional)

## Cómo ejecutar

### Opción A — Abrir en el navegador (más simple)

1. Abre `index.html` con tu navegador.

### Opción B — Servidor local con Node.js

1. Asegúrate de tener Node.js instalado.
2. Ejecuta:

```bash
npm start
```

3. Abre `http://localhost:3000`.

Si el puerto `3000` está ocupado, puedes cambiarlo así:

- PowerShell:

```powershell
$env:PORT = 3001; npm start
```

### Opción C — Docker

```bash
docker build -t calendario-nur .
docker run -p 8080:8080 calendario-nur
```

Luego abre `http://localhost:8080`.

## Configuración de eventos

Los eventos se definen en `app.js` en un arreglo llamado `events`.

Cada evento usa esta estructura:

- `date`: fecha en formato `YYYY-MM-DD`.
- `title`: título corto.
- `description`: texto descriptivo.
- `kind` (opcional): categoría (por ejemplo: `holiday` o `nurReligious`).
- `range` (opcional):
	- `sunsetToSunset` (por defecto): inicia el día anterior a las 18:00 y finaliza el día indicado a las 18:00.
	- `fixedDate`: ocurre exactamente en la fecha indicada.

## Qué demuestra este proyecto

- Modelado simple de datos (eventos por fecha y tipo).
- Lógica de fechas y mapeo a una vista de calendario.
- Manipulación del DOM y renderizado dinámico.
- Diseño responsive y componentes UI básicos (panel lateral / modal).
- Servidor HTTP mínimo en Node.js para despliegue y pruebas locales.

## Mejoras futuras (realistas)

- Exportar/importar eventos desde un archivo `events.json`.
- Búsqueda por texto (por ejemplo: “tutoría”, “parcial”, “feriado”).
- Tests básicos para validar el mapeo de eventos a fechas.
- Documentar el formato de datos con ejemplos y validación.

## English (short)

I’m a systems engineering student and I built this small static web project to practice JavaScript basics: date logic, DOM rendering and a clean UI. It shows a full-year calendar (2026) and highlights important academic dates and holidays.

## Checklist para que se vea profesional

- [ ] Añadir demo con GitHub Pages (link arriba)
- [ ] Añadir 1–2 capturas en `docs/`
- [ ] Completar la descripción del repo (About) y Topics
