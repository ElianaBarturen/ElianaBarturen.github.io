'use client';

import jsPDF from 'jspdf';

// Información personal
const personalInfo = {
    name: 'Eliana Lizeth Barturen Trujillano',
    email: 'bartureneliana1@gmail.com',
    phone: '+51 921112707',
    location: 'Chiclayo, Perú',
    website: 'ElianaBarturen.github.io',
    linkedin: 'linkedin.com/in/eliana-barturen',
    github: 'github.com/ElianaBarturen'
};

// Educación
const education = {
    degree: 'Bachiller en Ingeniería de Sistemas',
    university: 'Universidad Católica Santo Toribio de Mogrovejo',
    location: 'Chiclayo, Perú',
    period: 'Agosto 2019 - Julio 2025'
};

// Experiencia laboral completa
const experiences = [
    {
        company: 'InnovaHtec',
        role: 'Desarrollador Full Stack',
        period: 'Octubre 2024 - Diciembre 2025',
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
            'Implementación de sistemas de moderación inteligente con Python para detección de contenido indebido.',
            'Diseño de algoritmos de recomendación y gestión de preferencias personalizadas.',
            'Desarrollo de agentes de IA para gestión de consultas y generación de documentos.',
            'Desarrollo de apps móviles Android nativas con Kotlin y multiplataforma con Flutter.',
            'Mejora de interfaces UI/UX aplicando theming centralizado y diseño responsive.',
            'Implementación de arquitecturas limpias (Clean Architecture, MVVM).',
            'Uso de gestión de estado (Provider, Riverpod, Bloc) según complejidad del proyecto.',
            'Desarrollo y mantenimiento de apps Android con Kotlin optimizadas y escalables.',
            'Migración de bases de datos SQL a NoSQL con APIs para integración con Power BI.',
            'Participación activa en metodologías ágiles (Scrum) con sprints y reuniones diarias.'
        ]
    },
    {
        company: 'Unidad Ejecutora de Salud Santa Cruz - OITE',
        role: 'Practicante de Sistemas',
        period: 'Enero 2024 - Febrero 2024',
        achievements: [
            'Desarrollo de consultas SQL avanzadas para extracción, análisis y validación de información.',
            'Diseño y mantenimiento de estructuras de bases de datos PostgreSQL y SQL Server.',
            'Soporte técnico en sistemas institucionales SIGA y SIAF.',
            'Gestión y administración de usuarios con asignación de accesos y permisos.',
            'Participación en cruce de información de diferentes microrredes.'
        ]
    }
];

// Skills por categoría
const skillsByRole: Record<string, { technical: string[]; soft: string[] }> = {
    'Full Stack': {
        technical: [
            'Frontend: React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS',
            'Backend: NestJS, Node.js, Python (Django, Flask), Java, Laravel',
            'Mobile: Flutter, React Native, Kotlin (Android nativo)',
            'Bases de Datos: PostgreSQL, MySQL, MongoDB, Firebase, SQL Server, DynamoDB',
            'Cloud & DevOps: AWS (S3, DynamoDB), Docker, Linux, Git/GitHub',
            'Arquitectura: Clean Architecture, MVVM, Microservicios, APIs REST',
            'Tiempo Real: WebSockets, Firebase Realtime Database',
            'IA/ML: Python, OpenCV, TensorFlow (detección de objetos)',
            'Herramientas: Prisma ORM, Power BI, Swagger, Postman'
        ],
        soft: ['Liderazgo técnico', 'Trabajo en equipo', 'Metodologías ágiles (Scrum)', 'Comunicación efectiva', 'Resolución de problemas', 'Adaptabilidad']
    },
    'Frontend': {
        technical: [
            'Frameworks: React, Next.js, Flutter (Web)',
            'Lenguajes: TypeScript, JavaScript, Dart, HTML5, CSS3',
            'Estilos: Tailwind CSS, CSS Modules, Responsive Design',
            'Estado: Provider, Riverpod, Bloc, Redux',
            'UI/UX: Theming centralizado, diseño responsive multi-dispositivo',
            'Herramientas: Git, Figma, Chrome DevTools',
            'Testing: Jest, Cypress'
        ],
        soft: ['Atención al detalle', 'Creatividad', 'Comunicación con equipos de diseño', 'Adaptabilidad']
    },
    'Backend': {
        technical: [
            'Frameworks: NestJS, Node.js, Express, Django, Flask, Laravel',
            'Lenguajes: TypeScript, Python, Java, PHP',
            'Bases de Datos: PostgreSQL, MySQL, MongoDB, Firebase, DynamoDB',
            'APIs: REST, WebSockets, GraphQL',
            'ORM: Prisma, TypeORM, SQLAlchemy',
            'Cloud: AWS (S3, DynamoDB), Linux, Docker',
            'Arquitectura: Clean Architecture, Microservicios, SOLID',
            'Seguridad: JWT, OAuth, autenticación/autorización'
        ],
        soft: ['Pensamiento analítico', 'Resolución de problemas', 'Trabajo en equipo', 'Documentación técnica']
    },
    'Mobile': {
        technical: [
            'Flutter: Desarrollo multiplataforma (iOS, Android, Web)',
            'Kotlin: Desarrollo Android nativo',
            'Arquitectura: Clean Architecture, MVVM, BLoC',
            'Estado: Provider, Riverpod, Bloc',
            'Backend: Firebase, APIs REST, WebSockets',
            'UI/UX: Material Design, diseño responsive, theming',
            'Almacenamiento: SQLite, Hive, Shared Preferences',
            'Notificaciones: Firebase Cloud Messaging (FCM)'
        ],
        soft: ['Atención a la experiencia de usuario', 'Optimización de rendimiento', 'Testing en múltiples dispositivos']
    },
    'QA': {
        technical: [
            'Testing: Jest, Cypress, Selenium',
            'Bases de Datos: Consultas SQL avanzadas, validación de datos',
            'Análisis: Power BI, Excel avanzado',
            'Herramientas: Postman, Swagger, Git',
            'Metodologías: Scrum, documentación de casos de prueba',
            'Sistemas: SIGA, SIAF (sistemas institucionales)'
        ],
        soft: ['Atención al detalle', 'Pensamiento crítico', 'Comunicación clara', 'Documentación']
    }
};

