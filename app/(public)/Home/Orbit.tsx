"use client";

import { motion } from "framer-motion";

export interface OrbitIcon {
    name: string;
    label: string;
}

export interface OrbitProps {
    icons: OrbitIcon[];
    radius: number;
    duration: number;
    reverse?: boolean;
    ringColor?: string;
    iconSize?: number;
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
            className="absolute inset-0 pointer-events-none"
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
                className="
          absolute
          left-1/2
          top-1/2
          rounded-full
          -translate-x-1/2
          -translate-y-1/2
        "
                style={{
                    width: `min(${radius * 2}px, 92%)`,
                    height: `min(${radius * 2}px, 92%)`,
                    border: `1.5px solid ${ringColor}`,
                    boxShadow: "0 0 20px rgba(19,187,255,.25)",
                }}
            />

            {/* Orbit Icons */}
            {icons.map((icon, index) => {
                const angle = (Math.PI * 2 * index) / icons.length;

                // Round values to avoid SSR hydration mismatch
                const x =
                    Math.round(Math.cos(angle) * radius * 1000) / 1000;

                const y =
                    Math.round(Math.sin(angle) * radius * 1000) / 1000;

                return (
                    <div
                        key={`${icon.name}-${index}`}
                        className="absolute left-1/2 top-1/2"
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
                            className="
                group
                flex
                flex-col
                items-center
                pointer-events-auto
              "
                            whileHover={{
                                scale: 1.15,
                            }}
                        >
                            {/* Icon */}
                            <div
                                className="
                  flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-primary-color
                  bg-[#0102032a]
                  p-2
                  sm:p-2.5
                  md:p-3
                  backdrop-blur-md
                  transition-all
                  duration-300
                  group-hover:border-primary
                  group-hover:shadow-[0_0_12px_#13bbff66]
                "
                                style={{
                                    width: `${iconSize}px`,
                                    height: `${iconSize}px`,
                                }}
                            >
                                <img
                                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon.name}/${icon.name}-original.svg`}
                                    alt={icon.label}
                                    loading="lazy"
                                    className="
                    h-5
                    w-5
                    sm:h-6
                    sm:w-6
                    md:h-7
                    md:w-7
                    lg:h-8
                    lg:w-8
                    object-contain
                  "
                                />
                            </div>

                            {/* Label */}
                            <span
                                className="
                  mt-1
                  sm:mt-2
                  whitespace-nowrap
                  text-[9px]
                  sm:text-[10px]
                  md:text-[11px]
                  text-cyan-400
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:opacity-100
                "
                            >
                                {icon.label}
                            </span>
                        </motion.div>
                    </div>
                );
            })}
        </motion.div>
    );
};

export default Orbit;