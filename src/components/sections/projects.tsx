
"use client"

import { useTranslation } from "@/hooks/use-translation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink, FolderGit2 } from "lucide-react"
import SectionHeader from "../layout/section-header"
import { projectsData } from "@/data/projects"


export default function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="w-full py-16 md:py-24 bg-background dark:bg-background-alt">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader icon={FolderGit2} titleKey="projects-title" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projectsData.map((project) => (
            <Card key={project.id} className="bg-card shadow-lg border-border/50 flex flex-col hover:shadow-xl transition-shadow duration-300 hover:border-primary hover:ring-2 hover:ring-primary hover:bg-primary/5 dark:hover:bg-primary/10">
              <CardHeader>
                <div className="aspect-video relative overflow-hidden rounded-t-lg group">
                  <Image
                    src={project.imageUrl}
                    alt={t(project.titleKey)}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={project.imageHint}
                    unoptimized={project.imageUrl.endsWith('.gif')}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-6 pt-0">
                <CardTitle className="font-headline text-xl text-primary mb-2">{t(project.titleKey)}</CardTitle>
                <p className="text-muted-foreground flex-grow mb-4">{t(project.descriptionKey)}</p>
                <Link href={project.liveUrl} target="_blank" passHref>
                  <Button variant="outline" className="w-full group" disabled={project.liveUrl === '#'}>
                    {t('projects-view-button')}
                    <ExternalLink className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
