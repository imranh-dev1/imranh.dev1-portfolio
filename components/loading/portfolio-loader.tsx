"use client";

import { useEffect, useState } from "react";

interface PortfolioLoaderProps {
    onComplete: () => void;
}

const LOADING_TEXT = "LOADING...";

export default function PortfolioLoader({
    onComplete,
}: PortfolioLoaderProps) {
    const [progress, setProgress] = useState(0);
    const [ready, setReady] = useState(false);

    // Loading progress
    useEffect(() => {
        const duration = 2400;
        const startTime = Date.now();

        let animationFrame: number;
        let readyTimeout: ReturnType<typeof setTimeout>;

        const updateProgress = () => {
            const elapsed = Date.now() - startTime;
            const value = Math.min(
                Math.round((elapsed / duration) * 100),
                100
            );

            setProgress(value);

            if (value < 100) {
                animationFrame = requestAnimationFrame(updateProgress);
            } else {
                // ১০০% হওয়ার পর সামান্য ডিলে দিয়ে শাটার খোলা শুরু হবে
                readyTimeout = setTimeout(() => {
                    setReady(true);
                    
                    // অ্যানিমেশন (১২০০মি.সে.) শেষ হওয়ার পর মূল পোর্টফোলিও দেখাবে
                    setTimeout(onComplete, 1200);
                }, 150);
            }
        };

        animationFrame = requestAnimationFrame(updateProgress);

        return () => {
            cancelAnimationFrame(animationFrame);
            clearTimeout(readyTimeout);
        };
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[9999] h-screen w-full overflow-hidden pointer-events-none">
            {/* TOP SHUTTER - মাঝখান থেকে ওপরে যাবে (সুপার স্মুথ কার্ভ সহ) */}
            <div
                className="absolute left-0 top-0 h-1/2 w-full bg-[#151719] will-change-transform"
                style={{
                    transition: "transform 1200ms cubic-bezier(0.85, 0, 0.15, 1)",
                    transform: ready ? "translateY(-100%)" : "translateY(0%)",
                }}
            />

            {/* BOTTOM SHUTTER - মাঝখান থেকে নিচে যাবে (সুপার স্মুথ কার্ভ সহ) */}
            <div
                className="absolute bottom-0 left-0 h-1/2 w-full bg-[#151719] will-change-transform"
                style={{
                    transition: "transform 1200ms cubic-bezier(0.85, 0, 0.15, 1)",
                    transform: ready ? "translateY(100%)" : "translateY(0%)",
                }}
            />

            {/* LOADING CONTENT SCREEN - শাটার খোলার সাথে সাথে এটিও খুব সুন্দরভাবে মিলিয়ে যাবে */}
            <div 
                className="absolute inset-0 flex h-screen w-full items-center justify-center bg-transparent"
                style={{
                    transition: "opacity 600ms ease, transform 600ms cubic-bezier(0.25, 1, 0.5, 1)",
                    opacity: ready ? 0 : 1,
                    transform: ready ? "scale(0.95)" : "scale(1)",
                    visibility: ready ? "hidden" : "visible",
                    transitionDelay: ready ? "0ms" : "0ms",
                }}
            >
                <div className="flex w-full flex-col items-center justify-center">
                    {/* LOADING TEXT */}
                    <div className="flex items-center justify-center whitespace-nowrap">
                        {LOADING_TEXT.split("").map((char, index) => (
                            <span
                                key={`${char}-${index}`}
                                className="inline-block text-[12vw] font-bold uppercase leading-none text-primary animate-loader-wave max-[996px]:text-[14vw] max-[750px]:text-[16vw] max-[500px]:text-[40px]"
                                style={{
                                    animationDelay: `${index * 0.08}s`,
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </div>

                    {/* PROGRESS */}
                    <div className="mt-14 w-[min(420px,70vw)]">
                        <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/60">
                            <span>Loading...</span>
                            <span className="tabular-nums">{progress}%</span>
                        </div>
                        <div className="h-[2px] w-full overflow-hidden bg-white/15">
                            <div
                                className="h-full bg-white transition-[width] duration-100 ease-linear"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
