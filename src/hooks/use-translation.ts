"use client"

import { useLanguage } from "@/components/html-lang-updater";
import type { LanguageContextType } from "@/components/i18n-provider";

// This hook is now a lightweight wrapper around useLanguage,
// preserving the original hook name for compatibility.
export const useTranslation = (): LanguageContextType => {
  return useLanguage();
};
