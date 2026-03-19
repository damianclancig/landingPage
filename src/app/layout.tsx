import type { Metadata } from 'next';
import { Inter, Playfair_Display, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/components/i18n-provider';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';

const siteConfig = {
  name: 'Clancig FullstackDev',
  description: 'Portfolio de Damián Clancig, Desarrollador Full-Stack especializado en la creación de aplicaciones web y móviles modernas con React, Next.js, Node.js, y Flutter.',
  url: 'https://www.clancig.com.ar',
  ogImage: 'https://www.clancig.com.ar/images/foto_perfil.webp',
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
    icon: '/images/foto_perfil.webp',
    shortcut: '/images/foto_perfil.webp',
    apple: '/images/foto_perfil.webp',
  },
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={cn(inter.variable, playfair.variable, robotoMono.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload critical Logo for better discovery */}
        <link 
          rel="preload" 
          href="/images/logo.webp" 
          as="image"
          type="image/webp"
        />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
        <div className="noise-pattern" aria-hidden="true" />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
