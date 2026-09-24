export interface Experience {
  id: number
  period: string
  current?: boolean
  title: string
  company: string
  description: string
  achievements: string[]
  technologies: string[]
}

export const experienceData: Experience[] = [
  {
    id: 1,
    period: "Jun 2025 — Present",
    current: true,
    title: "Front-End Developer",
    company: "Softvence Agency • Dhaka, Bangladesh",
    description:
      "Currently working as a Front-End Developer at Softvence Agency, building modern, responsive, and production-ready web applications. I work closely with designers and developers to turn product requirements and Figma designs into clean, user-friendly interfaces while focusing on performance, accessibility, and maintainability.",
    achievements: [
      "Built responsive and scalable web applications using React & Next.js,",
      "Translated Figma designs into pixel-perfect, reusable, and responsive interfaces",
      "Collaborated with designers and developers to deliver and maintain production-ready features",
    ],
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
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
    period: "Sep 2026 — Present",
    title: "Web Development Intern",
    company:
      "Zidio Development-Internship • Remote • Bengaluru, Karnataka, India",
    description:
      "Working as a Web Development Intern at Zidio Development, contributing to web application development and collaborating with the technical team on assigned projects.",

    achievements: [
      "Contributing to the development of modern web applications.",
      "Working under the guidance of the Tech Lead on assigned development tasks.",
      "Applying frontend and backend development skills to real-world projects.",
    ],

    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "REST API",
    ],
  },
]