// Proyectos por rol
const projectsByRole: Record<string, Array<{ title: string; description: string }>> = {
    'Full Stack': [
        { title: 'Plataforma Fintech', description: 'Backend con Clean Architecture y SOLID, NestJS, TypeScript, PostgreSQL con Prisma ORM.' },
        { title: 'Red Social Multiplataforma', description: 'Flutter + NestJS + WebSockets para comunicación en tiempo real. Microservicios.' },
        { title: 'Sistema de Gestión de Viajes', description: 'App móvil Flutter + Firebase + backend Python Django.' },
        { title: 'Sistema de Laboratorio', description: 'Aplicación de escritorio Java + PostgreSQL para gestión de productos.' }
    ],
    'Frontend': [
        { title: 'Red Social Multiplataforma', description: 'Interfaz Flutter con theming centralizado, diseño responsive.' },
        { title: 'Portfolio Personal', description: 'Next.js + TypeScript con diseño Neo-Brutalism responsive.' },
        { title: 'App de Gestión de Viajes', description: 'Interfaz Flutter con UI/UX optimizada para múltiples dispositivos.' }
    ],
    'Backend': [
        { title: 'Plataforma Fintech', description: 'Arquitectura Clean + SOLID, APIs REST con NestJS y TypeScript.' },
        { title: 'Red Social con WebSockets', description: 'Backend NestJS con comunicación en tiempo real y microservicios.' },
        { title: 'Migración SQL a NoSQL', description: 'API para consumo de datos e integración con Power BI.' },
        { title: 'Sistema de Moderación IA', description: 'Python para detección automática de contenido indebido.' }
    ],
    'Mobile': [
        { title: 'Red Social Multiplataforma', description: 'App Flutter con WebSockets, Firebase y arquitectura limpia.' },
        { title: 'App de Gestión de Viajes', description: 'Flutter + Firebase Realtime Database, equipo de 4 desarrolladores.' },
        { title: 'E-commerce Móvil', description: 'App Android para tienda virtual con Flask y MySQL.' },
        { title: 'Diagnóstico de Preeclampsia', description: 'App Android Java con backend Flask y Machine Learning.' }
    ],
    'QA': [
        { title: 'Validación de Datos Institucionales', description: 'Consultas SQL avanzadas en PostgreSQL y SQL Server.' },
        { title: 'Testing de Red Social', description: 'Pruebas de APIs, WebSockets y flujos de usuario.' },
        { title: 'Depuración de Código Legado', description: 'Mejora y debugging de sistemas existentes.' }
    ]
};

type CVRole = 'Full Stack' | 'Frontend' | 'Backend' | 'Mobile' | 'QA';

