"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Github, Linkedin, MessageCircle, Instagram, Coffee, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-background-alt border-t border-border/30 py-12 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        
        {/* Brand / Copy */}
        <div className="flex flex-col gap-2">
          <p className="font-headline font-semibold text-foreground text-lg">
            Damián Clancig
          </p>
          <p className="font-body text-sm text-muted-foreground max-w-sm border-l-2 border-primary/50 pl-3 italic">
            "{t("landing-footer-copy")}"
          </p>
        </div>

        {/* Core Links */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
          {process.env.NEXT_PUBLIC_GITHUB_USER && (
            <Link href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USER}`} target="_blank" className="p-2 rounded-full bg-card border border-border/50 text-muted-foreground hover:text-primary hover:border-primary transition-colors inline-block" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </Link>
          )}
          {process.env.NEXT_PUBLIC_LINKEDIN_USER && (
            <Link href={`https://linkedin.com/in/${process.env.NEXT_PUBLIC_LINKEDIN_USER}`} target="_blank" className="p-2 rounded-full bg-card border border-border/50 text-muted-foreground hover:text-primary hover:border-primary transition-colors inline-block" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </Link>
          )}
          {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER && (
            <Link href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} target="_blank" className="p-2 rounded-full bg-card border border-border/50 text-muted-foreground hover:text-primary hover:border-primary transition-colors inline-block" aria-label="WhatsApp">
              <MessageCircle className="w-5 h-5" />
            </Link>
          )}
          {process.env.NEXT_PUBLIC_INSTAGRAM_USER && (
            <Link href={`https://instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM_USER}`} target="_blank" className="p-2 rounded-full bg-card border border-border/50 text-muted-foreground hover:text-primary hover:border-primary transition-colors inline-block" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </Link>
          )}
          {process.env.NEXT_PUBLIC_CAFECITO_USER && (
            <Link href={`https://cafecito.app/${process.env.NEXT_PUBLIC_CAFECITO_USER}`} target="_blank" className="p-2 rounded-full bg-card border border-border/50 text-muted-foreground hover:text-primary hover:border-primary transition-colors inline-block" aria-label="Cafecito">
              <Coffee className="w-5 h-5" />
            </Link>
          )}
          {process.env.NEXT_PUBLIC_EMAIL_ADDRESS && (
            <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`} className="p-2 rounded-full bg-card border border-border/50 text-muted-foreground hover:text-primary hover:border-primary transition-colors inline-block" aria-label="Email">
              <Mail className="w-5 h-5" />
            </Link>
          )}
        </div>

        {/* Tech Stack Data */}
        <div className="flex flex-col gap-1 items-center md:items-end">
          <span className="font-code text-xs text-muted-foreground opacity-60 uppercase tracking-widest">
            {t("landing-footer-tech")}
          </span>
          <span className="font-code text-[10px] text-muted-foreground/40 mt-1">
            v2.0 • 2026
          </span>
        </div>

      </div>
    </footer>
  );
}
