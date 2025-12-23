'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { getPortfolioData } from '../data/portfolio';
import { ChevronLeft, ChevronRight, Code2, Smartphone, Database, Bug, Server, Briefcase, ExternalLink, Github } from 'lucide-react';

const categoryIcons = {
  Frontend: Code2,
  Backend: Database,
  Mobile: Smartphone,
  QA: Bug,
  DevOps: Server,
};

type Tab = 'about' | 'skills' | 'projects' | 'experience';

export default function PortfolioHub() {
  const { t, language } = useLanguage();
  const [currentTab, setCurrentTab] = useState<Tab>('projects');
  const [currentProjectPage, setCurrentProjectPage] = useState(0);
  const [skillPageByCategory, setSkillPageByCategory] = useState<Record<string, number>>({});
  const projectsPerPage = 2;
  const skillsPerCategoryPerPage = 4;

  // Obtener datos del portfolio según el idioma actual
  const portfolioData = useMemo(() => getPortfolioData(language), [language]);

  const skillsByCategory = portfolioData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof portfolioData.skills>);

  const totalProjectPages = Math.ceil(portfolioData.projects.length / projectsPerPage);
  const currentProjects = portfolioData.projects.slice(
    currentProjectPage * projectsPerPage,
    (currentProjectPage * projectsPerPage) + projectsPerPage
  );

  const tabs: { id: Tab; label: string }[] = [
    { id: 'about', label: t.about.title },
    { id: 'skills', label: t.skills.title },
    { id: 'projects', label: t.projects.title },
    { id: 'experience', label: t.experience.title },
  ];

  return (
    <div className="min-h-screen bg-white w-full">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-16 md:py-20">
        {/* Header con imagen de portada */}
        <div className="text-center mb-16">
          <div className="mb-10 flex justify-center px-4">
            <img
              src="/portada.png"
              alt="Portfolio"
              className="max-w-lg w-full h-auto object-contain"
            />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-text-dark mb-4 px-4">
            {t.hero.subtitle}
          </h1>
          <p className="text-xl md:text-2xl text-soft-pink font-semibold mb-4 px-4">
            {t.hero.role}
          </p>
          <p className="text-base md:text-lg text-text-light max-w-2xl mx-auto px-4">
            {t.hero.description}
          </p>
        </div>

        {/* Navegación por tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 px-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setCurrentTab(tab.id);
                setCurrentProjectPage(0);
                setSkillPageByCategory({});
              }}
              className={`px-8 py-3 rounded-full font-semibold text-sm md:text-base transition-all ${
                currentTab === tab.id
                  ? 'bg-soft-pink text-white shadow-soft'
                  : 'bg-gray-100 text-text-dark hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Contenido según tab activo */}
        <AnimatePresence mode="wait">
          {currentTab === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 rounded-3xl p-10 md:p-12 lg:p-14 shadow-soft max-w-4xl mx-auto"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text-dark mb-6 text-center">
                {t.about.title}
              </h2>
              <p className="text-base md:text-lg text-text-light text-center max-w-3xl mx-auto leading-relaxed">
                {t.about.description}
              </p>
            </motion.div>
          )}

          {currentTab === 'skills' && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 max-w-5xl mx-auto"
            >
              {Object.entries(skillsByCategory).map(([category, skills], catIdx) => {
                const Icon = categoryIcons[category as keyof typeof categoryIcons] || Code2;
                const currentPage = skillPageByCategory[category] || 0;
                const totalPages = Math.ceil(skills.length / skillsPerCategoryPerPage);
                const startIdx = currentPage * skillsPerCategoryPerPage;
                const endIdx = startIdx + skillsPerCategoryPerPage;
                const displayedSkills = skills.slice(startIdx, endIdx);

                return (
                  <div key={category} className="bg-gray-50 rounded-3xl p-8 md:p-10 lg:p-12 shadow-soft">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-soft flex-shrink-0">
                        <Icon className="text-soft-pink" size={28} />
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-text-dark">{category}</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                      {displayedSkills.map((skill) => (
                        <div key={skill.name} className="bg-white rounded-xl p-5">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-text-dark text-sm">{skill.name}</span>
                            <span className="text-xs text-text-light font-medium">{skill.level}%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-soft-pink rounded-full transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    {totalPages > 1 && (
                      <div className="flex items-center justify-center gap-3 mt-6">
                        <button
                          onClick={() => setSkillPageByCategory({ ...skillPageByCategory, [category]: Math.max(0, currentPage - 1) })}
                          disabled={currentPage === 0}
                          className="p-2 rounded-full bg-white shadow-soft disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                        >
                          <ChevronLeft size={20} className="text-text-dark" />
                        </button>
                        <span className="text-sm text-text-light px-4 font-medium">
                          {currentPage + 1} / {totalPages}
                        </span>
                        <button
                          onClick={() => setSkillPageByCategory({ ...skillPageByCategory, [category]: Math.min(totalPages - 1, currentPage + 1) })}
                          disabled={currentPage === totalPages - 1}
                          className="p-2 rounded-full bg-white shadow-soft disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                        >
                          <ChevronRight size={20} className="text-text-dark" />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </motion.div>
          )}

          {currentTab === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8 max-w-6xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentProjects.map((project, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-3xl overflow-hidden shadow-soft hover:shadow-cute transition-all transform hover:scale-[1.02]">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <div className="absolute bottom-5 right-5 flex gap-3">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/95 hover:bg-white p-3 rounded-full transition-colors shadow-soft"
                          >
                            <ExternalLink size={18} className="text-text-dark" />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/95 hover:bg-white p-3 rounded-full transition-colors shadow-soft"
                          >
                            <Github size={18} className="text-text-dark" />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="font-display text-xl md:text-2xl font-bold text-text-dark mb-4">
                        {project.title}
                      </h3>
                      <p className="text-sm md:text-base text-text-light mb-5 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-pastel-pink text-text-dark px-4 py-2 rounded-full text-xs font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Paginación */}
              {totalProjectPages > 1 && (
                <div className="flex items-center justify-center gap-5 pt-8">
                  <button
                    onClick={() => setCurrentProjectPage(Math.max(0, currentProjectPage - 1))}
                    disabled={currentProjectPage === 0}
                    className="px-6 py-3 rounded-full bg-gray-100 text-text-dark font-semibold text-sm shadow-soft disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-all flex items-center gap-2"
                  >
                    <ChevronLeft size={18} />
                    {t.pagination.previous}
                  </button>
                  <div className="flex gap-2">
                    {Array.from({ length: totalProjectPages }).map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentProjectPage(idx)}
                        className={`w-10 h-10 rounded-full font-semibold text-sm transition-all ${
                          currentProjectPage === idx
                            ? 'bg-soft-pink text-white shadow-soft'
                            : 'bg-gray-100 text-text-dark hover:bg-gray-200'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setCurrentProjectPage(Math.min(totalProjectPages - 1, currentProjectPage + 1))}
                    disabled={currentProjectPage === totalProjectPages - 1}
                    className="px-6 py-3 rounded-full bg-gray-100 text-text-dark font-semibold text-sm shadow-soft disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-all flex items-center gap-2"
                  >
                    {t.pagination.next}
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {currentTab === 'experience' && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 max-w-4xl mx-auto"
            >
              {portfolioData.experience.map((exp, idx) => (
                <div key={idx} className="bg-gray-50 rounded-3xl p-8 md:p-10 lg:p-12 shadow-soft">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-soft flex-shrink-0">
                      <Briefcase className="text-soft-pink" size={32} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                        <h3 className="font-display text-xl md:text-2xl font-bold text-text-dark">
                          {exp.role}
                        </h3>
                        <span className="text-sm text-text-light font-medium">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-lg md:text-xl font-semibold text-soft-pink mb-4">
                        {exp.company}
                      </p>
                      <p className="text-sm md:text-base text-text-light leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}