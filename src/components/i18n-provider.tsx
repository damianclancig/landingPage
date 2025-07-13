"use client"

import type { ReactNode } from 'react';
import React, { createContext, useState, useEffect, useCallback } from 'react';

type Locale = 'en' | 'es' | 'pt';
type Translations = Record<string, string>; 

export interface LanguageContextType {
  language: Locale;
  setLanguage: (language: Locale) => void;
  t: (key: string, replacements?: Record<string, string | number>) => string;
  translations: Translations;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const loadTranslations = async (locale: Locale): Promise<Translations> => {
  try {
    const module = await import(`@/dictionaries/${locale}.json`);
    return module.default || {};
  } catch (error) {
    console.error(`Failed to load translations for ${locale}.json`, error);
    return {};
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Locale>('es');
  const [translations, setTranslations] = useState<Translations>({});

  useEffect(() => {
    const fetchTranslations = async () => {
      const loadedTranslations = await loadTranslations(language);
      setTranslations(loadedTranslations);
    };

    fetchTranslations();
  }, [language]);

  const t = useCallback((key: string, replacements?: Record<string, string | number>): string => {
    let result = translations[key] || key;
    
    if (replacements) {
      result = Object.entries(replacements).reduce((acc, [placeholder, value]) => {
        return acc.replace(`{${placeholder}}`, String(value));
      }, result);
    }

    return result;
  }, [translations]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};
