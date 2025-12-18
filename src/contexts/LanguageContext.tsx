'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Language, getTranslation, translations } from '../lib/translations';

type Translation = typeof translations.es;

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: getTranslation(language),
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
