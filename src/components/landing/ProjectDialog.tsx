"use client";

import { Project } from "@/data/projects";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useTranslation } from "@/hooks/use-translation";
import { ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";

export default function ProjectDialog({ project, children }: { project: Project, children: ReactNode }) {
  const { t } = useTranslation();

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl md:text-3xl text-primary">{project.title}</DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-background-alt p-4 rounded-lg border border-border/50">
            <div>
              <span className="text-xs text-muted-foreground font-code uppercase tracking-widest">{t("landing-portfolio-dialog-role")}</span>
              <p className="font-body font-medium text-foreground">{project.role}</p>
            </div>
            <div>
              <span className="text-xs text-muted-foreground font-code uppercase tracking-widest">{t("landing-portfolio-dialog-status")}</span>
              <p className="font-body font-medium text-foreground">{project.status}</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-headline text-xl text-foreground mb-2 flex items-center gap-2">
              <span className="text-primary">•</span> {t("landing-portfolio-dialog-challenge")}
            </h4>
            <p className="font-body text-muted-foreground leading-relaxed">{project.challenge}</p>
          </div>
          
          <div>
            <h4 className="font-headline text-xl text-foreground mb-4 flex items-center gap-2">
              <span className="text-primary">•</span> {t("landing-portfolio-dialog-solution")}
            </h4>
            <ul className="space-y-3">
              {project.solution.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="font-body leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {project.seniorInsight && (
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mt-2 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
              <h4 className="font-code text-xs text-primary font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                {t("landing-portfolio-dialog-insight")}
              </h4>
              <p className="font-body text-foreground italic leading-relaxed">"{project.seniorInsight}"</p>
            </div>
          )}
          
          <div className="mt-2">
            <h4 className="font-code text-xs text-muted-foreground uppercase tracking-widest mb-3">{t("landing-portfolio-dialog-tech")}</h4>
            <div className="flex flex-wrap gap-2">
              {project.techSpecs.map(tech => (
                <span key={tech} className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-xs font-code tracking-wide border border-border/50">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
