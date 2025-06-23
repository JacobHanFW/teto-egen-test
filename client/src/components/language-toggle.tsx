import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      onClick={toggleLanguage}
      className="h-10 px-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-200 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100"
    >
      <Globe className="h-4 w-4 mr-2" />
      <span className="text-sm font-medium">{language === 'ko' ? '한국어' : 'English'}</span>
    </Button>
  );
}