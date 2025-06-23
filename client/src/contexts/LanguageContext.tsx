import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, I18n } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ko');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize I18n and load saved language
    I18n.init();
    const savedLang = I18n.getLanguage();
    setLanguage(savedLang);
    setIsInitialized(true);
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    I18n.setLanguage(lang);
    // Force re-render by updating a key or triggering state change
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
  };

  const toggleLanguage = () => {
    const newLang = language === 'ko' ? 'en' : 'ko';
    handleSetLanguage(newLang);
  };

  // Don't render children until language is initialized
  if (!isInitialized) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}