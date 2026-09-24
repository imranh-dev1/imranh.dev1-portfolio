"use client";

import { useEffect, useState } from "react";

interface PortfolioLoaderProps {
    onComplete: () => void;
}

const LOADING_TEXT = "LOADING...";
const READY_TEXT = "READY!";

export default function PortfolioLoader({
    onComplete,
}: PortfolioLoaderProps) {
    const [progress, setProgress] = useState(0);
    const [ready, setReady] = useState(false);
    const [readyText, setReadyText] = useState("");

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
                readyTimeout = setTimeout(() => {
                    setReady(true);
                }, 200);
            }
        };

        animationFrame = requestAnimationFrame(updateProgress);

        return () => {
            cancelAnimationFrame(animationFrame);
            clearTimeout(readyTimeout);
        };
    }, []);

    // READY text animation
    useEffect(() => {
        if (!ready) return;

        let index = 0;
        let completeTimeout: ReturnType<typeof setTimeout>;

        const interval = setInterval(() => {
            index++;

            setReadyText(READY_TEXT.slice(0, index));

            if (index >= READY_TEXT.length) {
                clearInterval(interval);

                completeTimeout = setTimeout(() => {
                    onComplete();
                }, 2600);
            }
        }, 120);

        return () => {
            clearInterval(interval);
            clearTimeout(completeTimeout);
        };
    }, [ready, onComplete]);

    /*
     * READY SCREEN
     */
    if (ready) {
        return (
            <div
                className="fixed inset-0 z-[9999] h-screen w-full overflow-hidden bg-[#0a0a0a]"
                style={
                    {
                        "--loading-text-size": "12vw",
                    } as React.CSSProperties
                }
            >
                {/* TOP SHUTTER */}
                <div
                    className="
            absolute
            left-0
            top-0
            h-1/2
            w-full
            overflow-hidden
            bg-[#0a0a0a]
            animate-loader-top
          "
                >
                    <h1
                        className="
              absolute
              left-0
              top-1/2
              w-full
              -translate-y-1/2
              text-center
              text-[12vw]
              font-bold
              uppercase
              leading-none
              text-transparent
              bg-cover
              bg-center
              bg-clip-text
              [-webkit-background-clip:text]
              [-webkit-text-fill-color:transparent]
              [-webkit-box-reflect:below_-90px_linear-gradient(to_bottom,transparent,rgba(0,0,0,0.4))]
              max-[996px]:text-[14vw]
              max-[750px]:text-[16vw]
              max-[500px]:text-[80px]
            "
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1600&q=80')",
                        }}
                    >
                        {readyText}
                    </h1>
                </div>

                {/* BOTTOM SHUTTER */}
                <div
                    className="
            absolute
            bottom-0
            left-0
            h-1/2
            w-full
            overflow-hidden
            bg-[#0a0a0a]
            animate-loader-bottom
          "
                >
                    <h1
                        className="
              absolute
              left-0
              top-0
              h-[calc(100%+7.5vw)]
              w-full
              pt-0
              text-center
              text-[12vw]
              font-bold
              uppercase
              leading-none
              text-transparent
              bg-cover
              bg-center
              bg-clip-text
              [-webkit-background-clip:text]
              [-webkit-text-fill-color:transparent]
              [-webkit-box-reflect:below_-90px_linear-gradient(to_bottom,transparent,rgba(0,0,0,0.4))]
              max-[996px]:text-[14vw]
              max-[750px]:text-[16vw]
              max-[500px]:text-[80px]
            "
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1600&q=80')",
                            marginTop: "calc(-1 * var(--loading-text-size) / 1.6)",
                        }}
                    >
                        {readyText}
                    </h1>
                </div>
            </div>
        );
    }

    /*
     * LOADING SCREEN
     */
    return (
        <div className="fixed inset-0 z-[9999] flex h-screen w-full items-center justify-center overflow-hidden bg-[#151719]">
            <div className="flex w-full flex-col items-center justify-center">
                {/* LOADING TEXT */}
                <div
                    className="
            flex
            items-center
            justify-center
            whitespace-nowrap
          "
                >
                    {LOADING_TEXT.split("").map((char, index) => (
                        <span
                            key={`${char}-${index}`}
                            className="
                inline-block
                text-[12vw]
                font-bold
                uppercase
                leading-none
                text-white
                animate-loader-wave
                max-[996px]:text-[14vw]
                max-[750px]:text-[16vw]
                max-[500px]:text-[40px]
              "
                            style={{
                                animationDelay: `${index * 0.1}s`,
                            }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </div>

                {/* PROGRESS */}
                <div className="mt-14 w-[min(420px,70vw)]">
                    {/* Progress info */}
                    <div
                        className="
              mb-3
              flex
              items-center
              justify-between
              text-xs
              uppercase
              tracking-[0.2em]
              text-white/60
            "
                    >
                        <span>Loading...</span>

                        <span className="tabular-nums">
                            {progress}%
                        </span>
                    </div>

                    {/* Progress bar */}
                    <div className="h-[2px] w-full overflow-hidden bg-white/15">
                        <div
                            className="
                h-full
                bg-white
                transition-[width]
                duration-100
                ease-linear
              "
                            style={{
                                width: `${progress}%`,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}