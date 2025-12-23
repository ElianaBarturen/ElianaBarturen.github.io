'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { getPortfolioData } from '../data/portfolio';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const { t, language } = useLanguage();
  
  // Obtener datos del portfolio según el idioma actual
  const portfolioData = useMemo(() => getPortfolioData(language), [language]);

  return (
    <section id="experience" className="py-20 px-6 bg-white w-full">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-dark mb-4">
            {t.experience.title}
          </h2>
        </motion.div>

        <div className="space-y-6">
          {portfolioData.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 shadow-soft"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-soft flex-shrink-0">
                  <Briefcase className="text-soft-pink" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-text-dark">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-text-light font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-soft-pink mb-2">
                    {exp.company}
                  </p>
                  <p className="text-sm text-text-light leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}