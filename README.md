# DevPortfolio - Professional Developer Portfolio

This is a modern, responsive, and fully-featured developer portfolio website for Damián Clancig, built with Next.js and Tailwind CSS. The site showcases skills, services, pricing, and provides multiple ways to get in touch.

## ✨ Features

-   **Fully Responsive:** Optimized for all screen sizes, from mobile to desktop.
-   **Dark/Light Mode:** Theme switcher for user preference.
-   **Multilingual Support:** Content available in English, Spanish, and Portuguese.
-   **Interactive UI:** Smooth animations and interactive carousels using ShadCN UI and Embla Carousel.
-   **Server-Side Logic:** Contact form handled securely with Next.js Server Actions.
-   **SEO Optimized:** Built with best practices for search engine visibility.

## 🚀 Tech Stack

This project is built with a modern and robust technology stack:

-   **Framework:** [Next.js](https://nextjs.org/) (App Router)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
-   **Form Handling:** [React Hook Form](https://react-hook-form.com/) & Next.js Server Actions
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

### 3. Environment Variables

This project does not currently require any environment variables to run. However, if you add integrations (like an email service API key), you should create a `.env.local` file in the root of the project and add them there.

```
# .env.local example
SOME_API_KEY=your_secret_key_here
```

## 🏃 Running the Development Server

To start the development server, run the following command:

```bash
npm run dev
```

This will start the application in development mode with hot-reloading. You can view the site by navigating to [http://localhost:9002](http://localhost:9002) in your web browser. Any changes you make to the code will be automatically reflected in the browser.
