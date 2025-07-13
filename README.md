# DevPortfolio - Professional Developer Portfolio

This is a modern, responsive, and fully-featured developer portfolio website for Damián Clancig, built with Next.js and Tailwind CSS. The site showcases skills, services, pricing, and provides multiple ways to get in touch.

## ✨ Features

-   **Fully Responsive:** Optimized for all screen sizes, from mobile to desktop.
-   **Dark/Light Mode:** Theme switcher for user preference.
-   **Multilingual Support:** Content available in English, Spanish, and Portuguese.
-   **Interactive UI:** Smooth animations and interactive carousels using ShadCN UI and Embla Carousel.
-   **Functional Contact Form:** Real email sending functionality integrated with **Resend**.
-   **Server-Side Logic:** Contact form handled securely with Next.js Server Actions.
-   **SEO Optimized:** Built with best practices for search engine visibility.

## 🚀 Tech Stack

This project is built with a modern and robust technology stack:

-   **Framework:** [Next.js](https://nextjs.org/) (App Router)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
-   **Form Handling:** [React Hook Form](https://react-hook-form.com/) & Next.js Server Actions
-   **Email Service:** [Resend](https://resend.com/)
-   **Internationalization (i18n):** Custom React Context-based solution.
-   **Icons:** [Lucide React](https://lucide.dev/)

## 🛠️ Getting Started

Follow these instructions to set up the development environment and run the project locally.

### Prerequisites

-   [Node.js](https://nodejs.org/) (version 20.x or later recommended)
-   [npm](https://www.npmjs.com/) (comes with Node.js) or another package manager like yarn or pnpm.

### 1. Clone the repository

If you are working with a Git repository, you can clone the project to your local machine:

```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Install Dependencies

Install all the necessary project dependencies using npm:

```bash
npm install
```

This command will read the `package.json` file and install all the required libraries.

### 3. Environment Variables & Resend Setup

To send emails, this project uses **Resend**. You will need to create a free account, verify your domain, and get an API key.

**1. Create the environment file:**
Create a `.env.local` file in the root of the project.

**2. Get your Resend API Key:**
   - Sign up at [resend.com](https://resend.com/).
   - Navigate to the "API Keys" section in your dashboard and create a new key with full access permissions.
   - Add your key to the `.env.local` file:
     ```env
     # .env.local
     RESEND_API_KEY=your_resend_api_key_here
     ```

**3. Verify your Domain:**
   - **This is a crucial step.** In your Resend dashboard, go to the "Domains" section.
   - Add your domain (e.g., `clancig.com.ar`) and follow the instructions to verify it. This usually involves adding a few DNS records (like TXT or CNAME) to your domain provider's settings.
   - The application is configured to send emails from `damian@clancig.com.ar`. Your domain **must** be verified for emails to be sent successfully.

## 🏃 Running the Development Server

To start the development server, run the following command:

```bash
npm run dev
```

This will start the application in development mode with hot-reloading. You can view the site by navigating to [http://localhost:9002](http://localhost:9002) in your web browser. Any changes you make to the code will be automatically reflected in the browser.
