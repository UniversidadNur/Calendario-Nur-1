# Sistema de Farmacia — Farmacia Salacor (Proyecto de práctica)

ERP web para una farmacia, desarrollado en **ASP.NET Core MVC (.NET 8)** para practicar fundamentos de desarrollo web con servidor: estructura MVC, base de datos con **EF Core**, autenticación por cookies y manejo de roles.

> Nota honesta: este es un proyecto de aprendizaje. Está pensado para practicar conceptos (no como producto listo para producción).

## Qué incluye

- **Autenticación** por cookies
- **Roles** (control de acceso básico)
- **Persistencia** con EF Core
- Base de datos por defecto: **SQLite**
- Opción de despliegue con **Railway** y uso de **MySQL** (según configuración)

## Tecnologías

- ASP.NET Core MVC (.NET 8)
- Entity Framework Core
- SQLite (desarrollo)
- MySQL (opcional / despliegue)

## Estructura del proyecto (resumen)

Dentro de `FarmaciaSalacor.Web/`:

- `Controllers/`: controladores MVC
- `Models/`: modelos de dominio
- `Data/`: contexto y configuración de datos
- `Migrations/`: migraciones de EF Core
- `ViewModels/`: modelos para vistas
- `Views/`: vistas Razor
- `Services/`: lógica de aplicación / servicios
- `wwwroot/`: archivos estáticos

## Requisitos

- .NET SDK 8

## Ejecutar en local

Desde la carpeta raíz del repositorio:

```bash
cd FarmaciaSalacor.Web
dotnet run
```

La app aplica migraciones automáticamente y crea un usuario inicial si la base está vacía.

## Usuario inicial (primer arranque)

- Usuario: `admin`
- Contraseña por defecto: `123456`

Para definir una contraseña antes del primer arranque, usa la variable de entorno:

- `FARMACIA_SEED_ADMIN_PASSWORD`

Ejemplo (PowerShell):

```powershell
$env:FARMACIA_SEED_ADMIN_PASSWORD = "UnaClaveFuerte"; dotnet run
```

## Qué demuestra este proyecto

- Diseño por capas básico dentro del patrón MVC
- CRUD y persistencia usando EF Core
- Migraciones y evolución del esquema de base de datos
- Autenticación/autorización y control de acceso con roles
- Buenas prácticas de ejecución local y parámetros por variables de entorno

## Mejoras futuras (realistas)

- Validaciones más completas (front y back) y mensajes de error claros
- Separar aún más la lógica en servicios/capas (para mantener controllers pequeños)
- Agregar pruebas básicas (por ejemplo, para servicios)
- Documentar módulos (productos, stock, ventas, etc.) con capturas y casos de uso
- Configuración segura para producción (secrets, HTTPS y hardening)

## Deploy (resumen)

El repositorio incluye configuración para desplegar en Railway y conectar a MySQL por variables de entorno. Revisa el README actual del repo para los pasos exactos.
