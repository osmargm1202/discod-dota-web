# PRD: Discord Dota Bot Landing Page

## Introduction

Página web tipo landing page para el bot de Discord "Fifrex Dev" que muestra información sobre un bot de estadísticas de Dota 2. La página tiene un diseño centrado con fondo temático de Dota 2, logo del proyecto, mensaje de "en desarrollo" y descripción de las funcionalidades del bot. Soporta español e inglés con selector de idioma.

## Goals

- Mostrar una landing page profesional con temática de Dota 2
- Comunicar que el proyecto está en desarrollo
- Describir las funcionalidades del bot de Discord
- Proporcionar contacto del desarrollador
- Soportar dos idiomas (español/inglés)
- Desplegar fácilmente via Docker en puerto 8092
- Permitir configuración de imágenes via variables de entorno

## User Stories

### US-001: Configurar proyecto Next.js
**Description:** Como desarrollador, necesito un proyecto Next.js configurado correctamente para poder construir la landing page.

**Acceptance Criteria:**
- [ ] Proyecto Next.js inicializado con App Router
- [ ] TypeScript configurado
- [ ] Tailwind CSS configurado para estilos
- [ ] Estructura de carpetas creada (app/, public/, components/)
- [ ] Archivo .env.example con variables de entorno documentadas
- [ ] Typecheck passes (`npx tsc --noEmit`)

### US-002: Configurar variables de entorno
**Description:** Como desarrollador, quiero configurar URLs de imágenes via variables de entorno para poder cambiarlas sin modificar código.

**Acceptance Criteria:**
- [ ] Variable `NEXT_PUBLIC_BACKGROUND_URL` para fondo de Dota 2
- [ ] Variable `NEXT_PUBLIC_FIFREX_LOGO_URL` con valor por defecto `https://r2.or-gm.com/fifrex.png`
- [ ] Variables accesibles en componentes del cliente
- [ ] Archivo `.env.example` documenta todas las variables
- [ ] Typecheck passes

### US-003: Implementar fondo temático de Dota 2
**Description:** Como usuario, quiero ver un fondo oscuro con imagen temática de Dota 2 para tener una experiencia visual inmersiva.

