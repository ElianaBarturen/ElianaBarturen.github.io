import { PortfolioData } from "../types";
import { Language } from "../lib/translations";

// Datos compartidos (no requieren traducción)
const sharedSkills = [
    // Frontend
    { name: "Flutter (Web & Mobile)", category: "Frontend" as const, level: 92 },
    { name: "React / Next.js", category: "Frontend" as const, level: 88 },
    { name: "TypeScript / JavaScript", category: "Frontend" as const, level: 90 },
    { name: "UI/UX & Responsive Design", category: "Frontend" as const, level: 85 },

    // Backend
    { name: "NestJS / Node.js", category: "Backend" as const, level: 92 },
    { name: "Python (Django / Flask)", category: "Backend" as const, level: 90 },
    { name: "Java / Kotlin", category: "Backend" as const, level: 85 },
    { name: "APIs REST & WebSockets", category: "Backend" as const, level: 90 },
    { name: "Clean Architecture / SOLID", category: "Backend" as const, level: 88 },

    // Mobile
    { name: "Flutter Multiplataforma", category: "Mobile" as const, level: 92 },
    { name: "Android Nativo (Kotlin)", category: "Mobile" as const, level: 82 },
    { name: "Firebase & FCM", category: "Mobile" as const, level: 88 },

    // DevOps & Databases
    { name: "PostgreSQL / MySQL", category: "DevOps" as const, level: 90 },
    { name: "MongoDB / Firebase", category: "DevOps" as const, level: 85 },
    { name: "AWS (S3, DynamoDB)", category: "DevOps" as const, level: 80 },
    { name: "Docker / Linux", category: "DevOps" as const, level: 78 },
    { name: "Git / GitHub", category: "DevOps" as const, level: 92 },
];

