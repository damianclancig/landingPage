"use client";

import { useContext, useEffect } from 'react';
import { LanguageContext, LanguageContextType } from './i18n-provider';

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default function HtmlLangUpdater() {
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return null; // This component does not render anything
}
