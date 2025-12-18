'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import LanguageSwitcher from '../components/LanguageSwitcher';
import CVModal from '../components/CVModal';
import { useLanguage } from '../contexts/LanguageContext';
import { portfolioData } from '../data/portfolio';
import {
  Download,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Smartphone,
  Database,
  Bug,
  Server,
  Briefcase,
  ArrowRight,
  ChevronDown,
  MapPin,
  Phone
} from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
  Frontend: Code2,
  Backend: Server,
  Mobile: Smartphone,
  QA: Bug,
  DevOps: Database,
};

const categoryColors: Record<string, { bg: string; text: string }> = {
  Frontend: { bg: '#FF6B9D', text: '#fff' },
  Backend: { bg: '#4ECDC4', text: '#000' },
  Mobile: { bg: '#A855F7', text: '#fff' },
  QA: { bg: '#FF9500', text: '#000' },
  DevOps: { bg: '#84CC16', text: '#000' },
};

// Información de contacto
const contactInfo = {
  email: 'bartureneliana1@gmail.com',
  phone: '+51 921112707',
  location: 'Chiclayo, Perú',
  github: 'https://github.com/ElianaBarturen',
  linkedin: 'https://linkedin.com/in/eliana-barturen'
};

export default function Home() {
  const { t } = useLanguage();
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const skillsByCategory = portfolioData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof portfolioData.skills>);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#FEF9EF',
      backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)',
      backgroundSize: '40px 40px'
    }}>
      {/* Language Switcher */}
      <LanguageSwitcher />

      {/* CV Modal */}
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />

      {/* ==================== HERO SECTION ==================== */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 24px 60px'
      }}>
        <div style={{
          maxWidth: '1300px',
          width: '100%',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '48px',
          alignItems: 'center'
        }}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Portfolio Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                display: 'inline-block',
                backgroundColor: '#FFEB3B',
                padding: '14px 28px',
                marginBottom: '24px',
                border: '3px solid #000',
                boxShadow: '5px 5px 0 #000',
                fontWeight: 700,
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}
            >
              ✨ {t.hero.title}
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.05,
                marginBottom: '20px',
                color: '#000',
                fontFamily: 'var(--font-space-grotesk), sans-serif'
              }}
            >
              Eliana Barturen
            </motion.h1>

            {/* Role */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{
                fontSize: 'clamp(1.3rem, 3vw, 2rem)',
                fontWeight: 700,
                color: '#FF6B9D',
                marginBottom: '16px'
              }}
            >
              {t.hero.subtitle}
            </motion.h2>

            {/* Developer Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{
                display: 'inline-block',
                backgroundColor: '#4ECDC4',
                padding: '10px 20px',
                marginBottom: '16px',
                border: '3px solid #000',
                boxShadow: '4px 4px 0 #000',
                fontWeight: 700,
                fontSize: '13px',
                textTransform: 'uppercase'
              }}
            >
              💻 {t.hero.role}
            </motion.div>

            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '20px',
                fontSize: '0.95rem',
                color: '#666'
              }}
            >
              <MapPin size={18} style={{ color: '#FF6B9D' }} />
              {contactInfo.location}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.75,
                color: '#4a4a4a',
                marginBottom: '32px',
                maxWidth: '520px'
              }}
            >
              {t.hero.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}
            >
              <motion.button
                whileHover={{ x: -3, y: -3 }}
                whileTap={{ x: 3, y: 3 }}
                onClick={() => setIsCVModalOpen(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  backgroundColor: '#FF6B9D',
                  color: '#fff',
                  padding: '16px 28px',
                  border: '3px solid #000',
                  boxShadow: '5px 5px 0 #000',
                  fontWeight: 700,
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.1s, transform 0.1s'
                }}
              >
                <Download size={20} />
                {t.hero.cta2}
              </motion.button>

              <motion.button
                whileHover={{ x: -3, y: -3 }}
                whileTap={{ x: 3, y: 3 }}
                onClick={() => scrollToSection('projects')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  backgroundColor: '#fff',
                  color: '#000',
                  padding: '16px 28px',
                  border: '3px solid #000',
                  boxShadow: '5px 5px 0 #000',
                  fontWeight: 700,
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.1s, transform 0.1s'
                }}
              >
                <ArrowRight size={20} />
                {t.hero.cta}
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              style={{ display: 'flex', gap: '12px' }}
            >
              <motion.a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: -2, y: -2 }}
                whileTap={{ x: 2, y: 2 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '52px',
                  height: '52px',
                  backgroundColor: '#fff',
                  color: '#000',
                  border: '3px solid #000',
                  boxShadow: '4px 4px 0 #000',
                  cursor: 'pointer'
                }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: -2, y: -2 }}
                whileTap={{ x: 2, y: 2 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '52px',
                  height: '52px',
                  backgroundColor: '#4ECDC4',
                  color: '#000',
                  border: '3px solid #000',
                  boxShadow: '4px 4px 0 #000',
                  cursor: 'pointer'
                }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href={`mailto:${contactInfo.email}`}
                whileHover={{ x: -2, y: -2 }}
                whileTap={{ x: 2, y: 2 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '52px',
                  height: '52px',
                  backgroundColor: '#FF6B9D',
                  color: '#fff',
                  border: '3px solid #000',
                  boxShadow: '4px 4px 0 #000',
                  cursor: 'pointer'
                }}
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - LARGER Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div style={{ position: 'relative', maxWidth: '550px', width: '100%' }}>
              {/* Shadow Box */}
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                right: '-16px',
                bottom: '-16px',
                backgroundColor: '#FFEB3B',
                border: '4px solid #000',
                zIndex: 0
              }} />
              {/* Image - BIGGER */}
              <motion.img
                src="/portada2.png"
                alt={portfolioData.name}
                whileHover={{ scale: 1.02 }}
                style={{
                  position: 'relative',
                  zIndex: 1,
                  width: '100%',
                  height: 'auto',
                  border: '4px solid #000',
                  backgroundColor: '#fff',
                  objectFit: 'cover'
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={() => scrollToSection('skills')}
          style={{
            position: 'absolute',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={22} />
          </motion.div>
        </motion.div>
      </section>

      {/* ==================== SKILLS SECTION ==================== */}
      <section id="skills" style={{
        padding: '100px 24px',
        backgroundColor: '#fff',
        borderTop: '4px solid #000',
        borderBottom: '4px solid #000'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <div style={{
              display: 'inline-block',
              backgroundColor: '#A855F7',
              color: '#fff',
              padding: '12px 24px',
              marginBottom: '20px',
              border: '3px solid #000',
              boxShadow: '4px 4px 0 #000',
              fontWeight: 700,
              fontSize: '14px',
              textTransform: 'uppercase'
            }}>
              🚀 Tech Stack
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              color: '#000',
              fontFamily: 'var(--font-space-grotesk), sans-serif'
            }}>
              {t.about.title}
            </h2>
          </motion.div>

          {/* Skills Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px'
          }}>
            {Object.entries(skillsByCategory).map(([category, skills], catIdx) => {
              const Icon = categoryIcons[category] || Code2;
              const colors = categoryColors[category] || { bg: '#FFEB3B', text: '#000' };

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIdx * 0.1 }}
                  whileHover={{ x: -4, y: -4 }}
                  style={{
                    backgroundColor: '#fff',
                    border: '3px solid #000',
                    boxShadow: '6px 6px 0 #000',
                    padding: '28px',
                    transition: 'transform 0.15s, box-shadow 0.15s'
                  }}
                >
                  {/* Category Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      backgroundColor: colors.bg,
                      color: colors.text,
                      border: '3px solid #000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Icon size={28} />
                    </div>
                    <h3 style={{
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      {category}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {skills.map((skill, idx) => (
                      <div key={skill.name}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                          <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>{skill.name}</span>
                          <span style={{
                            backgroundColor: '#FFEB3B',
                            padding: '4px 12px',
                            border: '2px solid #000',
                            fontWeight: 700,
                            fontSize: '0.75rem',
                            fontFamily: 'var(--font-jetbrains), monospace'
                          }}>
                            {skill.level}%
                          </span>
                        </div>
                        <div style={{
                          height: '16px',
                          backgroundColor: '#FEF9EF',
                          border: '2px solid #000',
                          overflow: 'hidden'
                        }}>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 + idx * 0.08 }}
                            style={{
                              height: '100%',
                              backgroundColor: colors.bg
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== PROJECTS SECTION ==================== */}
      <section id="projects" style={{
        padding: '100px 24px',
        backgroundColor: '#FEF9EF'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <div style={{
              display: 'inline-block',
              backgroundColor: '#FF6B9D',
              color: '#fff',
              padding: '12px 24px',
              marginBottom: '20px',
              border: '3px solid #000',
              boxShadow: '4px 4px 0 #000',
              fontWeight: 700,
              fontSize: '14px',
              textTransform: 'uppercase'
            }}>
              💼 Portafolio
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              color: '#000',
              fontFamily: 'var(--font-space-grotesk), sans-serif'
            }}>
              {t.projects.title}
            </h2>
          </motion.div>

          {/* Projects Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px'
          }}>
            {portfolioData.projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ x: -5, y: -5 }}
                style={{
                  backgroundColor: '#fff',
                  border: '3px solid #000',
                  boxShadow: '6px 6px 0 #000',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.15s, box-shadow 0.15s'
                }}
              >
                {/* Project Icon Area */}
                <div style={{
                  height: '140px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: ['#FF6B9D', '#4ECDC4', '#A855F7', '#FFEB3B', '#84CC16', '#FF9500'][idx % 6],
                  borderBottom: '3px solid #000',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#fff',
                    border: '3px solid #000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.5rem'
                  }}>
                    {['💻', '🌐', '✈️', '🔬', '🚛', '🏥'][idx % 6]}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '24px' }}>
                  <h3 style={{
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    marginBottom: '12px',
                    fontFamily: 'var(--font-space-grotesk), sans-serif'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#666',
                    lineHeight: 1.7,
                    marginBottom: '18px'
                  }}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          backgroundColor: '#FEF9EF',
                          padding: '5px 12px',
                          border: '2px solid #000',
                          boxShadow: '2px 2px 0 #000',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          textTransform: 'uppercase'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== EXPERIENCE SECTION ==================== */}
      <section id="experience" style={{
        padding: '100px 24px',
        backgroundColor: '#fff',
        borderTop: '4px solid #000',
        borderBottom: '4px solid #000'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <div style={{
              display: 'inline-block',
              backgroundColor: '#4ECDC4',
              padding: '12px 24px',
              marginBottom: '20px',
              border: '3px solid #000',
              boxShadow: '4px 4px 0 #000',
              fontWeight: 700,
              fontSize: '14px',
              textTransform: 'uppercase'
            }}>
              💼 Carrera
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              color: '#000',
              fontFamily: 'var(--font-space-grotesk), sans-serif'
            }}>
              {t.experience.title}
            </h2>
          </motion.div>

          {/* Experience Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {portfolioData.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ x: -4, y: -4 }}
                style={{
                  backgroundColor: '#fff',
                  border: '3px solid #000',
                  boxShadow: '6px 6px 0 #000',
                  padding: '28px',
                  display: 'flex',
                  gap: '24px',
                  transition: 'transform 0.15s, box-shadow 0.15s'
                }}
              >
                {/* Icon */}
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#FF9500',
                  border: '3px solid #000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Briefcase size={28} />
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    marginBottom: '12px'
                  }}>
                    <h3 style={{
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      fontFamily: 'var(--font-space-grotesk), sans-serif'
                    }}>
                      {exp.role}
                    </h3>
                    <span style={{
                      backgroundColor: '#FFEB3B',
                      padding: '6px 14px',
                      border: '2px solid #000',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-jetbrains), monospace'
                    }}>
                      {exp.period}
                    </span>
                  </div>
                  <p style={{
                    color: '#FF6B9D',
                    fontWeight: 700,
                    fontSize: '1rem',
                    marginBottom: '12px'
                  }}>
                    {exp.company}
                  </p>
                  <p style={{
                    color: '#666',
                    lineHeight: 1.7,
                    fontSize: '0.9rem'
                  }}>
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              marginTop: '48px',
              backgroundColor: '#A855F7',
              border: '3px solid #000',
              boxShadow: '6px 6px 0 #000',
              padding: '28px',
              color: '#fff'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#fff',
                border: '3px solid #000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                🎓
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '4px' }}>
                  Bachiller en Ingeniería de Sistemas
                </h3>
                <p style={{ opacity: 0.9, fontSize: '0.95rem' }}>
                  Universidad Católica Santo Toribio de Mogrovejo
                </p>
              </div>
            </div>
            <div style={{
              display: 'inline-block',
              backgroundColor: '#fff',
              color: '#000',
              padding: '6px 14px',
              border: '2px solid #000',
              fontWeight: 700,
              fontSize: '0.85rem',
              fontFamily: 'var(--font-jetbrains), monospace'
            }}>
              2019 - 2025
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== FOOTER / CONTACT ==================== */}
      <footer style={{
        padding: '80px 24px 40px',
        backgroundColor: '#000',
        color: '#fff'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '28px'
            }}
          >
            {/* Badge */}
            <div style={{
              backgroundColor: '#84CC16',
              color: '#000',
              padding: '12px 24px',
              border: '3px solid #fff',
              fontWeight: 700,
              fontSize: '14px',
              textTransform: 'uppercase'
            }}>
              📬 {t.contact.title}
            </div>

            {/* Title */}
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              fontFamily: 'var(--font-space-grotesk), sans-serif'
            }}>
              {t.contact.subtitle}
            </h2>

            <p style={{
              fontSize: '1.1rem',
              color: '#aaa',
              maxWidth: '500px',
              lineHeight: 1.7
            }}>
              {t.contact.description}
            </p>

            {/* Contact Info */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '24px',
              marginTop: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={20} style={{ color: '#FF6B9D' }} />
                <a href={`mailto:${contactInfo.email}`} style={{ color: '#fff', fontSize: '1rem' }}>
                  {contactInfo.email}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={20} style={{ color: '#4ECDC4' }} />
                <span style={{ color: '#fff', fontSize: '1rem' }}>{contactInfo.phone}</span>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
              <motion.a
                href={`mailto:${contactInfo.email}`}
                whileHover={{ y: -4 }}
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#FF6B9D',
                  color: '#fff',
                  border: '3px solid #fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <Mail size={26} />
              </motion.a>
              <motion.a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#fff',
                  color: '#000',
                  border: '3px solid #fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <Github size={26} />
              </motion.a>
              <motion.a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#4ECDC4',
                  color: '#000',
                  border: '3px solid #fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <Linkedin size={26} />
              </motion.a>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <div style={{
            marginTop: '80px',
            paddingTop: '32px',
            borderTop: '2px solid #333',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px'
          }}>
            <p style={{ fontSize: '1rem', color: '#fff', textAlign: 'center', fontWeight: 600 }}>
              ElianaBarturen.github.io
            </p>
            <p style={{ fontSize: '0.85rem', color: '#666', textAlign: 'center' }}>
              © 2024 Eliana Barturen. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}