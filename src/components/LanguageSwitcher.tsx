'use client';

import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.button
      onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
      whileHover={{ x: -2, y: -2 }}
      whileTap={{ x: 2, y: 2 }}
      className="neo-btn neo-btn-yellow"
      style={{
        position: 'fixed',
        top: '24px',
        right: '24px',
        zIndex: 50,
        padding: '12px 20px',
        gap: '8px'
      }}
      aria-label="Cambiar idioma"
    >
      <Globe size={18} />
      <span>{language.toUpperCase()}</span>
    </motion.button>
  );
}
