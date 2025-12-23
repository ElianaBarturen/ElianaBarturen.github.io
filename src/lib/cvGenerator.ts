'use client';

import jsPDF from 'jspdf';
import { translations } from './translations';
type Language = 'es' | 'en';

// Helper types
interface Achievement {
    text: string;
    keywords: string[];
}

interface CVData {
    personalInfo: {
        name: string;
        email: string;
        phone: string;
        location: string;
        website: string;
        linkedin: string;
        github: string;
    };
    education: {
        degree: string;
        university: string;
        location: string;
        period: string;
    };
    experience: {
        company: string;
        role: string;
        period: string;
        achievements: string[];
    }[];
    skills: Record<string, { technical: string[]; soft: string[] }>;
    projects: Record<string, { title: string; description: string }[]>;
}

// Datos por idioma
const cvData: Record<Language, CVData> = {
    es: {
        personalInfo: {
            name: 'Eliana Lizeth Barturen Trujillano',
            email: 'bartureneliana1@gmail.com',
            phone: '+51 921112707',
            location: 'Chiclayo, Perú',
            website: 'ElianaBarturen.github.io',
            linkedin: 'linkedin.com/in/eliana-barturen',
            github: 'github.com/ElianaBarturen'
        },
        education: {
            degree: 'Bachiller en Ingeniería de Sistemas',
            university: 'Universidad Católica Santo Toribio de Mogrovejo',
            location: 'Chiclayo, Perú',
            period: 'Agosto 2019 - Julio 2025'
        },
        experience: [
            {
                company: 'InnovaHtec',
                role: 'Desarrollador Full Stack',
                period: 'Oct 2024 - Dic 2025',
                achievements: [
                    'Desarrollo de sistemas multiplataformas con Flutter.',
                    'Implementación de soluciones cloud con AWS (DynamoDB, S3).',
                    'Gestión de base de datos PostgreSQL, MySQL, MongoDB y Firebase.',
                    'Liderazgo de proyectos y gestión de equipos de desarrollo.',
                    'Gestión de despliegues y monitoreo de sistemas en entornos de producción Linux.',
                    'Implementación de Firebase para sincronización y manejo de datos en tiempo real.',
                    'Desarrollo de soluciones de detección de objetos con Python, OpenCV y TensorFlow.',
                    'Estructuración de proyectos Frontend y Backend con arquitecturas limpias.',
                    'Desarrollo de red social multiplataforma con NestJS, Flutter y WebSockets.',
                    'Implementación de sistemas de moderación inteligente con Python.',
                    'Diseño de algoritmos de recomendación y gestión de preferencias personalizadas.',
                    'Desarrollo de agentes de IA para gestión de consultas y generación de documentos.',
                    'Desarrollo de apps móviles Android nativas con Kotlin y multiplataforma con Flutter.',
                    'Mejora de interfaces UI/UX aplicando theming centralizado y diseño responsive.',
                    'Migración de bases de datos SQL a NoSQL con APIs para integración con Power BI.'
                ]
            },
            {
                company: 'Unidad Ejecutora de Salud Santa Cruz - OITE',
                role: 'Practicante de Sistemas',
                period: 'Ene 2024 - Marzo 2024',
                achievements: [
                    'Desarrollo de consultas SQL avanzadas para extracción y análisis de información.',
                    'Diseño y mantenimiento de estructuras de bases de datos PostgreSQL y SQL Server.',
                    'Soporte técnico en sistemas institucionales SIGA y SIAF.',
                    'Gestión y administración de usuarios con asignación de accesos y permisos.'
                ]
            }
        ],
        skills: {
            'Full Stack': {
                technical: [
                    'Frontend: React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind',
                    'Backend: NestJS, Node.js, Python (Django, Flask), Java, Laravel',
                    'Mobile: Flutter, Kotlin (Android), React Native',
                    'DB: PostgreSQL, MySQL, MongoDB, Firebase, DynamoDB',
                    'Cloud/DevOps: AWS, Docker, Linux, Git/GitHub',
                    'Architecture: Clean Arch, MVVM, Microservices, SOLID',
                    'AI/ML: Python, OpenCV, TensorFlow'
                ],
                soft: ['Liderazgo técnico', 'Trabajo en equipo', 'Scrum', 'Comunicación efectiva', 'Resolución de problemas', 'Adaptabilidad']
            },
            'Frontend': {
                technical: ['React, Next.js, Flutter Web', 'TypeScript, JavaScript, Dart', 'Tailwind CSS, CSS Modules', 'State Mgmt (Provider, Riverpod, Bloc)', 'UI/UX Design, Responsive', 'Figma, Git'],
                soft: ['Atención al detalle', 'Creatividad', 'Comunicación', 'Adaptabilidad']
            },
            'Backend': {
                technical: ['NestJS, Node.js, Django, Flask', 'TypeScript, Python, Java', 'PostgreSQL, MySQL, MongoDB, DynamoDB', 'REST, WebSockets, GraphQL', 'AWS, Docker, Linux', 'Clean Architecture, Microservices'],
                soft: ['Pensamiento analítico', 'Resolución de problemas', 'Trabajo en equipo']
            },
            'Mobile': {
                technical: ['Flutter (iOS, Android, Web)', 'Kotlin (Android Native)', 'Firebase, FCM, Analytics', 'Clean Architecture, MVVM', 'State Mgmt (Bloc, Riverpod)', 'Material Design'],
                soft: ['Experiencia de usuario', 'Optimización', 'Testing móvil']
            },
            'QA': {
                technical: ['Jest, Cypress, Selenium', 'SQL Queries, Data Validation', 'Power BI, Excel', 'Postman, Swagger', 'Scrum, Documentation', 'SIGA, SIAF'],
                soft: ['Atención al detalle', 'Pensamiento crítico', 'Documentación']
            }
        },
        projects: {
            'Full Stack': [
                { title: 'Plataforma Fintech', description: 'Backend con Clean Architecture, NestJS, TypeScript y PostgreSQL.' },
                { title: 'Red Social Multiplataforma', description: 'Flutter + NestJS + WebSockets y Microservicios.' },
                { title: 'Sistema de Gestión de Viajes', description: 'App Flutter + Firebase + Python Django.' },
                { title: 'Sistema de Laboratorio', description: 'Java Desktop + PostgreSQL para gestión de productos.' }
            ],
            'Frontend': [
                { title: 'Red Social Multiplataforma', description: 'UI Flutter con theming centralizado y responsive.' },
                { title: 'Portfolio Personal', description: 'Next.js + TypeScript con diseño Neo-Brutalism.' },
                { title: 'App de Gestión de Viajes', description: 'UX optimizada para múltiples dispositivos.' }
            ],
            'Backend': [
                { title: 'Plataforma Fintech', description: 'APIs REST con NestJS, Prisma y SOLID.' },
                { title: 'Red Social con WebSockets', description: 'Backend real-time con microservicios.' },
                { title: 'Migración SQL a NoSQL', description: 'API de integración de datos para Power BI.' }
            ],
            'Mobile': [
                { title: 'Red Social App', description: 'Flutter con WebSockets y Clean Architecture.' },
                { title: 'App Gestión de Viajes', description: 'Flutter + Firebase Realtime Database.' },
                { title: 'Diagnóstico con IA', description: 'Android Java + Backend Flask ML.' }
            ],
            'QA': [
                { title: 'Validación de Datos', description: 'Consultas SQL avanzadas para reportes institucionales.' },
                { title: 'Testing Plataforma', description: 'Pruebas de flujos de usuario y APIs.' }
            ]
        }
    },
    en: {
        personalInfo: {
            name: 'Eliana Lizeth Barturen Trujillano',
            email: 'bartureneliana1@gmail.com',
            phone: '+51 921112707',
            location: 'Chiclayo, Peru',
            website: 'ElianaBarturen.github.io',
            linkedin: 'linkedin.com/in/eliana-barturen',
            github: 'github.com/ElianaBarturen'
        },
        education: {
            degree: 'Systems Engineering Bachelor',
            university: 'Universidad Católica Santo Toribio de Mogrovejo',
            location: 'Chiclayo, Peru',
            period: 'August 2019 - July 2025'
        },
        experience: [
            {
                company: 'InnovaHtec',
                role: 'Full Stack Developer',
                period: 'Oct 2024 - Dec 2025',
                achievements: [
                    'Cross-platform development using Flutter.',
                    'Cloud solutions implementation with AWS (DynamoDB, S3).',
                    'Database management: PostgreSQL, MySQL, MongoDB, Firebase.',
                    'Project leadership and development team management.',
                    'Deployment management and system monitoring in Linux environments.',
                    'Firebase implementation for real-time data synchronization.',
                    'Object detection solutions with Python, OpenCV, and TensorFlow.',
                    'Frontend and Backend structuring with clean architectures.',
                    'Cross-platform social network with NestJS, Flutter, and WebSockets.',
                    'Intelligent moderation systems with Python for content detection.',
                    'Recommendation algorithms and personalized preference management.',
                    'AI agents development for inquiries and document generation.',
                    'Android native apps (Kotlin) and cross-platform (Flutter) development.',
                    'UI/UX improvements using centralized theming and responsive design.',
                    'SQL to NoSQL migration with APIs for Power BI integration.'
                ]
            },
            {
                company: 'Health Executing Unit Santa Cruz - OITE',
                role: 'Systems Intern',
                period: 'Jan 2024 - Feb 2024',
                achievements: [
                    'Advanced SQL queries for information extraction and analysis.',
                    'Design and maintenance of PostgreSQL and SQL Server databases.',
                    'Technical support for SIGA and SIAF institutional systems.',
                    'User management and access control administration.'
                ]
            }
        ],
        skills: {
            'Full Stack': {
                technical: [
                    'Frontend: React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind',
                    'Backend: NestJS, Node.js, Python (Django, Flask), Java, Laravel',
                    'Mobile: Flutter, Kotlin (Android), React Native',
                    'DB: PostgreSQL, MySQL, MongoDB, Firebase, DynamoDB',
                    'Cloud/DevOps: AWS, Docker, Linux, Git/GitHub',
                    'Architecture: Clean Arch, MVVM, Microservices, SOLID',
                    'AI/ML: Python, OpenCV, TensorFlow'
                ],
                soft: ['Technical Leadership', 'Teamwork', 'Scrum', 'Effective Communication', 'Problem Solving', 'Adaptability']
            },
            'Frontend': {
                technical: ['React, Next.js, Flutter Web', 'TypeScript, JavaScript, Dart', 'Tailwind CSS, CSS Modules', 'State Mgmt (Provider, Riverpod, Bloc)', 'UI/UX Design, Responsive', 'Figma, Git'],
                soft: ['Attention to Detail', 'Creativity', 'Communication', 'Adaptability']
            },
            'Backend': {
                technical: ['NestJS, Node.js, Django, Flask', 'TypeScript, Python, Java', 'PostgreSQL, MySQL, MongoDB, DynamoDB', 'REST, WebSockets, GraphQL', 'AWS, Docker, Linux', 'Clean Architecture, Microservices'],
                soft: ['Analytical Thinking', 'Problem Solving', 'Teamwork']
            },
            'Mobile': {
                technical: ['Flutter (iOS, Android, Web)', 'Kotlin (Android Native)', 'Firebase, FCM, Analytics', 'Clean Architecture, MVVM', 'State Mgmt (Bloc, Riverpod)', 'Material Design'],
                soft: ['User Experience', 'Performance Optimization', 'Mobile Testing']
            },
            'QA': {
                technical: ['Jest, Cypress, Selenium', 'SQL Queries, Data Validation', 'Power BI, Excel', 'Postman, Swagger', 'Scrum, Documentation', 'SIGA, SIAF'],
                soft: ['Attention to Detail', 'Critical Thinking', 'Documentation']
            }
        },
        projects: {
            'Full Stack': [
                { title: 'Fintech Platform', description: 'Backend with Clean Architecture, NestJS, TypeScript and PostgreSQL.' },
                { title: 'Cross-platform Social Network', description: 'Flutter + NestJS + WebSockets and Microservices.' },
                { title: 'Travel Management System', description: 'Flutter App + Firebase + Python Django.' },
                { title: 'Laboratory System', description: 'Java Desktop + PostgreSQL for product management.' }
            ],
            'Frontend': [
                { title: 'Social Network UI', description: 'Flutter UI with centralized theming and responsive design.' },
                { title: 'Personal Portfolio', description: 'Next.js + TypeScript with Neo-Brutalism design.' },
                { title: 'Travel App UX', description: 'Optimized UX for multiple devices.' }
            ],
            'Backend': [
                { title: 'Fintech Platform', description: 'REST APIs with NestJS, Prisma and SOLID.' },
                { title: 'Real-time Social Network', description: 'Backend with WebSockets and microservices.' },
                { title: 'SQL to NoSQL Migration', description: 'Data integration API for Power BI.' }
            ],
            'Mobile': [
                { title: 'Social Network App', description: 'Flutter with WebSockets and Clean Architecture.' },
                { title: 'Travel App', description: 'Flutter + Firebase Realtime Database.' },
                { title: 'AI Diagnosis App', description: 'Android Java + Flask ML Backend.' }
            ],
            'QA': [
                { title: 'Data Validation', description: 'Advanced SQL queries for institutional reports.' },
                { title: 'Platform Testing', description: 'User flow and API testing.' }
            ]
        }
    }
};

