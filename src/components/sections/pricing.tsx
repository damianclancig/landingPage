"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, DollarSign } from "lucide-react"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useTranslation } from "@/hooks/use-translation";
import SectionHeader from "../layout/section-header"

interface PricingTier {
  id: string;
  titleKey: string;
  priceKey: string;
  frequencyKey: string;
  featuresKey: string[];
  highlight?: boolean;
}

export default function PricingSection() {

  const { t } = useTranslation()



  const tiers: PricingTier[] = [
    {
      id: "basic",
      titleKey: "pricing.basic.title",
      priceKey: "pricing.basic.price",
      frequencyKey: "pricing.basic.frequency",
      featuresKey: [
        "pricing.basic.features.0",
        "pricing.basic.features.1",
        "pricing.basic.features.2",
        "pricing.basic.features.3",
      ],
    },
    {
      id: "standard",
      titleKey: "pricing.standard.title",
      priceKey: "pricing.standard.price",
      frequencyKey: "pricing.standard.frequency",
      featuresKey: [
        "pricing.standard.features.0",
        "pricing.standard.features.1",
        "pricing.standard.features.2",
        "pricing.standard.features.3",
        "pricing.standard.features.4",
      ],
      highlight: true,
    },
    {
      id: "premium",
      titleKey: "pricing.premium.title",
      priceKey: "pricing.premium.price",
      frequencyKey: "pricing.premium.frequency",
      featuresKey: [
        "pricing.premium.features.0",
        "pricing.premium.features.1",
        "pricing.premium.features.2",
        "pricing.premium.features.3",
        "pricing.premium.features.4",
      ],
    },
  ];

  const renderTierCard = (tier: PricingTier) => (
    <Card
      key={tier.id}
      className={`flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 border-border/50 h-full ${
        "bg-card border-primary/50 h-full"} hover:border-primary hover:ring-2 hover:ring-primary hover:bg-primary/5 dark:hover:bg-primary/10`}
    >
      <CardHeader className="pb-4">
        <CardTitle className="font-headline text-2xl mb-1 text-card-foreground">{t(tier.titleKey)}</CardTitle>
        <div className="flex flex-col"> 
          <span className="text-4xl font-bold text-foreground">{t(tier.priceKey)}</span>
          <span className="text-sm text-muted-foreground mt-1">{t(tier.frequencyKey)}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {tier.featuresKey.map((featureKey, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className={`h-5 w-5 mr-2 flex-shrink-0 text-accent`} />
              <span className="text-sm text-muted-foreground">{t(featureKey)}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );

  return (
    <section id="pricing" className="w-full py-16 md:py-24 bg-background dark:bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader icon={DollarSign} titleKey="pricing.title" />

        <Carousel
          opts={{ align: "start", loop: false }}
          className="w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-5xl mx-auto relative"
        >
          <CarouselContent className="-ml-4">
            {tiers.map((tier, index) => (
              <CarouselItem key={tier.id || index} className="pl-4 basis-full sm:basis-[calc(100%-40px)] md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                 {renderTierCard(tier)}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>

        <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">{t('pricing.customText')}</p>
            <Link href="#contact" passHref>
              <Button variant="default" size="lg" className="transition-transform hover:scale-105 shadow-md">{t('pricing.customCta')}</Button>
            </Link>
          </div>
      </div>
    </section>
  )
}
