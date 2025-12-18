'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown, Download, Sparkles } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden px-6 py-20">
      {/* Sparkles decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <Sparkles className="absolute top-32 left-16 text-pastel-pink animate-float opacity-50" size={18} style={{ animationDelay: '0s' }} />
        <Sparkles className="absolute top-48 right-24 text-pastel-pink animate-float opacity-50" size={14} style={{ animationDelay: '1s' }} />
        <Sparkles className="absolute bottom-32 left-24 text-pastel-pink animate-float opacity-50" size={20} style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
        {/* Título PORTFOLIO */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-bold text-text-dark tracking-tight leading-none">
            {t.hero.title}
          </h1>
        </motion.div>

        {/* Avatar circular */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <img
              src="/avatar.png"
              alt={t.hero.subtitle}
              className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-2 border-pastel-pink shadow-soft"
            />
          </div>
        </motion.div>

        {/* Subtítulos */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-2 mb-8"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-text-dark">
            {t.hero.subtitle}
          </h2>
          <p className="text-xl md:text-2xl font-medium text-soft-pink">
            {t.hero.role}
          </p>
          <p className="text-base md:text-lg text-text-light max-w-2xl mx-auto mt-4">
            {t.hero.description}
          </p>
        </motion.div>

        {/* Botones CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button 
            onClick={scrollToProjects}
            className="bg-soft-pink hover:bg-pink-400 text-white font-semibold px-7 py-3 rounded-full shadow-soft transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-base w-full sm:w-auto"
          >
            {t.hero.cta}
            <ChevronDown size={18} />
          </button>
          <button className="bg-white hover:bg-gray-50 text-text-dark font-semibold px-7 py-3 rounded-full shadow-soft transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-base border-2 border-text-dark w-full sm:w-auto">
            <Download size={18} />
            {t.hero.cta2}
          </button>
        </motion.div>
      </div>
    </section>
  );
}