"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export interface OrbitIcon {
  name: string
  label: string
}

export interface OrbitProps {
  icons: OrbitIcon[]
  radius: number
  duration: number
  reverse?: boolean
  ringColor?: string
  iconSize?: number
}

const Orbit = ({
  icons,
  radius,
  duration,
  reverse = false,
  ringColor = "#13bbff55",
  iconSize = 56,
}: OrbitProps) => {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0"
      animate={{
        rotate: reverse ? -360 : 360,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* Ring */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: `min(${radius * 2}px, 92%)`,
          height: `min(${radius * 2}px, 92%)`,
          border: `1.5px solid ${ringColor}`,
          boxShadow: "0 0 20px rgba(19,187,255,.25)",
        }}
      />

      {/* Orbit Icons */}
      {icons.map((icon, index) => {
        const angle = (Math.PI * 2 * index) / icons.length

        // Round values to avoid SSR hydration mismatch
        const x = Math.round(Math.cos(angle) * radius * 1000) / 1000

        const y = Math.round(Math.sin(angle) * radius * 1000) / 1000

        return (
          <div
            key={`${icon.name}-${index}`}
            className="absolute top-1/2 left-1/2"
            style={{
              marginLeft: `${x}px`,
              marginTop: `${y}px`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Keep Icon Upright */}
            <motion.div
              animate={{
                rotate: reverse ? 360 : -360,
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "linear",
              }}
              className="group pointer-events-auto flex flex-col items-center"
              whileHover={{
                scale: 1.15,
              }}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center rounded-full border border-primary/40 bg-black/20 p-2 backdrop-blur-md transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_0_12px_color-mix(in_srgb,var(--primary)_40%,transparent)] sm:p-2.5 md:p-3"
                style={{
                  width: `${iconSize}px`,
                  height: `${iconSize}px`,
                }}
              >
                <Image
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon.name}/${icon.name}-original.svg`}
                  alt={icon.label}
                  width={32}
                  height={32}
                  loading="lazy"
                  className="h-5 w-5 object-contain sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"
                />
              </div>

              {/* Label */}
              <span className="mt-1 text-[9px] whitespace-nowrap text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 sm:mt-2 sm:text-[10px] md:text-[11px]">
                {icon.label}
              </span>
            </motion.div>
          </div>
        )
      })}
    </motion.div>
  )
}

export default Orbit
