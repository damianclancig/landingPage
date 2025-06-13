
"use client"

import { useTranslation } from "@/hooks/use-translation"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { UserCircle } from "lucide-react"
import SectionHeader from "../layout/section-header"

export default function BioSection() {
  const { t } = useTranslation()

  return (
    <section id="bio" className="w-full py-16 md:py-24 bg-background-alt dark:bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader icon={UserCircle} titleKey="bio.title" />
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-1 flex flex-row md:flex-col gap-4 justify-center items-center">
            <div className="w-[45%] max-w-[140px] md:w-auto md:max-w-[400px]">
              <Image 
                src="https://placehold.co/300x300.png" 
                alt={t('hero.name')}
                width={300} 
                height={300} 
                className="rounded-lg object-cover shadow-xl border-2 border-accent/30 aspect-square w-full h-auto"
                data-ai-hint="man portrait"
              />
            </div>
            <div className="w-[45%] max-w-[140px] md:w-auto md:max-w-[400px]">
              <Image 
                src="https://placehold.co/300x300.png" 
                alt={t('bio.secondImageAlt', {defaultValue: "Espacio de trabajo del desarrollador"})}
                width={300} 
                height={300} 
                className="rounded-lg object-cover shadow-xl border-2 border-accent/30 aspect-square w-full h-auto"
                data-ai-hint="workspace desk"
              />
            </div>
          </div>
          <div className="md:col-span-4">
            <Card className="shadow-lg border-border/50">
              <CardContent className="p-6 md:p-8 space-y-4 text-left">
                <p className="text-lg text-foreground/90 leading-relaxed font-body">
                  {t('bio.paragraph1').replace('[X]', '15')} {/* Replace [X] with actual years */}
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed font-body">
                  {t('bio.paragraph2')}
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed font-body">
                  {t('bio.paragraph3')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
