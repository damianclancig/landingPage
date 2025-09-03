"use client"

import * as React from "react"
import { Check, Languages } from "lucide-react"

import { useTranslation } from "@/hooks/use-translation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

type Locale = 'en' | 'es' | 'pt';

const languageOptions: { value: Locale; labelKey: string }[] = [
  { value: 'en', labelKey: 'languages-en' },
  { value: 'es', labelKey: 'languages-es' },
  { value: 'pt', labelKey: 'languages-pt' },
];

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label={t('Change language')} className="border-accent/80">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languageOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => setLanguage(option.value)}
            className={cn("flex items-center justify-between", language === option.value && "bg-accent")}
          >
            {t(option.labelKey)}
            {language === option.value && <Check className="h-4 w-4 ml-2" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
