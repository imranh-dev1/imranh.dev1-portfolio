import type { ReactNode } from "react";

import {
    FaReact,
    FaNodeJs,
    FaFigma,
    FaDocker,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiTypescript,
    SiMongodb,
    SiPrisma,
    SiExpress,
    SiRedux,
    SiCloudinary,
    SiPostman,
    SiTailwindcss,
} from "react-icons/si";

import {
    Code2,
    Cloud,
    Database,
    PanelsTopLeft,
    ShieldCheck,
} from "lucide-react";

export interface Skill {
    name: string;
    icon: ReactNode;
    percent: number;
}

export interface SkillCategory {
    name: string;
    icon: ReactNode;
    description: string;
}

export const frontendSkills: Skill[] = [
    {
        name: "React",
        icon: <FaReact className="text-[#61DAFB]" />,
        percent: 95,
    },
    {
        name: "Next.js",
        icon: <SiNextdotjs className="text-white" />,
        percent: 90,
    },
    {
        name: "TypeScript",
        icon: <SiTypescript className="text-[#3178C6]" />,
        percent: 92,
    },
    {
        name: "JavaScript",
        icon: (
            <span className="font-bold text-[#F7DF1E]">
                JS
            </span>
        ),
        percent: 95,
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-[#06B6D4]" />,
        percent: 95,
    },
    {
        name: "Shadcn UI",
        icon: <PanelsTopLeft className="size-5 text-primary" />,
        percent: 90,
    },
];

export const backendSkills: Skill[] = [
    {
        name: "Node.js",
        icon: <FaNodeJs className="text-[#68A063]" />,
        percent: 92,
    },
    {
        name: "Express.js",
        icon: <SiExpress className="text-gray-200" />,
        percent: 90,
    },
    {
        name: "MongoDB",
        icon: <SiMongodb className="text-[#47A248]" />,
        percent: 90,
    },
    {
        name: "PostgreSQL",
        icon: <Database className="size-5 text-[#336791]" />,
        percent: 85,
    },
    {
        name: "Prisma",
        icon: <SiPrisma className="text-[#2D8CFF]" />,
        percent: 88,
    },
    {
        name: "JWT",
        icon: <ShieldCheck className="size-5 text-[#13bbff]" />,
        percent: 92,
    },
];


export const toolsSkills: Skill[] = [
    {
        name: "Git",
        icon: <Code2 className="size-5 text-[#F05032]" />,
        percent: 95,
    },
    {
        name: "GitHub",
        icon: <Code2 className="size-5 text-[#F05032]" />,
        percent: 95,
    },
    {
        name: "Docker",
        icon: <FaDocker className="text-[#2496ED]" />,
        percent: 80,
    },
    {
        name: "Postman",
        icon: <SiPostman className="text-[#FF6C37]" />,
        percent: 95,
    },
    {
        name: "Cloudinary",
        icon: <Cloud className="size-5 text-[#3448C5]" />,
        percent: 90,
    },
    {
        name: "Figma",
        icon: <FaFigma className="text-[#F24E1E]" />,
        percent: 92,
    },
];


export const skillsCategories: SkillCategory[] = [
    {
        name: "Frontend Development",
        icon: <FaReact className="size-6 text-[#61DAFB]" />,
        description:
            "Building responsive, accessible, and high-performance user interfaces using React.js, Next.js, Tailwind CSS, and modern UI libraries.",
    },
    {
        name: "Backend Development",
        icon: <FaNodeJs className="size-6 text-[#68A063]" />,
        description:
            "Developing scalable REST APIs with Node.js, Express.js, authentication, and secure server-side architecture.",
    },
    {
        name: "TypeScript",
        icon: <SiTypescript className="size-6 text-[#3178C6]" />,
        description:
            "Writing maintainable, type-safe, and scalable applications using modern TypeScript.",
    },
    {
        name: "Next.js",
        icon: <SiNextdotjs className="size-6 text-white" />,
        description:
            "Creating SEO-friendly, server-rendered, and high-performance web applications with Next.js.",
    },
    {
        name: "Database & ORM",
        icon: <SiPrisma className="size-6 text-[#2D8CFF]" />,
        description:
            "Managing PostgreSQL and MongoDB databases using Prisma ORM with efficient data modeling.",
    },
    {
        name: "API & Authentication",
        icon: <ShieldCheck className="size-6 text-[#13bbff]" />,
        description:
            "Building secure REST APIs with JWT authentication, role-based authorization, validation, and middleware.",
    },
    {
        name: "State Management",
        icon: <SiRedux className="size-6 text-[#764ABC]" />,
        description:
            "Managing application state efficiently with Redux Toolkit and TanStack Query.",
    },
    {
        name: "Cloud & Media",
        icon: <SiCloudinary className="size-6 text-[#3448C5]" />,
        description:
            "Integrating Cloudinary for image optimization, uploads, and cloud media management.",
    },
    {
        name: "Database",
        icon: <SiMongodb className="size-6 text-[#47A248]" />,
        description:
            "Working with MongoDB, PostgreSQL, and designing scalable database structures.",
    },
    {
        name: "Dev Tools",
        icon: <SiPostman className="size-6 text-[#FF6C37]" />,
        description:
            "Using Git, GitHub, Postman, VS Code, and modern development workflows for efficient collaboration.",
    },
    {
        name: "Deployment & DevOps",
        icon: <FaDocker className="size-6 text-[#2496ED]" />,
        description:
            "Deploying applications with Vercel, Netlify, Render, Docker, and AWS while following production best practices.",
    },
    {
        name: "UI/UX Design",
        icon: <FaFigma className="size-6 text-[#F24E1E]" />,
        description:
            "Designing clean, intuitive, and responsive user interfaces with Figma and modern design principles.",
    },
];