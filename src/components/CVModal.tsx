'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Code2, Server, Smartphone, Bug, Layers } from 'lucide-react';
import { generateCV, cvRoles } from '../lib/cvGenerator';
import { useLanguage } from '../contexts/LanguageContext';

interface CVModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const roleIcons: Record<string, React.ElementType> = {
    'Full Stack': Layers,
    'Frontend': Code2,
    'Backend': Server,
    'Mobile': Smartphone,
    'QA': Bug
};

const roleColors: Record<string, string> = {
    'Full Stack': '#FF6B9D',
    'Frontend': '#4ECDC4',
    'Backend': '#A855F7',
    'Mobile': '#FFEB3B',
    'QA': '#FF9500'
};

const labels = {
    es: {
        title: 'Descargar CV',
        description: 'Selecciona el tipo de CV que deseas descargar. Cada versión está optimizada para resaltar las habilidades relevantes del área seleccionada.',
        footer: 'Formato PDF • Diseño Harvard • Optimizado para ATS',
        descriptions: {
            'Full Stack': 'CV completo con todas las habilidades Frontend, Backend, Mobile y más.',
            'Frontend': 'Enfocado en React, Next.js, Flutter Web, UI/UX y diseño responsive.',
            'Backend': 'APIs REST, NestJS, bases de datos, arquitectura y cloud.',
            'Mobile': 'Flutter, Kotlin, Firebase, apps nativas y multiplataforma.',
            'QA': 'Testing, SQL, análisis de datos y aseguramiento de calidad.'
        }
    },
    en: {
        title: 'Download CV',
        description: 'Select the type of CV you want to download. Each version is optimized to highlight the skills relevant to the selected area.',
        footer: 'PDF Format • Harvard Design • ATS Optimized',
        descriptions: {
            'Full Stack': 'Complete CV covering Frontend, Backend, Mobile skills and more.',
            'Frontend': 'Focused on React, Next.js, Flutter Web, UI/UX and responsive design.',
            'Backend': 'REST APIs, NestJS, databases, architecture and cloud.',
            'Mobile': 'Flutter, Kotlin, Firebase, native and cross-platform apps.',
            'QA': 'Testing, SQL, data analysis and quality assurance.'
        }
    }
};

export default function CVModal({ isOpen, onClose }: CVModalProps) {
    const { language } = useLanguage();
    const currentLabels = labels[language];

    const handleDownload = (role: typeof cvRoles[number]) => {
        generateCV(role, language);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            zIndex: 100,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '20px'
                        }}
                    >
                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                backgroundColor: '#FEF9EF',
                                border: '4px solid #000',
                                boxShadow: '8px 8px 0 #000',
                                maxWidth: '600px',
                                width: '100%',
                                maxHeight: '90vh',
                                overflow: 'auto',
                                position: 'relative'
                            }}
                        >
                            {/* Header */}
                            <div style={{
                                backgroundColor: '#000',
                                color: '#fff',
                                padding: '20px 24px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <h2 style={{
                                    fontSize: '1.3rem',
                                    fontWeight: 700,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px'
                                }}>
                                    <Download size={24} />
                                    {currentLabels.title}
                                </h2>
                                <button
                                    onClick={onClose}
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        color: '#fff',
                                        cursor: 'pointer',
                                        padding: '4px'
                                    }}
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Content */}
                            <div style={{ padding: '24px' }}>
                                <p style={{
                                    marginBottom: '24px',
                                    color: '#666',
                                    fontSize: '0.95rem',
                                    lineHeight: 1.6
                                }}>
                                    {currentLabels.description}
                                </p>

                                {/* Role Options */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {cvRoles.map((role) => {
                                        const Icon = roleIcons[role];
                                        const color = roleColors[role];
                                        const description = currentLabels.descriptions[role] || '';

                                        return (
                                            <motion.button
                                                key={role}
                                                onClick={() => handleDownload(role)}
                                                whileHover={{ x: -4, y: -4 }}
                                                whileTap={{ x: 2, y: 2 }}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '16px',
                                                    padding: '16px 20px',
                                                    backgroundColor: '#fff',
                                                    border: '3px solid #000',
                                                    boxShadow: '4px 4px 0 #000',
                                                    cursor: 'pointer',
                                                    textAlign: 'left',
                                                    transition: 'box-shadow 0.1s, transform 0.1s'
                                                }}
                                            >
                                                {/* Icon */}
                                                <div style={{
                                                    width: '50px',
                                                    height: '50px',
                                                    backgroundColor: color,
                                                    border: '2px solid #000',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    flexShrink: 0
                                                }}>
                                                    <Icon size={24} color={color === '#FFEB3B' ? '#000' : '#fff'} />
                                                </div>

                                                {/* Text */}
                                                <div style={{ flex: 1 }}>
                                                    <h3 style={{
                                                        fontSize: '1.1rem',
                                                        fontWeight: 700,
                                                        marginBottom: '4px',
                                                        color: '#000'
                                                    }}>
                                                        CV {role}
                                                        {language === 'en' && role === 'Full Stack' ? ' (Recommended)' : ''}
                                                    </h3>
                                                    <p style={{
                                                        fontSize: '0.85rem',
                                                        color: '#666',
                                                        lineHeight: 1.4
                                                    }}>
                                                        {description}
                                                    </p>
                                                </div>

                                                {/* Download Icon */}
                                                <Download size={20} style={{ color: '#000', flexShrink: 0 }} />
                                            </motion.button>
                                        );
                                    })}
                                </div>

                                {/* Footer */}
                                <p style={{
                                    marginTop: '24px',
                                    textAlign: 'center',
                                    fontSize: '0.8rem',
                                    color: '#999'
                                }}>
                                    {currentLabels.footer}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