// Datos traducibles por idioma
const portfolioDataByLanguage: Record<Language, Omit<PortfolioData, 'skills'>> = {
    es: {
        name: "Eliana Lizeth Barturen Trujillano",
        role: "Bachiller en Ingeniería de Sistemas | Full Stack Developer",
        description: "Desarrolladora Full Stack con experiencia en aplicaciones móviles, web y de escritorio. Especializada en Flutter, NestJS, Python, Clean Architecture y soluciones cloud. Apasionada por transformar ideas en soluciones tecnológicas innovadoras.",
        projects: [
            {
                title: "Plataforma Fintech",
                description: "Backend con arquitectura Clean Architecture y SOLID, servicios REST con NestJS y TypeScript, modelado de bases de datos PostgreSQL con Prisma ORM.",
                image: "",
                tags: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Clean Architecture"],
            },
            {
                title: "Red Social Multiplataforma",
                description: "Desarrollo de red social con Flutter, Nest.js, Prisma y PostgreSQL. Integración de microservicios, WebSockets para tiempo real y sistema de moderación IA.",
                image: "",
                tags: ["Flutter", "NestJS", "WebSockets", "Microservicios"],
            },
            {
                title: "App Gestión de Viajes",
                description: "Aplicación móvil en Flutter con Firebase Realtime Database y backend Python Django para gestión de procesos en sistema de viajes. Equipo de 4 desarrolladores.",
                image: "",
                tags: ["Flutter", "Firebase", "Python", "Django"],
            },
            {
                title: "Sistema de Laboratorio",
                description: "Aplicación de escritorio para gestión de productos en laboratorio usando Java y PostgreSQL. Responsable principal del producto.",
                image: "",
                tags: ["Java", "PostgreSQL", "Desktop"],
            },
            {
                title: "Seguimiento de Camiones",
                description: "App web y móvil para informar ubicación en tiempo real del camión de recolección, con Laravel, WebSocket y Google Maps API.",
                image: "",
                tags: ["Laravel", "WebSocket", "Google Maps API"],
            },
            {
                title: "Diagnóstico Médico con IA",
                description: "Aplicación Android conectada a backend Flask con Machine Learning (OpenCV, TensorFlow) para diagnóstico de preeclampsia.",
                image: "",
                tags: ["Android", "Flask", "Machine Learning", "Python"],
            },
        ],
        experience: [
            {
                company: "InnovaHtec",
                role: "Desarrollador Full Stack",
                period: "Oct 2024 - Dic 2025",
                description: "Desarrollo multiplataforma con Flutter, NestJS y Python. Arquitectura Clean + SOLID, microservicios, AWS (S3, DynamoDB), Firebase, IA para moderación de contenido, y metodologías ágiles (Scrum).",
            },
            {
                company: "Unidad Ejecutora de Salud Santa Cruz",
                role: "Practicante OITE",
                period: "Ene 2024 - Feb 2024",
                description: "Desarrollo de consultas SQL avanzadas (PostgreSQL, SQL Server). Soporte en sistemas SIGA y SIAF. Gestión de usuarios y permisos a nivel de microrred.",
            },
        ],
    },
    en: {
        name: "Eliana Lizeth Barturen Trujillano",
        role: "Systems Engineering Bachelor | Full Stack Developer",
        description: "Full Stack Developer with experience in mobile, web and desktop applications. Specialized in Flutter, NestJS, Python, Clean Architecture and cloud solutions. Passionate about transforming ideas into innovative technological solutions.",
        projects: [
            {
                title: "Fintech Platform",
                description: "Backend with Clean Architecture and SOLID principles, REST services with NestJS and TypeScript, PostgreSQL database modeling with Prisma ORM.",
                image: "",
                tags: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Clean Architecture"],
            },
            {
                title: "Cross-platform Social Network",
                description: "Social network development with Flutter, Nest.js, Prisma and PostgreSQL. Microservices integration, WebSockets for real-time and AI moderation system.",
                image: "",
                tags: ["Flutter", "NestJS", "WebSockets", "Microservices"],
            },
            {
                title: "Travel Management App",
                description: "Mobile application in Flutter with Firebase Realtime Database and Python Django backend for process management in travel system. Team of 4 developers.",
                image: "",
                tags: ["Flutter", "Firebase", "Python", "Django"],
            },
            {
                title: "Laboratory System",
                description: "Desktop application for product management in laboratory using Java and PostgreSQL. Main product responsible.",
                image: "",
                tags: ["Java", "PostgreSQL", "Desktop"],
            },
            {
                title: "Truck Tracking",
                description: "Web and mobile app to report real-time location of collection truck, with Laravel, WebSocket and Google Maps API.",
                image: "",
                tags: ["Laravel", "WebSocket", "Google Maps API"],
            },
            {
                title: "Medical Diagnosis with AI",
                description: "Android application connected to Flask backend with Machine Learning (OpenCV, TensorFlow) for preeclampsia diagnosis.",
                image: "",
                tags: ["Android", "Flask", "Machine Learning", "Python"],
            },
        ],
        experience: [
            {
                company: "InnovaHtec",
                role: "Full Stack Developer",
                period: "Oct 2024 - Dec 2025",
                description: "Cross-platform development with Flutter, NestJS and Python. Clean + SOLID architecture, microservices, AWS (S3, DynamoDB), Firebase, AI for content moderation, and agile methodologies (Scrum).",
            },
            {
                company: "Health Executing Unit Santa Cruz",
                role: "Systems Intern",
                period: "Jan 2024 - Feb 2024",
                description: "Advanced SQL queries development (PostgreSQL, SQL Server). Support in SIGA and SIAF systems. User management and permissions at micro-network level.",
            },
        ],
    },
};

// Función para obtener datos del portfolio según el idioma
export const getPortfolioData = (language: Language): PortfolioData => {
    return {
        ...portfolioDataByLanguage[language],
        skills: sharedSkills,
    };
};

// Exportar datos por defecto en español para compatibilidad
export const portfolioData: PortfolioData = getPortfolioData('es');