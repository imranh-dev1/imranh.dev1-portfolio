export interface Experience {
  id: number;
  period: string;
  current?: boolean;
  title: string;
  company: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experienceData: Experience[] = [
  {
    id: 1,
    period: "Jun 2025 — Present",
    current: true,
    title: "Front-End Developer",
    company: "Softvence Agency • Dhaka, Bangladesh",
    description:
      "Currently working as a Front-End Developer at Softvence Agency, where I build modern, scalable, and high-performance web applications. I collaborate with designers and developers to create responsive, user-friendly, and production-ready digital solutions.",
    achievements: [
      "Developed responsive and scalable web applications",
      "Converted Figma designs into pixel-perfect interfaces",
      "Improved website performance, accessibility & SEO",
      "Integrated REST APIs and reusable UI components",
    ],
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Material UI",
      "REST API",
      "Cloudinary",
      "Git",
      "GitHub",
    ],
  },
  {
    id: 2,
    period: "Dec 2024 — Present",
    title: "Website Designer & MERN Stack Developer",
    company: "Fiverr • Upwork • Freelance",
    description:
      "Providing professional website design, CMS development, and MERN stack solutions for clients worldwide. I specialize in building modern, responsive, SEO-friendly, and high-performance websites using Squarespace, Shopify, Wix, Showit, and the MERN stack.",
    achievements: [
      "Designed & developed 30+ client websites",
      "Built custom MERN Stack web applications",
      "Developed Squarespace, Shopify, Wix & Showit websites",
      "Created responsive UI/UX with pixel-perfect implementation",
      "Optimized websites for SEO, speed & Core Web Vitals",
      "Integrated authentication, APIs & third-party services",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "JWT",
      "Stripe",
      "Squarespace",
      "Shopify",
      "Wix",
      "Showit",
      "Tailwind CSS",
      "Material UI",
      "JavaScript",
      "Git",
      "GitHub",
      "Figma",
    ],
  },
];
