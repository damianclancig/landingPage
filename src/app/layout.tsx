import type { Metadata } from 'next';
import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/components/i18n-provider';
import HtmlLangUpdater from '@/components/html-lang-updater';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const siteConfig = {
  name: 'DevPortfolio | Damián Clancig',
  description: 'Portfolio de Damián Clancig, Desarrollador Full-Stack especializado en la creación de aplicaciones web y móviles modernas con React, Next.js, Node.js, y Flutter.',
  url: 'https://www.clancig.com.ar', // Replace with your actual domain
  ogImage: 'https://www.clancig.com.ar/og-image.png', // Replace with your actual domain and image path
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Desarrollador Full-Stack",
    "React",
    "Next.js",
    "Node.js",
    "Flutter",
    "React Native",
    "Desarrollo Web",
    "Desarrollo Móvil",
    "Portfolio",
    "Damián Clancig"
  ],
  authors: [{ name: "Damián Clancig", url: siteConfig.url }],
  creator: "Damián Clancig",
  
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@damianclancig', // Replace with your Twitter handle if you have one
  },
  icons: {
    icon: '/favicon.ico', // Make sure you have a favicon.ico in your public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn('min-h-screen bg-background font-body antialiased', inter.variable, spaceGrotesk.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <HtmlLangUpdater />
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
