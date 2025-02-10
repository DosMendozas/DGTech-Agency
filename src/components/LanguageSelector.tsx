import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 text-white hover:text-orange-500 transition-colors"
    >
      <Globe className="w-5 h-5" />
      <span>{i18n.language.toUpperCase()}</span>
    </button>
  );
};

export default LanguageSelector;