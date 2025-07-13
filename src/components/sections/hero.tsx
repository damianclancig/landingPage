"use client"

import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  const { t } = useTranslation()

  return (
    <section id="home" className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
  <Image
    src="/images/background.webp" 
    alt={t('hero-codeBackgroundAlt')}
    fill
    className="blur-sm opacity-20 dark:opacity-30 object-cover"
    priority
  />
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-background via-background/60 to-secondary/20 dark:from-background dark:via-background/70 dark:to-secondary/20"></div>
</div>

      {/* Foreground Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary animate-fade-in-up">
              {t('hero-greeting')}{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                {t('hero-name')}
              </span>
            </h1>
            <p className="text-2xl font-headline md:text-3xl text-foreground/80 animate-fade-in-up animation-delay-200">
              {t('hero-title')}
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl animate-fade-in-up animation-delay-400">
              {t('hero-subtitle')}
            </p>
            <div className="animate-fade-in-up animation-delay-600">
              <Link href="#contact">
                <Button size="lg" className="mt-4 transition-transform hover:scale-105 shadow-lg">
                  {t('hero-cta')}
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center animate-fade-in animation-delay-300">
            <Image
              src="/images/foto-perfil.jpg"
              alt="Developer Illustration"
              width={500}
              height={500}
              className="rounded-full object-cover shadow-2xl border-4 border-primary/50"
              data-ai-hint="developer coding"
              priority
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
