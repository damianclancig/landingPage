# DevPortfolio - Portfolio Profesional para Desarrolladores

Este es un portfolio de desarrollador moderno, responsive y completo para Damián Clancig, construido con Next.js y Tailwind CSS. El sitio muestra habilidades, servicios, precios y proporciona múltiples formas de contacto.

## ✨ Características Principales

-   **Totalmente Responsive:** Optimizado para todos los tamaños de pantalla, desde móviles hasta escritorios.
-   **Modo Oscuro/Claro:** Selector de tema para la preferencia del usuario.
-   **Soporte Multilingüe:** Contenido disponible en Español, Inglés y Portugués.
-   **UI Interactiva:** Animaciones suaves y carruseles interactivos usando ShadCN UI y Embla Carousel.
-   **Formulario de Contacto Funcional:** Envío de correos electrónicos real integrado con **Resend**.
-   **Lógica del Lado del Servidor:** Formulario de contacto manejado de forma segura con Next.js Server Actions.
-   **Optimizado para SEO:** Construido con las mejores prácticas para la visibilidad en motores de búsqueda.

## 🚀 Stack Tecnológico

Este proyecto está construido con un stack tecnológico moderno y robusto:

-   **Framework:** [Next.js](https://nextjs.org/) (App Router)
-   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
-   **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
-   **Componentes UI:** [ShadCN UI](https://ui.shadcn.com/)
-   **Manejo de Formularios:** Next.js Server Actions
-   **Servicio de Correo:** [Resend](https://resend.com/)
-   **Internacionalización (i18n):** Solución personalizada basada en React Context.
-   **Iconos:** [Lucide React](https://lucide.dev/)

## 🛠️ Puesta en Marcha

Sigue estas instrucciones para configurar el entorno de desarrollo y ejecutar el proyecto localmente.

### Requisitos Previos

-   [Node.js](https://nodejs.org/) (versión 20.x o posterior recomendada)
-   [npm](https://www.npmjs.com/) (viene con Node.js) u otro gestor de paquetes como yarn o pnpm.

### 1. Clonar el repositorio

Si estás trabajando con un repositorio Git, puedes clonar el proyecto en tu máquina local:

```bash
git clone https://github.com/damianclancig/landingPage.git
cd landingPage
```

### 2. Instalar Dependencias

Instala todas las dependencias necesarias del proyecto usando npm:

```bash
npm install
```

Este comando leerá el archivo `package.json` e instalará todas las librerías requeridas.

### 3. Variables de Entorno y Configuración de Resend

Para enviar correos electrónicos, este proyecto utiliza **Resend**. Necesitarás crear una cuenta gratuita, verificar tu dominio y obtener una clave de API.

**1. Crear el archivo de entorno:**
Crea un archivo `.env.local` en la raíz del proyecto. Puedes copiar el contenido de `.env.example`:

```bash
cp .env.example .env.local
```

**2. Configurar las variables de entorno:**
Abre el archivo `.env.local` y rellena las variables. Necesitarás obtener una clave de API de Resend.

-   **Clave de API de Resend:**
    -   Regístrate en [resend.com](https://resend.com/).
    -   Navega a la sección "API Keys" en tu panel de control y crea una nueva clave con permisos de acceso completos.
    -   Añade tu clave al archivo `.env.local`.

-   **Verificar tu Dominio:**
    -   **Este es un paso crucial.** En tu panel de Resend, ve a la sección "Domains".
    -   Añade tu dominio (ej., `clancig.com.ar`) y sigue las instrucciones para verificarlo. Esto generalmente implica añadir algunos registros DNS (como TXT o CNAME) en la configuración de tu proveedor de dominio.
    -   La aplicación está configurada para enviar correos desde la dirección que configures en `NEXT_PUBLIC_EMAIL_ADDRESS`. Tu dominio **debe** estar verificado para que los correos se envíen correctamente.

A continuación se muestra un ejemplo del archivo `.env.example`:

```env
# Variables para el servicio de correo (Resend)
# Más información: https://resend.com/docs/introduction
RESEND_API_KEY=tu_clave_de_api_de_resend

# Información de contacto y redes sociales
# El prefijo NEXT_PUBLIC_ es necesario para que Next.js exponga estas variables al cliente de forma segura.
NEXT_PUBLIC_EMAIL_ADDRESS="contact@domain.com"
NEXT_PUBLIC_INSTAGRAM_USER="instagram_user"
NEXT_PUBLIC_LINKEDIN_USER="linkedin_user"
NEXT_PUBLIC_GITHUB_USER="github_user"
NEXT_PUBLIC_WHATSAPP_NUMBER="whatsapp_number_phone" # Reemplaza con tu número de WhatsApp
NEXT_PUBLIC_CAFECITO_USER="cafecito_user"
```

## 🏃 Ejecutar el Servidor de Desarrollo

Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:

```bash
npm run dev
```

Esto iniciará la aplicación en modo de desarrollo con recarga en caliente (hot-reloading). Puedes ver el sitio navegando a [http://localhost:9002](http://localhost:9002) en tu navegador web. Cualquier cambio que hagas en el código se reflejará automáticamente.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
