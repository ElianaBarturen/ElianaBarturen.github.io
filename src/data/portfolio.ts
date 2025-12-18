import { PortfolioData } from "../types";

export const portfolioData: PortfolioData = {
    name: "Eliana Lizeth Barturen Trujillano",
    role: "Bachiller en Ingeniería de Sistemas | Full Stack Developer",
    description: "Desarrolladora Full Stack con experiencia en aplicaciones móviles, web y de escritorio. Especializada en Flutter, NestJS, Python, Clean Architecture y soluciones cloud. Apasionada por transformar ideas en soluciones tecnológicas innovadoras.",
    skills: [
        // Frontend
        { name: "Flutter (Web & Mobile)", category: "Frontend", level: 92 },
        { name: "React / Next.js", category: "Frontend", level: 88 },
        { name: "TypeScript / JavaScript", category: "Frontend", level: 90 },
        { name: "UI/UX & Responsive Design", category: "Frontend", level: 85 },

        // Backend
        { name: "NestJS / Node.js", category: "Backend", level: 92 },
        { name: "Python (Django / Flask)", category: "Backend", level: 90 },
        { name: "Java / Kotlin", category: "Backend", level: 85 },
        { name: "APIs REST & WebSockets", category: "Backend", level: 90 },
        { name: "Clean Architecture / SOLID", category: "Backend", level: 88 },

        // Mobile
        { name: "Flutter Multiplataforma", category: "Mobile", level: 92 },
        { name: "Android Nativo (Kotlin)", category: "Mobile", level: 82 },
        { name: "Firebase & FCM", category: "Mobile", level: 88 },

        // DevOps & Databases
        { name: "PostgreSQL / MySQL", category: "DevOps", level: 90 },
        { name: "MongoDB / Firebase", category: "DevOps", level: 85 },
        { name: "AWS (S3, DynamoDB)", category: "DevOps", level: 80 },
        { name: "Docker / Linux", category: "DevOps", level: 78 },
        { name: "Git / GitHub", category: "DevOps", level: 92 },
    ],
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
};