**Acceptance Criteria:**
- [ ] Fondo negro base (#000 o similar oscuro)
- [ ] Imagen de fondo de Dota 2 cargada desde variable de entorno
- [ ] Imagen con opacidad reducida para no interferir con el contenido
- [ ] Imagen optimizada usando next/image o CSS background
- [ ] Fondo cubre toda la pantalla (100vh mínimo)
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

### US-004: Mostrar logo y título principal
**Description:** Como usuario, quiero ver el logo de Fifrex Dev y el texto "Fifrex Dev en desarrollo" centrados en la página.

**Acceptance Criteria:**
- [ ] Logo de Fifrex Dev centrado horizontalmente
- [ ] Logo cargado desde variable de entorno `NEXT_PUBLIC_FIFREX_LOGO_URL`
- [ ] Texto "Fifrex Dev" en letras grandes debajo del logo
- [ ] Texto "En Desarrollo" / "In Development" visible según idioma
- [ ] Tipografía similar a Dota 2 (Reaver, Radiance, o similar gótica/gaming)
- [ ] Usar Google Fonts o fuente local para tipografía
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

### US-005: Mostrar descripción del proyecto
**Description:** Como usuario, quiero leer una descripción del bot para entender qué hace.

**Acceptance Criteria:**
- [ ] Sección de descripción debajo del título
- [ ] Texto describe las funcionalidades del bot:
  - Datos actualizados de últimas partidas
  - Verificación de perfiles públicos
  - Estadísticas de últimas 20 partidas
  - Records con héroes específicos
- [ ] Texto centrado y legible sobre fondo oscuro
- [ ] Texto en español o inglés según idioma seleccionado
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

### US-006: Mostrar información de contacto
**Description:** Como usuario, quiero ver el correo del desarrollador para poder contactarlo.

**Acceptance Criteria:**
- [ ] Correo xaviergm1013@gmail.com visible en la página
- [ ] Correo es un enlace mailto: clickeable
- [ ] Ubicado debajo de la descripción
- [ ] Estilo visual coherente con el resto de la página
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

### US-007: Implementar selector de idioma
**Description:** Como usuario, quiero cambiar entre español e inglés para ver el contenido en mi idioma preferido.

**Acceptance Criteria:**
- [ ] Botón/selector de idioma visible (ES/EN)
- [ ] Ubicado en esquina superior derecha
- [ ] Cambiar idioma actualiza todo el texto de la página
- [ ] Idioma por defecto: español
- [ ] Idioma seleccionado persiste en la sesión (localStorage o estado)
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

### US-008: Diseño responsive
**Description:** Como usuario móvil, quiero que la página se vea bien en mi dispositivo.

**Acceptance Criteria:**
- [ ] Layout se adapta a pantallas móviles (< 768px)
- [ ] Logo redimensiona apropiadamente
- [ ] Texto legible sin scroll horizontal
- [ ] Selector de idioma accesible en móvil
- [ ] Espaciado adecuado en todos los breakpoints
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

### US-009: Configurar metadatos y SEO básico
**Description:** Como desarrollador, quiero metadatos correctos para SEO y previsualizaciones en redes sociales.

**Acceptance Criteria:**
- [ ] Título de página configurado
- [ ] Meta description configurada
- [ ] Open Graph tags para compartir en redes
- [ ] Favicon configurado (puede usar logo de Fifrex)
- [ ] next/image usado para optimización de imágenes donde aplique
- [ ] Typecheck passes

### US-010: Configurar Dockerfile
**Description:** Como desarrollador, quiero empaquetar la app en Docker para despliegue.

**Acceptance Criteria:**
- [ ] Dockerfile multi-stage para build optimizado
- [ ] Imagen final basada en node:alpine o similar ligero
- [ ] App corre en puerto 8092 dentro del contenedor
- [ ] Variables de entorno pasables en runtime
- [ ] Build exitoso con `docker build`
- [ ] Contenedor inicia correctamente

### US-011: Crear Makefile para build y deploy
**Description:** Como desarrollador, quiero comandos make simples para construir y subir la imagen Docker.

**Acceptance Criteria:**
- [ ] Comando `make build` construye imagen Docker
- [ ] Comando `make push` sube imagen a `orgmcr.or-gm.com/osmargm1202/discord-dota-web:latest`
- [ ] Makefile documentado con comentarios
- [ ] Tag de imagen configurable (latest por defecto)

## Functional Requirements

- FR-1: La página debe mostrar un fondo negro con imagen temática de Dota 2 con opacidad reducida
- FR-2: El logo de Fifrex Dev debe mostrarse centrado, cargado desde variable de entorno
- FR-3: El texto "Fifrex Dev" debe usar tipografía similar a Dota 2
- FR-4: El mensaje "En Desarrollo" debe mostrarse debajo del título
- FR-5: La descripción del bot debe listar sus funcionalidades principales
- FR-6: El correo xaviergm1013@gmail.com debe ser un enlace mailto: clickeable
- FR-7: Un selector ES/EN debe permitir cambiar el idioma de todo el contenido
- FR-8: La página debe ser responsive (móvil y escritorio)
- FR-9: La aplicación debe correr en puerto 8092 en Docker
- FR-10: Las URLs de imágenes (fondo y logo) deben ser configurables via .env

## Non-Goals

- No hay base de datos
- No hay autenticación de usuarios
- No hay integración directa con Discord API
- No hay formularios de contacto (solo mailto)
- No hay panel de administración
- No hay analytics o tracking

## Design Considerations

- **Colores:** Fondo negro (#000000 o #0a0a0a), texto blanco/dorado similar a Dota 2
- **Tipografía:** Fuente gótica/gaming similar a Dota 2 (Reaver, Cinzel, o similar de Google Fonts)
- **Layout:** Centrado vertical y horizontal, single page
- **Referencia:** https://www.dota2.com para estilo visual

## Technical Considerations

- **Framework:** Next.js 14+ con App Router
- **Styling:** Tailwind CSS
- **Imágenes:** next/image para optimización
- **i18n:** Implementación simple con estado local (no next-intl para mantener simplicidad)
- **Docker:** Multi-stage build, puerto 8092
- **Registry:** orgmcr.or-gm.com/osmargm1202/discord-dota-web:latest

### Variables de Entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `NEXT_PUBLIC_BACKGROUND_URL` | URL del fondo de Dota 2 | `https://example.com/dota-bg.jpg` |
| `NEXT_PUBLIC_FIFREX_LOGO_URL` | URL del logo de Fifrex | `https://r2.or-gm.com/fifrex.png` |

## Success Metrics

- Página carga en menos de 3 segundos
- Todas las imágenes cargan correctamente desde URLs configuradas
- Selector de idioma funciona sin recargar página
- Docker build completa sin errores
- Contenedor inicia y sirve la página en puerto 8092

## Open Questions

- ¿Hay una URL específica para el fondo de Dota 2 o se debe usar una imagen por defecto?
- ¿Se necesita algún logo adicional de Dota 2 además del fondo?
- ¿El bot ya tiene servidor de Discord para enlazar en el futuro?
