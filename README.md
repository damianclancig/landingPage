
# Clancig FullstackDev - Portfolio Profesional para Desarrolladores

Este es un portfolio de desarrollador moderno, responsive y completo, construido con Next.js y Tailwind CSS. El sitio muestra habilidades, servicios, precios y proporciona múltiples formas de contacto.

Puedes ver una demostración en vivo de este proyecto en producción en: **[www.clancig.com.ar](https://www.clancig.com.ar)**

## ✨ Características Principales

-   **Totalmente Responsive:** Optimizado para todos los tamaños de pantalla, desde móviles hasta escritorios.
-   **Modo Oscuro/Claro:** Selector de tema para la preferencia del usuario.
-   **Soporte Multilingüe:** Contenido disponible en Español, Inglés y Portugués.
-   **UI Interactiva:** Animaciones suaves y carruseles interactivos usando ShadCN UI y Embla Carousel.
-   **Formulario de Contacto Funcional:** Envío de correos electrónicos real integrado con **Maileroo**.
-   **Protección Anti-Spam:** Formulario de contacto protegido con **Google reCAPTCHA v2**.
-   **Lógica del Lado del Servidor:** Formulario de contacto manejado de forma segura con Next.js Server Actions.
-   **Analíticas Integradas:** Seguimiento de métricas de visitantes con **Vercel Analytics**.
-   **Optimizado para SEO:** Construido con las mejores prácticas para la visibilidad en motores de búsqueda (`sitemap.xml`, `robots.txt`, metadatos).

## 🚀 Stack Tecnológico

Este proyecto está construido con un stack tecnológico moderno y robusto:

-   **Framework:** [Next.js](https://nextjs.org/) (App Router)
-   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
-   **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
-   **Componentes UI:** [ShadCN UI](https://ui.shadcn.com/)
-   **Manejo de Formularios:** Next.js Server Actions
-   **Protección Anti-Spam:** [Google reCAPTCHA](https://www.google.com/recaptcha/about/)
-   **Servicio de Correo:** [Maileroo](https://maileroo.com/)
-   **Analíticas:** [Vercel Analytics](https://vercel.com/analytics)
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

### 3. Variables de Entorno

Para que todas las funcionalidades operen correctamente, es necesario configurar las variables de entorno.

**1. Crear el archivo de entorno:**
Crea un archivo `.env.local` en la raíz del proyecto. Puedes copiar el contenido de `.env.example`:

```bash
cp .env.example .env.local
```

**2. Configurar las variables de entorno:**
Abre el archivo `.env.local` y rellena las variables. Necesitarás obtener credenciales de **Maileroo** y **Google reCAPTCHA**.

-   **Credenciales de Maileroo (para envío de correos):**
    -   Regístrate en [maileroo.com](https://maileroo.com/).
    -   Verifica tu dominio en el panel de Maileroo (paso crucial).
    -   Crea una clave de API y añádela al archivo `.env.local`.

-   **Credenciales de Google reCAPTCHA (para protección anti-spam):**
    -   Ve a la [consola de administración de Google reCAPTCHA](https://www.google.com/recaptcha/admin).
    -   Registra un nuevo sitio:
        -   **Tipo de reCAPTCHA:** Selecciona **reCAPTCHA v2** (casilla de verificación "No soy un robot").
        -   **Dominios:** Añade `localhost` para desarrollo y el dominio de producción (ej: `www.tudominio.com`).
    -   Copia la **clave del sitio (pública)** y la **clave secreta** y añádelas al archivo `.env.local`.

A continuación se muestra el contenido del archivo `.env.example`:

```env
# Credenciales de la API de Maileroo para enviar correos
# Más información: https://maileroo.com/docs
MAILEROO_API_KEY="your_maileroo_api_key"
MAILEROO_FROM_EMAIL="your_verified_from_email"
MAILEROO_TO_CONTACT="your_contact_form_recipient_email"

# Variables de Google reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY=AQUI_VA_TU_CLAVE_PUBLICA
RECAPTCHA_SECRET_KEY=AQUI_VA_TU_CLAVE_SECRETA

# Información de contacto y enlaces sociales
# El prefijo NEXT_PUBLIC_ es necesario para que Next.js exponga estas variables al cliente de forma segura.
NEXT_PUBLIC_EMAIL_ADDRESS="your_email@example.com"
NEXT_PUBLIC_INSTAGRAM_USER="your_instagram_user"
NEXT_PUBLIC_LINKEDIN_USER="your_linkedin_user"
NEXT_PUBLIC_GITHUB_USER="your_github_user"
NEXT_PUBLIC_WHATSAPP_NUMBER="your_whatsapp_number_including_country_code" 
NEXT_PUBLIC_CAFECITO_USER="your_cafecito_user"
```

## 🏃 Ejecutar el Servidor de Desarrollo

Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:

```bash
npm run dev
```

Esto iniciará la aplicación en modo de desarrollo con recarga en caliente (hot-reloading). Puedes ver el sitio navegando a [http://localhost:9002](http://localhost:9002) en tu navegador web. Cualquier cambio que hagas en el código se reflejará automáticamente.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