type CVRole = 'Full Stack' | 'Frontend' | 'Backend' | 'Mobile' | 'QA';

export function generateCV(role: CVRole, lang: Language = 'es'): void {
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });

    const data = cvData[lang];
    const labels = lang === 'es' ? {
        profile: 'PERFIL PROFESIONAL',
        experience: 'EXPERIENCIA LABORAL',
        education: 'EDUCACIÓN',
        skills: 'HABILIDADES TÉCNICAS',
        projects: 'PROYECTOS DESTACADOS',
        softSkills: 'HABILIDADES BLANDAS',
        languages: 'IDIOMAS',
        langText: 'Español (Nativo)  •  Inglés (Intermedio)'
    } : {
        profile: 'PROFESSIONAL PROFILE',
        experience: 'WORK EXPERIENCE',
        education: 'EDUCATION',
        skills: 'TECHNICAL SKILLS',
        projects: 'FEATURED PROJECTS',
        softSkills: 'SOFT SKILLS',
        languages: 'LANGUAGES',
        langText: 'Spanish (Native)  •  English (Intermediate)'
    };

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - margin * 2;
    let y = margin;

    // Colores
    const primaryColor: [number, number, number] = [0, 0, 0];
    const accentColor: [number, number, number] = [80, 80, 80];

    // Helper para agregar nueva página si es necesario
    const checkNewPage = (requiredSpace: number) => {
        if (y + requiredSpace > pageHeight - 25) {
            doc.addPage();
            y = margin;
        }
    };

    // ========== HEADER ==========
    doc.setFillColor(0, 0, 0);
    doc.rect(0, 0, pageWidth, 45, 'F');

    // Nombre
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.text(data.personalInfo.name.toUpperCase(), margin, 18);

    // Rol
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`${role} Developer`, margin, 26);

    // Contacto en header
    doc.setFontSize(9);
    const contactLine1 = `${data.personalInfo.email}  |  ${data.personalInfo.phone}  |  ${data.personalInfo.location}`;
    const contactLine2 = `${data.personalInfo.website}  |  ${data.personalInfo.linkedin}`;
    doc.text(contactLine1, margin, 34);
    doc.text(contactLine2, margin, 40);

    y = 55;

    // ========== PERFIL PROFESIONAL ==========
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(labels.profile, margin, y);

    y += 2;
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageWidth - margin, y);
    y += 6;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...accentColor);

    const roleText = lang === 'es'
        ? `Desarrollador ${role} con experiencia en desarrollo de aplicaciones web, móviles y de escritorio. Especializado en arquitecturas limpias, metodologías ágiles y soluciones tecnológicas innovadoras.`
        : `${role} Developer with experience in web, mobile, and desktop application development. Specialized in clean architectures, agile methodologies, and innovative technological solutions.`;

    const profileLines = doc.splitTextToSize(roleText, contentWidth);
    doc.text(profileLines, margin, y);
    y += profileLines.length * 4 + 8;

    // ========== EXPERIENCIA LABORAL ==========
    checkNewPage(40);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(labels.experience, margin, y);

    y += 2;
    doc.line(margin, y, pageWidth - margin, y);
    y += 6;

    data.experience.forEach((exp) => {
        checkNewPage(30);

        // Empresa y período
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(...primaryColor);
        doc.text(exp.company, margin, y);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.text(exp.period, pageWidth - margin - doc.getTextWidth(exp.period), y);
        y += 5;

        // Rol
        doc.setFont('helvetica', 'italic');
        doc.setTextColor(...accentColor);
        doc.text(exp.role, margin, y);
        y += 6;

        // Logros (todos para Full Stack o filtrados si se quiere, aquí mostrando todos o top N)
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);

        // Mostramos hasta 6-8 logros para que no sea muy largo, o todos
        const showAchievements = exp.achievements.slice(0, 8);

        showAchievements.forEach(achievement => {
            checkNewPage(8);
            const bulletText = `•  ${achievement}`;
            const lines = doc.splitTextToSize(bulletText, contentWidth - 5);
            doc.text(lines, margin + 3, y);
            y += lines.length * 3.5 + 1;
        });

        y += 4;
    });

    // ========== EDUCACIÓN ==========
    checkNewPage(25);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(labels.education, margin, y);

    y += 2;
    doc.line(margin, y, pageWidth - margin, y);
    y += 6;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text(data.education.degree, margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text(data.education.period, pageWidth - margin - doc.getTextWidth(data.education.period), y);
    y += 5;

    doc.setFont('helvetica', 'italic');
    doc.setTextColor(...accentColor);
    doc.text(`${data.education.university} - ${data.education.location}`, margin, y);
    y += 10;

    // ========== HABILIDADES TÉCNICAS ==========
    checkNewPage(40);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(labels.skills, margin, y);

    y += 2;
    doc.line(margin, y, pageWidth - margin, y);
    y += 6;

    const skills = data.skills[role] || data.skills['Full Stack'];
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(...accentColor);

    skills.technical.forEach(skill => {
        checkNewPage(8);
        const lines = doc.splitTextToSize(`•  ${skill}`, contentWidth - 5);
        doc.text(lines, margin + 3, y);
        y += lines.length * 3.5 + 1;
    });

    y += 6;

    // ========== PROYECTOS DESTACADOS ==========
    checkNewPage(35);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(labels.projects, margin, y);

    y += 2;
    doc.line(margin, y, pageWidth - margin, y);
    y += 6;

    const projects = data.projects[role] || data.projects['Full Stack'];
    projects.forEach(project => {
        checkNewPage(12);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(...primaryColor);
        doc.text(`•  ${project.title}`, margin + 3, y);
        y += 4;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(...accentColor);
        const descLines = doc.splitTextToSize(project.description, contentWidth - 10);
        doc.text(descLines, margin + 8, y);
        y += descLines.length * 3.5 + 3;
    });

    y += 4;

    // ========== HABILIDADES BLANDAS ==========
    checkNewPage(20);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(labels.softSkills, margin, y);

    y += 2;
    doc.line(margin, y, pageWidth - margin, y);
    y += 6;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...accentColor);
    const softSkillsText = skills.soft.join('  •  ');
    const softSkillsLines = doc.splitTextToSize(softSkillsText, contentWidth);
    doc.text(softSkillsLines, margin, y);
    y += softSkillsLines.length * 4 + 4;

    // ========== IDIOMAS ==========
    checkNewPage(15);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(labels.languages, margin, y);

    y += 2;
    doc.line(margin, y, pageWidth - margin, y);
    y += 6;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...accentColor);
    doc.text(labels.langText, margin, y);

    // ========== FOOTER ==========
    const footerY = pageHeight - 10;
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(data.personalInfo.website, pageWidth / 2, footerY, { align: 'center' });

    // Descargar
    const suffix = lang === 'en' ? '_EN' : '_ES';
    doc.save(`CV_ElianaBarturen_${role.replace(' ', '')}${suffix}.pdf`);
}

export const cvRoles: CVRole[] = ['Full Stack', 'Frontend', 'Backend', 'Mobile', 'QA'];
