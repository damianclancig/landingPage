
"use client"

import type { ReactNode } from 'react';
import React, { createContext, useState, useEffect, useCallback } from 'react';

type Locale = 'en' | 'es' | 'pt';
type Translations = Record<string, any>; 

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
    return module.default || {}; // Ensure it returns an object
  } catch (error) {
    console.error(`Failed to load translations for ${locale}.json`, error);
    return {}; // Return empty object on error
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Locale>('es'); // Default language
  const [translations, setTranslations] = useState<Translations>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true; // Prevent state updates if component is unmounted

    const fetchTranslations = async () => {
      if (active) setIsLoading(true);
      const loadedTranslations = await loadTranslations(language);
      if (active) {
        setTranslations(loadedTranslations);
        setIsLoading(false);
      }
    };

    fetchTranslations();

    return () => {
      active = false; // Cleanup on unmount or language change
    };
  }, [language]);

  const t = useCallback((key: string, replacements?: Record<string, string | number>): string => {
    if (isLoading) { 
      return key;
    }

    const keys = key.split('.');
    let result = translations;
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        return key; 
      }
    }
    
    if (typeof result === 'string' && replacements) {
      return Object.entries(replacements).reduce((acc, [placeholder, value]) => {
        return acc.replace(`{${placeholder}}`, String(value));
      }, result);
    }

    return typeof result === 'string' ? result : key;
  }, [translations, isLoading]);

  if (isLoading) {
    return null; // Or a global loading spinner
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

