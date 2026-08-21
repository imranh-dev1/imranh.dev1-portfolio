"use client";

import { useEffect, useState } from "react";

interface SkillBarProps {
    name: string;
    percent: number;
    icon: React.ReactNode;
}

const SkillBar = ({
    name,
    percent,
    icon,
}: SkillBarProps) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let value = 0;

        const timer = setInterval(() => {
            value += 1;

            if (value >= percent) {
                value = percent;
                clearInterval(timer);
            }

            setProgress(value);
        }, 18);

        return () => clearInterval(timer);
    }, [percent]);

    return (
        <div className="w-full">
            {/* Header */}
            <div className="mb-2 flex items-center justify-between">
                {/* Name + Icon */}
                <div className="flex items-center gap-3">
                    <div className="flex size-6 items-center justify-center text-xl">
                        {icon}
                    </div>

                    <span className="text-[15px] font-semibold text-white">
                        {name}
                    </span>
                </div>

                {/* Percentage */}
                <span className="text-sm font-bold text-primary">
                    {progress}%
                </span>
            </div>

            {/* Progress bar */}
            <div className="relative h-2 overflow-hidden rounded-full bg-[#1f2937]">
                <div
                    className="h-full rounded-full bg-linear-to-r from-primary to-[#3ecbff] transition-all duration-75"
                    style={{
                        width: `${progress}%`,
                    }}
                />

                {/* Shimmer */}
                <div className="pointer-events-none absolute inset-0 animate-[shimmer_2s_linear_infinite] bg-linear-to-r from-transparent via-white/30 to-transparent" />
            </div>
        </div>
    );
};

export default SkillBar;