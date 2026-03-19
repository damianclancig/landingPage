"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with blur and overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background.webp"
          alt={t("hero-codeBackgroundAlt") || "Background"}
          fill
          priority
          className="object-cover blur-[8px]"
          quality={90}
        />
        <div className="absolute inset-0 bg-background/80 dark:bg-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Profile Image - Premium Presentation */}
        <div className="mb-8 relative group animate-fade-in-up">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-emerald-400/50 rounded-full opacity-75 blur transform group-hover:scale-110 transition duration-1000"></div>
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-background overflow-hidden shadow-2xl">
            <Image
              src="/images/foto-perfil.jpg"
              alt="Damián Clancig"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>

        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground max-w-4xl tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: "100ms", animationFillMode: "both" }}>
          {t("landing-hero-headline")}
        </h1>
        
        <p 
          className="font-body text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 animate-fade-in-up" 
          style={{ animationDelay: "200ms", animationFillMode: "both" }}
        >
          {t("landing-hero-subtext")}
        </p>

        <div 
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up" 
          style={{ animationDelay: "400ms", animationFillMode: "both" }}
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md sm:min-w-[200px]">
            <Link href="#servicios">
              {t("landing-hero-cta-primary")}
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-md sm:min-w-[200px] border-border hover:bg-card">
            <Link href="#portafolio">
              {t("landing-hero-cta-secondary")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