export function generateCV(role: CVRole): void {
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - margin * 2;
    let y = margin;

    // Colores
    const primaryColor: [number, number, number] = [0, 0, 0];
    const accentColor: [number, number, number] = [100, 100, 100];

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
    doc.text(personalInfo.name.toUpperCase(), margin, 18);

    // Rol
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`${role} Developer`, margin, 26);

    // Contacto en header
    doc.setFontSize(9);
    const contactLine1 = `${personalInfo.email}  |  ${personalInfo.phone}  |  ${personalInfo.location}`;
    const contactLine2 = `${personalInfo.website}  |  ${personalInfo.linkedin}`;
    doc.text(contactLine1, margin, 34);
    doc.text(contactLine2, margin, 40);

    y = 55;

    // ========== PERFIL PROFESIONAL ==========
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('PERFIL PROFESIONAL', margin, y);

    y += 2;
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageWidth - margin, y);
    y += 6;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...accentColor);

    const profileText = `Desarrollador ${role} con experiencia en desarrollo de aplicaciones web, móviles y de escritorio. Especializado en arquitecturas limpias, metodologías ágiles y soluciones tecnológicas innovadoras. Bachiller en Ingeniería de Sistemas con sólida formación académica y experiencia práctica en proyectos reales de alta complejidad.`;

    const profileLines = doc.splitTextToSize(profileText, contentWidth);
    doc.text(profileLines, margin, y);
    y += profileLines.length * 4 + 8;

    // ========== EXPERIENCIA LABORAL ==========
    checkNewPage(40);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('EXPERIENCIA LABORAL', margin, y);

    y += 2;
    doc.line(margin, y, pageWidth - margin, y);
    y += 6;

    experiences.forEach((exp, expIdx) => {
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

        // Logros (filtrar por rol)
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);

        // Seleccionar logros relevantes para el rol
        let relevantAchievements = exp.achievements;
        if (role !== 'Full Stack') {
            const keywords: Record<string, string[]> = {
                'Frontend': ['UI', 'UX', 'Flutter', 'React', 'interfaz', 'responsive', 'diseño', 'theming'],
                'Backend': ['API', 'backend', 'base de datos', 'PostgreSQL', 'NestJS', 'Django', 'arquitectura', 'microservicio', 'Cloud', 'AWS'],
                'Mobile': ['móvil', 'Flutter', 'Android', 'Kotlin', 'Firebase', 'app', 'mobile'],
                'QA': ['testing', 'SQL', 'validación', 'análisis', 'consultas', 'SIGA', 'SIAF']
            };

            relevantAchievements = exp.achievements.filter(ach =>
                keywords[role]?.some(kw => ach.toLowerCase().includes(kw.toLowerCase()))
            ).slice(0, 5);

            if (relevantAchievements.length < 3) {
                relevantAchievements = exp.achievements.slice(0, 4);
            }
        } else {
            relevantAchievements = exp.achievements.slice(0, 6);
        }

        relevantAchievements.forEach(achievement => {
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
    doc.text('EDUCACIÓN', margin, y);

    y += 2;
    doc.line(margin, y, pageWidth - margin, y);
    y += 6;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text(education.degree, margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text(education.period, pageWidth - margin - doc.getTextWidth(education.period), y);
    y += 5;

    doc.setFont('helvetica', 'italic');
    doc.setTextColor(...accentColor);
    doc.text(`${education.university} - ${education.location}`, margin, y);
    y += 10;

    // ========== HABILIDADES TÉCNICAS ==========
    checkNewPage(40);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('HABILIDADES TÉCNICAS', margin, y);

    y += 2;
    doc.line(margin, y, pageWidth - margin, y);
    y += 6;

    const skills = skillsByRole[role];
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
    doc.text('PROYECTOS DESTACADOS', margin, y);

    y += 2;
    doc.line(margin, y, pageWidth - margin, y);
    y += 6;

    const projects = projectsByRole[role];
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
    doc.text('HABILIDADES BLANDAS', margin, y);

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
    doc.text('IDIOMAS', margin, y);

    y += 2;
    doc.line(margin, y, pageWidth - margin, y);
    y += 6;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...accentColor);
    doc.text('Español (Nativo)  •  Inglés (Intermedio)', margin, y);

    // ========== FOOTER ==========
    const footerY = pageHeight - 10;
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(personalInfo.website, pageWidth / 2, footerY, { align: 'center' });

    // Descargar
    doc.save(`CV_ElianaBarturen_${role.replace(' ', '')}.pdf`);
}

export const cvRoles: CVRole[] = ['Full Stack', 'Frontend', 'Backend', 'Mobile', 'QA'];
