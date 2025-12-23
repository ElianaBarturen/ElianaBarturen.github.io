'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { getPortfolioData } from '../data/portfolio';
import { Code2, Smartphone, Database, Bug, Server } from 'lucide-react';

const categoryIcons = {
  Frontend: Code2,
  Backend: Database,
  Mobile: Smartphone,
  QA: Bug,
  DevOps: Server,
};

export default function About() {
  const { t, language } = useLanguage();
  
  // Obtener datos del portfolio según el idioma actual
  const portfolioData = useMemo(() => getPortfolioData(language), [language]);

  const skillsByCategory = portfolioData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof portfolioData.skills>);

  return (
    <section id="about" className="py-20 px-6 bg-white w-full">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-dark mb-4">
            {t.about.title}
          </h2>
          <p className="text-lg text-text-light max-w-3xl mx-auto">
            {t.about.description}
          </p>
        </motion.div>

        {/* Skills por categoría */}
        <div className="space-y-6">
          {Object.entries(skillsByCategory).map(([category, skills], catIdx) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons] || Code2;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-soft"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-soft flex-shrink-0">
                    <Icon className="text-soft-pink" size={24} />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-text-dark">
                    {category}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (catIdx * 0.1) + (idx * 0.05) }}
                      className="bg-white rounded-xl p-4"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-text-dark text-sm">{skill.name}</span>
                        <span className="text-xs text-text-light font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: (catIdx * 0.1) + (idx * 0.05) }}
                          className="h-full bg-soft-pink rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}