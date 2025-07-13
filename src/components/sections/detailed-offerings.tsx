"use client"

import { useTranslation } from "@/hooks/use-translation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Rocket, Zap, Repeat, Award, MessageSquareQuote } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import SectionHeader from "../layout/section-header"

interface PlanFeature {
  key: string;
}

interface OfferingPlan {
  id: string;
  icon: LucideIcon;
  planNameKey: string;
  titleKey: string;
  descriptionKey: string;
  includesTitleKey: string;
  features: PlanFeature[];
  taglineKey: string;
}

const plansData: OfferingPlan[] = [
  {
    id: "essential",
    icon: Zap,
    planNameKey: "offerings-essential-planName",
    titleKey: "offerings-essential-title",
    descriptionKey: "offerings-essential-description",
    includesTitleKey: "offerings-essential-includesTitle",
    features: [
      { key: "offerings-essential-feature1" },
      { key: "offerings-essential-feature2" },
      { key: "offerings-essential-feature3" },
      { key: "offerings-essential-feature4" },
    ],
    taglineKey: "offerings-essential-tagline",
  },
  {
    id: "continuous",
    icon: Repeat,
    planNameKey: "offerings-continuous-planName",
    titleKey: "offerings-continuous-title",
    descriptionKey: "offerings-continuous-description",
    includesTitleKey: "offerings-continuous-includesTitle",
    features: [
      { key: "offerings-continuous-feature1" },
      { key: "offerings-continuous-feature2" },
      { key: "offerings-continuous-feature3" },
      { key: "offerings-continuous-feature4" },
      { key: "offerings-continuous-feature5" },
    ],
    taglineKey: "offerings-continuous-tagline",
  },
  {
    id: "integral",
    icon: Award,
    planNameKey: "offerings-integral-planName",
    titleKey: "offerings-integral-title",
    descriptionKey: "offerings-integral-description",
    includesTitleKey: "offerings-integral-includesTitle",
    features: [
      { key: "offerings-integral-feature1" },
      { key: "offerings-integral-feature2" },
      { key: "offerings-integral-feature3" },
      { key: "offerings-integral-feature4" },
      { key: "offerings-integral-feature5" },
      { key: "offerings-integral-feature6" },
    ],
    taglineKey: "offerings-integral-tagline",
  },
];

export default function DetailedOfferingsSection() {
  const { t } = useTranslation()

  return (
    <section id="offerings" className="w-full py-16 md:py-24 bg-background-alt dark:bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader icon={Rocket} titleKey="offerings-mainTitle">
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            {t('offerings-intro')}
          </p>
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {plansData.map((plan, index) => (
            <div
              key={plan.id}
              className={cn(
                index === 2 && plansData.length === 3 && 'md:col-span-2 md:flex md:justify-center lg:col-span-1 lg:flex-none'
              )}
            >
              <Card
                className={cn(
                  "bg-card shadow-lg border-primary/50 flex flex-col h-full hover:shadow-xl transition-shadow duration-300 relative overflow-visible w-full hover:border-primary hover:ring-2 hover:ring-primary hover:bg-primary/5 dark:hover:bg-primary/10",
                   index === 2 && plansData.length === 3 && 'md:max-w-sm lg:max-w-none'
                )}
              >
                <CardHeader className="text-center pt-10 pb-4">
                  <div className="absolute -top-[14px] left-1/2 transform -translate-x-1/2 z-10">
                    <span className="border-2 border-primary text-primary bg-background px-5 py-2 rounded-md text-base font-bold font-headline shadow-lg whitespace-nowrap">
                      {t(plan.planNameKey)}
                    </span>
                  </div>
                  <plan.icon className="w-10 h-10 text-accent mx-auto mb-3" />
                  <CardTitle className="font-headline text-xl text-primary">{t(plan.titleKey)}</CardTitle>
                </CardHeader>
                {/* Changed CardContent to text-left */}
                <CardContent className="flex-grow space-y-4 text-left">
                  <p className="text-sm text-muted-foreground text-left">{t(plan.descriptionKey)}</p>
                  {/* Ensure the div containing 'Incluye' and list is left-aligned */}
                  <div>
                    <h4 className="font-semibold text-foreground/90 mb-2">{t(plan.includesTitleKey)}</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
 {plan.features.map((feature, idx) => (
 <li key={idx} className="flex items-start">
 <span className="text-primary mr-2">&#8226;</span>
 <span>{t(feature.key)}</span>
 </li>
 ))}
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground italic pt-2">{t(plan.taglineKey)}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center">
          <MessageSquareQuote className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-headline font-bold mb-3 text-primary">
            {t('offerings-cta-question')}
          </h3>
          <p className="mb-4 text-muted-foreground">{t('offerings-cta-invitation')}</p>
          <Link href="#contact" passHref>
            <Button variant="default" size="lg" className="transition-transform hover:scale-105 shadow-md">
              {t('offerings-cta-actionText')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
