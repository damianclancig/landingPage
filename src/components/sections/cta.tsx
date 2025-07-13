"use client"

import { useTranslation } from "@/hooks/use-translation"
import { Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CtaSection() {
  const { t } = useTranslation()

  return (
    <section id="cta-freelancer" className="w-full py-16 md:py-24 bg-background-alt dark:bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
        <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
        <h2 className="text-3xl font-headline font-bold mb-6 text-primary">
          {t('cta-title')}
        </h2>
        <div className="space-y-4 text-lg text-muted-foreground">
            <p>
            {t('cta-paragraph1')}
            </p>
            <p>
            {t('cta-paragraph2')}
            </p>
        </div>
        <div className="mt-8">
            <Link href="#contact" passHref>
                <Button size="lg" className="transition-transform hover:scale-105 shadow-lg">
                    {t('cta-actionButton')}
                </Button>
            </Link>
        </div>
      </div>
    </section>
  )
}
