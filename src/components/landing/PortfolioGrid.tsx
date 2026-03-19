"use client";

import { useTranslation } from "@/hooks/use-translation";
import { projects } from "@/data/projects";
import ProjectDialog from "./ProjectDialog";
import { ExternalLink } from "lucide-react";

export default function PortfolioGrid() {
  const { t } = useTranslation();

  return (
    <section id="portafolio" className="py-20 md:py-32 bg-background border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-foreground mb-6">
            {t("landing-portfolio-title")}
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground">
            {t("landing-portfolio-subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectDialog key={project.id} project={project}>
              <button className="group relative flex flex-col text-left w-full justify-between p-6 sm:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary transition-all cursor-pointer overflow-hidden hover:shadow-[0_0_20px_rgba(45,212,191,0.15)] h-full min-h-[300px]">
                
                {/* Decorative subtle background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <span className="font-code text-xs text-primary font-medium tracking-widest uppercase mb-4 block">
                    {t(`landing-portfolio-category-${project.category}` as any)}
                  </span>
                  <h3 className="font-headline text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {t(`projects-${project.id}-title` as any) || project.title}
                  </h3>
                  <p className="font-body text-muted-foreground line-clamp-3 leading-relaxed">
                    {t(`projects-${project.id}-challenge` as any) || project.challenge}
                  </p>
                </div>

                <div className="relative z-10 mt-8 flex items-center text-primary font-code text-sm font-semibold uppercase tracking-wider gap-2">
                  <span>{t("landing-portfolio-view-details")}</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </button>
            </ProjectDialog>
          ))}
        </div>
      </div>
    </section>
  );
}
