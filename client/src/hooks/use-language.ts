import { useState, useEffect } from 'react';
import { I18n, Language } from '@/lib/i18n';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('ko');
  const [, forceUpdate] = useState({});

  useEffect(() => {
    // Initialize and set language
    I18n.init();
    setLanguage(I18n.getLanguage());

    // Listen for language changes
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail);
      forceUpdate({}); // Force re-render
    };

    window.addEventListener('languageChanged', handleLanguageChange as EventListener);
    
    return () => {
      window.removeEventListener('languageChanged', handleLanguageChange as EventListener);
    };
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    I18n.setLanguage(lang);
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
  };

  const toggleLanguage = () => {
    const newLang = language === 'ko' ? 'en' : 'ko';
    changeLanguage(newLang);
  };

  return {
    language,
    setLanguage: changeLanguage,
    toggleLanguage,
    t: I18n.t()
  };
}