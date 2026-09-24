"use client"

import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import SplitText from "./SplitText/SplitText"
import TypewriterEffect from "./TypewriterEffect/TypewriterEffect"
import BlurText from "./BlurText"
import Orbit from "./Orbit"

import { DownloadIcon } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import SocialLinks from "@/components/shared/SocialLinks/SocialLinks"
import Link from "next/link"

interface TechIcon {
  name: string
  label: string
}

interface Particle {
  size: number
  top: number
  left: number
  opacity: number
  duration: number
  delay: number
}

interface ConnectionLine {
  duration: number
  delay: number
}

const Banner = () => {
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    updateScreenWidth()

    window.addEventListener("resize", updateScreenWidth)

    return () => {
      window.removeEventListener("resize", updateScreenWidth)
    }
  }, [])

  /*
   * IMPORTANT:
   * Do NOT use Math.random() directly inside JSX.
   *
   * These values are deterministic, so the server and client
   * generate the same initial HTML.
   */
  const particleData = useMemo<Particle[]>(
    () =>
      Array.from({ length: 24 }, (_, index) => ({
        size: 4 + ((index * 7) % 8),
        top: (index * 37) % 100,
        left: (index * 61) % 100,
        opacity: 0.2 + ((index * 13) % 60) / 100,
        duration: 5 + ((index * 17) % 10),
        delay: (index * 11) % 5,
      })),
    []
  )

  const connectionLines = useMemo<ConnectionLine[]>(
    () =>
      Array.from({ length: 12 }, (_, index) => ({
        duration: 2 + ((index * 7) % 3),
        delay: (index * 5) % 2,
      })),
    []
  )

  /*
   * Responsive Orbit Radius
   *
   * Mobile -> small
   * SM     -> small
   * MD     -> smaller
   * LG     -> smaller
   * XL     -> slightly smaller
   * 2XL    -> ORIGINAL
   */
  const getOrbitRadius = (
    desktop: number,
    xl: number,
    lg: number,
    md: number,
    mobile: number
  ) => {
    if (screenWidth === 0) {
      return mobile
    }

    if (screenWidth < 640) {
      return mobile
    }

    if (screenWidth < 768) {
      return md
    }

    if (screenWidth < 1024) {
      return lg
    }

    if (screenWidth < 1280) {
      return lg
    }

    if (screenWidth < 1536) {
      return xl
    }

    // 2XL - original
    return desktop
  }

  /*
   * Orbit Radius
   *
   * 2XL = original
   * XL  = slightly smaller
   * LG  = smaller
   * MD  = smaller
   * SM/mobile = smaller
   */
  const innerRadius = getOrbitRadius(
    130,
    115,
    90,
    78,
    60
  )

  const middleRadius = getOrbitRadius(
    200,
    180,
    145,
    120,
    88
  )

  const outerRadius = getOrbitRadius(
    270,
    245,
    190,
    160,
    115
  )

  /*
   * Responsive Icon Size
   *
   * 2XL = original 56px
   * XL  = 48px
   * LG  = 44px
   * MD  = 40px
   * SM  = 36px
   * Mobile = 32px
   */
  const getIconSize = () => {
    if (screenWidth === 0) {
      return 32
    }

    if (screenWidth < 640) {
      return 32
    }

    if (screenWidth < 768) {
      return 36
    }

    if (screenWidth < 1024) {
      return 40
    }

    if (screenWidth < 1280) {
      return 44
    }

    if (screenWidth < 1536) {
      return 48
    }

    // 2XL - original
    return 56
  }

  const iconSize = getIconSize()

  const innerRing: TechIcon[] = [
    {
      name: "react",
      label: "React",
    },
    {
      name: "nextjs",
      label: "Next.js",
    },
    {
      name: "nodejs",
      label: "Node.js",
    },
    {
      name: "typescript",
      label: "TypeScript",
    },
    {
      name: "javascript",
      label: "JavaScript",
    },
    {
      name: "redux",
      label: "Redux",
    },
  ]

  const middleRing: TechIcon[] = [
    {
      name: "html5",
      label: "HTML5",
    },
    {
      name: "css3",
      label: "CSS3",
    },
    {
      name: "tailwindcss",
      label: "Tailwind",
    },
    {
      name: "bootstrap",
      label: "Bootstrap",
    },
    {
      name: "materialui",
      label: "MUI",
    },
    {
      name: "mongodb",
      label: "MongoDB",
    },
    {
      name: "express",
      label: "Express",
    },
    {
      name: "firebase",
      label: "Firebase",
    },
  ]

  const outerRing: TechIcon[] = [
    {
      name: "postgresql",
      label: "PostgreSQL",
    },
    {
      name: "prisma",
      label: "Prisma",
    },
    {
      name: "git",
      label: "Git",
    },
    {
      name: "github",
      label: "GitHub",
    },
    {
      name: "docker",
      label: "Docker",
    },
    {
      name: "figma",
      label: "Figma",
    },
    {
      name: "vscode",
      label: "VS Code",
    },
    {
      name: "vite",
      label: "Vite",
    },
    {
      name: "npm",
      label: "NPM",
    },
  ]

  return (
    <section className="container mx-auto flex min-h-screen w-full flex-col items-center justify-center gap-6 overflow-hidden px-4 py-20 sm:gap-6 sm:px-6 sm:py-24 md:gap-6 md:px-8 lg:flex-row lg:gap-6 lg:px-10 lg:py-0 xl:gap-6 xl:px-12 2xl:px-0">
      {/* Developer Information */}
      <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="flex w-full max-w-full min-w-0 flex-1 flex-col items-start text-left"
      >
        {/* Greeting */}
        <SplitText
          text="Hi, There!"
          textAlign="left"
          className="w-full text-left text-xl font-semibold sm:text-2xl"
          delay={150}
          animationFrom={{
            opacity: 0,
            transform: "translate3d(0,50px,0)",
          }}
          animationTo={{
            opacity: 1,
            transform: "translate3d(0,0,0)",
          }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />

        {/* Typewriter */}
        <div className="mt-2 w-full min-w-0 text-left">
          <TypewriterEffect />
        </div>

        {/* Description */}
        <BlurText
          text="I'm Imran Hossain, a proactive Full Stack Developer passionate about creating modern and engaging web experiences. From frontend interfaces to backend architecture, I enjoy solving complex problems with clean, efficient, and maintainable code. My expertise includes React, Next.js, Node.js, Express, PostgreSQL, and Prisma, and I'm always excited to explore new technologies and improve my skills."
          delay={30}
          animateBy="words"
          className="mt-4 w-full text-left text-sm leading-7 text-muted-foreground sm:text-base sm:leading-7 lg:text-lg lg:leading-8"
        />

        {/* Social Media */}
        <div className="mt-3.75">
          <SocialLinks />
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex w-full flex-col items-start justify-start gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
          <Button
            asChild
            variant="primary"
            size="default"
            className="w-full tracking-wide uppercase sm:w-auto"
          >
            <Link
              href="https://github.com/imranh-dev1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-start gap-2"
            >
              <FaGithub />
              GitHub
            </Link>
          </Button>

          <Button
            asChild
            variant="secondary"
            size="default"
            className="w-full tracking-wide uppercase sm:w-auto"
          >
            <Link
              href="https://drive.google.com/file/d/1O1cSs8I55MVPzjJ1Jqxh_5_wRLEn0XPW/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-start gap-2"
            >
              <DownloadIcon />
              Download Resume
            </Link>
          </Button>
        </div>
      </div>

      {/* Tech Orb */}
      <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="flex w-full flex-1 items-center justify-center py-10 sm:py-14 md:pt-12 lg:py-0 lg:pt-12"
      >
        {/* Responsive Orb Container */}
        <div className="group relative aspect-square w-60 max-w-full cursor-pointer sm:w-68 md:w-80 lg:w-96 xl:w-125 2xl:w-140">
          {/* Glowing Base */}
          <div className="absolute inset-0 rounded-full bg-linear-to-br from-[#13bbff10] to-[#13bbff03] shadow-[0_0_40px_#13bbff30] backdrop-blur-sm transition-all duration-500 group-hover:shadow-[0_0_60px_#13bbff50]" />

          {/* Animated Particles */}
          <div className="absolute inset-0 overflow-hidden rounded-full">
            {particleData.map((particle, index) => (
              <div
                key={index}
                className="absolute rounded-full bg-primary"
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  top: `${particle.top}%`,
                  left: `${particle.left}%`,
                  opacity: particle.opacity,
                  animation: `float ${particle.duration}s infinite ease-in-out`,
                  animationDelay: `${particle.delay}s`,
                }}
              />
            ))}
          </div>

          {/* Outer Ring */}
          <Orbit
            icons={outerRing}
            radius={outerRadius}
            duration={30}
            reverse
            iconSize={iconSize}
          />

          {/* Middle Ring */}
          <Orbit
            icons={middleRing}
            radius={middleRadius}
            duration={20}
            iconSize={iconSize}
          />

          {/* Inner Ring */}
          <Orbit
            icons={innerRing}
            radius={innerRadius}
            duration={12}
            reverse
            iconSize={iconSize}
          />

          {/* Center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative z-10 px-2 text-center sm:px-3 md:px-3 lg:px-3 xl:px-4 2xl:px-4">
              <div className="mb-1 text-xl font-bold text-primary sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl">
                IMRAN
              </div>

              <div className="text-[8px] tracking-[0.12em] text-white/80 sm:text-[9px] md:text-[10px] lg:text-[10px] xl:text-xs 2xl:text-xs">
                FULL STACK DEVELOPER
              </div>
            </div>
          </div>

          {/* Connection Lines */}
          <div className="pointer-events-none absolute inset-0">
            {connectionLines.map((line, index) => (
              <div
                key={index}
                className="absolute top-1/2 left-1/2 h-14 w-0.5 origin-top bg-linear-to-b from-primary to-transparent transition-all duration-500 group-hover:h-28 group-hover:opacity-60 sm:h-16 md:h-20 lg:h-24 xl:h-32 2xl:h-32"
                style={{
                  transform: `
                    translate(-50%, -50%)
                    rotate(${index * 30}deg)
                  `,
                  opacity: 0.4,
                  animation: `pulse ${line.duration}s infinite ease-in-out`,
                  animationDelay: `${line.delay}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner