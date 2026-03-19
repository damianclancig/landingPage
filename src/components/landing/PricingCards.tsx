"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import Link from "next/link";

export default function PricingCards() {
  const { t } = useTranslation();

  return (
    <section id="servicios" className="py-20 md:py-32 bg-background-alt relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-foreground mb-6">
            {t("landing-services-title")}
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground">
            {t("landing-services-subtitle")}
          </p>
        </div>

        {/* Bento Grid layout for Pricing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Essential Plan */}
          <div className="flex flex-col p-8 rounded-2xl bg-card border border-border/50 transition-all hover:border-border hover:shadow-lg h-full justify-between">
            <div>
              <span className="font-code text-sm text-primary font-medium tracking-wider uppercase mb-2 block">
                {t("landing-services-essential-name")}
              </span>
              <h3 className="font-headline text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t("landing-services-essential-title")}
              </h3>
              <p className="font-body text-muted-foreground mb-8">
                {t("landing-services-essential-desc")}
              </p>
            </div>
            <Button variant="outline" className="w-full border-border hover:bg-muted" asChild>
              <Link href="#contacto">{t("landing-services-cta")}</Link>
            </Button>
          </div>

          {/* Business Plan (Highlighted) */}
          <div className="relative flex flex-col p-8 rounded-2xl bg-card border border-primary shadow-[0_0_20px_rgba(45,212,191,0.15)] md:scale-105 z-10 h-full justify-between transition-all hover:shadow-[0_0_30px_rgba(45,212,191,0.3)]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full flex items-center gap-1 font-body text-sm font-semibold shadow-md whitespace-nowrap">
              <Star className="w-4 h-4 fill-current" /> Recomendado
            </div>
            <div>
              <span className="font-code text-sm text-primary font-medium tracking-wider uppercase mb-2 block mt-2">
                {t("landing-services-business-name")}
              </span>
              <h3 className="font-headline text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t("landing-services-business-title")}
              </h3>
              <p className="font-body text-muted-foreground mb-8">
                {t("landing-services-business-desc")}
              </p>
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link href="#contacto">{t("landing-services-cta")}</Link>
            </Button>
          </div>

          {/* Enterprise Plan */}
          <div className="flex flex-col p-8 rounded-2xl bg-card border border-border/50 transition-all hover:border-border hover:shadow-lg h-full justify-between">
            <div>
              <span className="font-code text-sm text-primary font-medium tracking-wider uppercase mb-2 block">
                {t("landing-services-enterprise-name")}
              </span>
              <h3 className="font-headline text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t("landing-services-enterprise-title")}
              </h3>
              <p className="font-body text-muted-foreground mb-8">
                {t("landing-services-enterprise-desc")}
              </p>
            </div>
            <Button variant="outline" className="w-full border-border hover:bg-muted" asChild>
              <Link href="#contacto">{t("landing-services-cta")}</Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
