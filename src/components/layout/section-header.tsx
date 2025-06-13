"use client"

import type { LucideIcon } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

interface SectionHeaderProps {
  icon: LucideIcon;
  titleKey: string;
  children?: React.ReactNode;
}

export default function SectionHeader({ icon: Icon, titleKey, children }: SectionHeaderProps) {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-center text-center mb-12">
      <Icon className="w-16 h-16 text-primary mb-4" />
      <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl text-primary">
        {t(titleKey)}
      </h2>
      {children}
    </div>
  )
}
