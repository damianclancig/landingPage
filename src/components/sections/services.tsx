"use client"

import * as React from "react"
import { useTranslation } from "@/hooks/use-translation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Briefcase, Code, Smartphone, TrendingUp } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import SectionHeader from "../layout/section-header"
import { cn } from "@/lib/utils"

interface Service {
  id: string;
  icon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
}

export default function ServicesSection() {
  const { t } = useTranslation()
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  const services: Service[] = [
    { id: "web", icon: Code, titleKey: "services-web-title", descriptionKey: "services-web-description" },
    { id: "mobile", icon: Smartphone, titleKey: "services-mobile-title", descriptionKey: "services-mobile-description" },
    { id: "consulting", icon: TrendingUp, titleKey: "services-consulting-title", descriptionKey: "services-consulting-description" },
  ]

  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCurrent(api.selectedScrollSnap())
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])


  return (
    <section id="services" className="w-full py-16 md:py-24 bg-background dark:bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader icon={Briefcase} titleKey="services-title" />
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto"
        >
          <CarouselContent>
            {services.map((service) => (
              <CarouselItem key={service.id} className="basis-full">
                <div className="p-1 h-full">
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 group bg-card border-primary/50 h-full flex flex-col">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2 border-accent">
                      <service.icon className="w-10 h-10 text-accent group-hover:text-primary transition-colors" />
                      <CardTitle className="font-headline text-xl text-card-foreground group-hover:text-primary transition-colors">{t(service.titleKey)}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-base text-muted-foreground leading-relaxed">
                        {t(service.descriptionKey)}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground mt-4">
          <div className="flex justify-center gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  current === index ? "bg-primary p-1" : "bg-primary/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
