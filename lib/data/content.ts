export const heroCopy = {
  kicker: "Hello",
  title: "I craft ",
  emphasis: "bold",
  titleEnd: " digital experiences.",
  lead:
    "Front-end developer focused on motion, type, and interfaces that feel alive. Currently open to select freelance collaborations.",
};

export const aboutCopy = {
  body:
    "I'm a front-end developer who turns rough ideas into sharp, usable products — from pixel-perfect UI to fully scalable, production-ready web applications.",
  skills: ["UI / UX Design", "React & Next.js", "TypeScript", "REST API Integration"],
};

export interface ServiceItem {
  no: string;
  title: string;
  blurb: string;
}

export const services: ServiceItem[] = [
  { no: "01", title: "Front-End Development", blurb: "Responsive, production-ready interfaces built with React & Next.js." },
  { no: "02", title: "UI / UX Implementation", blurb: "Pixel-perfect conversion of Figma designs into working interfaces." },
  { no: "03", title: "Full-Stack (MERN)", blurb: "End-to-end apps with Node.js, Express, MongoDB and authentication." },
  { no: "04", title: "Performance & SEO", blurb: "Faster loads, better accessibility, and stronger Core Web Vitals." },
];

export interface ProjectItem {
  name: string;
  category: string;
  color: string;
}

export const projects: ProjectItem[] = [
  { name: "Aurora", category: "Fintech app", color: "#7c3aed" },
  { name: "Bloom", category: "Brand site", color: "#06b6d4" },
  { name: "Pulse", category: "Client freelance build", color: "#f43f5e" },
  { name: "Nimbus", category: "Dashboard UI", color: "#84cc16" },
];

export const stats = [
  { value: "30+", label: "Client websites shipped" },
  { value: "2", label: "Roles, agency + freelance" },
  { value: "10+", label: "Technologies used daily" },
  { value: "100%", label: "Remote collaboration" },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Delivered a pixel-perfect build from our Figma file, fast, and communicated clearly the whole way through.",
    name: "Client, Fiverr",
    role: "E-commerce project",
  },
  {
    quote:
      "Turned a vague brief into a polished, responsive site we're proud to send customers to.",
    name: "Client, Upwork",
    role: "Squarespace rebuild",
  },
];
