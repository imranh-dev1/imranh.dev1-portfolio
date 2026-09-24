# Imran Hossain — Portfolio

A modern, motion-driven portfolio website for **Imran Hossain**, a Full Stack
Developer. Built with Next.js 16 (App Router), React 19, TypeScript, and
Tailwind CSS v4.

## Tech Stack

- **Framework** — Next.js 16 (App Router, React 19, RSC)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4 + shadcn/ui (Radix UI primitives)
- **Animations** — GSAP + ScrollTrigger, Framer Motion, @react-spring/web
- **Smooth Scrolling** — Lenis
- **3D / Canvas** — OGL particle system
- **State** — Redux Toolkit
- **Misc** — Typed.js, react-fast-marquee, lucide-react, react-icons, sonner

## Getting Started

```bash
# install dependencies
pnpm install

# start the development server
pnpm dev

# build for production
pnpm build

# start the production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

## Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `pnpm dev`      | Start the development server         |
| `pnpm build`    | Create a production build            |
| `pnpm start`    | Serve the production build           |
| `pnpm lint`     | Lint the codebase with ESLint        |
| `pnpm typecheck`| Type-check with `tsc --noEmit`       |
| `pnpm format`   | Format all TS/TSX files with Prettier|

## Project Structure

```
app/
  (public)/          Section components (Home, About, Skills, Experience,
                     Projects, Contact, Footer)
  globals.css        Tailwind theme, design tokens, book/mobile styles
  layout.tsx         Root layout (fonts, metadata, providers, navbar)
  page.tsx           Home page composition
components/
  book/              Interactive 3D book-flip experience section
  projects/          Project details dialog
  shared/            Navbar, SectionHeader, SocialLinks
  ui/                shadcn/ui primitives
hooks/
  useBookFlip.ts     Lenis + GSAP ScrollTrigger book flip driver
lib/
  data/              Projects, experience, and content data
  slices/            Redux Toolkit slices
assets/              Project images
public/              Static assets
```

## Responsive Design

The site is fully responsive across mobile, tablet, and desktop:

- Sections use a mobile-first grid system (`sm`, `md`, `lg`, `xl` breakpoints).
- The hero stacks vertically on mobile and switches to a two-column layout on
  `lg` screens.
- Navigation collapses into a mobile sheet below `lg`.
- The 3D experience book renders as a two-page spread on desktop and a
  single-page portrait flip on viewports up to `768px`, with dimensions that
  scale to fit the available viewport.
- Anchor navigation offsets (`scroll-mt`) account for the fixed navbar.

## Contact

- **Email** — imranh.dev1@gmail.com
- **LinkedIn** — https://www.linkedin.com/in/imranh-dev1
- **GitHub** — https://github.com/imranh-dev1