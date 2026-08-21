"use client";

import { motion, type Transition } from "framer-motion";
import {
    useEffect,
    useMemo,
    useRef,
    useState,
    type CSSProperties,
} from "react";

type AnimateBy = "words" | "letters";
type Direction = "top" | "bottom";

type AnimationSnapshot = {
    filter: string;
    opacity: number;
    y: number;
};

type BlurTextProps = {
    text?: string;
    delay?: number;
    className?: string;
    animateBy?: AnimateBy;
    direction?: Direction;
    threshold?: number;
    rootMargin?: string;
    animationFrom?: AnimationSnapshot;
    animationTo?: AnimationSnapshot[];
    easing?: (value: number) => number;
    onAnimationComplete?: () => void;
    stepDuration?: number;
};

type Keyframes = {
    filter: string[];
    opacity: number[];
    y: number[];
};

const buildKeyframes = (
    from: AnimationSnapshot,
    steps: AnimationSnapshot[],
): Keyframes => {
    return {
        filter: [
            from.filter,
            ...steps.map((step) => step.filter),
        ],
        opacity: [
            from.opacity,
            ...steps.map((step) => step.opacity),
        ],
        y: [
            from.y,
            ...steps.map((step) => step.y),
        ],
    };
};

const BlurText = ({
    text = "",
    delay = 30,
    className = "",
    animateBy = "words",
    direction = "top",
    threshold = 0.1,
    rootMargin = "0px",
    animationFrom,
    animationTo,
    easing = (value) => value,
    onAnimationComplete,
    stepDuration = 0.35,
}: BlurTextProps) => {
    const elements = useMemo(() => {
        if (animateBy === "words") {
            const words = text.split(/(\s+)/);

            return words.filter(
                (segment) => segment !== "",
            );
        }

        return text.split("");
    }, [text, animateBy]);

    const [inView, setInView] = useState(false);

    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(element);
                }
            },
            {
                threshold,
                rootMargin,
            },
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, rootMargin]);

    const defaultFrom = useMemo<AnimationSnapshot>(
        () =>
            direction === "top"
                ? {
                    filter: "blur(10px)",
                    opacity: 0,
                    y: -50,
                }
                : {
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 50,
                },
        [direction],
    );

    const defaultTo = useMemo<AnimationSnapshot[]>(
        () => [
            {
                filter: "blur(5px)",
                opacity: 0.5,
                y: direction === "top" ? 5 : -5,
            },
            {
                filter: "blur(0px)",
                opacity: 1,
                y: 0,
            },
        ],
        [direction],
    );

    const fromSnapshot = animationFrom ?? defaultFrom;
    const toSnapshots = animationTo ?? defaultTo;

    const stepCount = toSnapshots.length + 1;

    const totalDuration =
        stepDuration * (stepCount - 1);

    const times = Array.from(
        {
            length: stepCount,
        },
        (_, index) =>
            stepCount === 1
                ? 0
                : index / (stepCount - 1),
    );

    const animateKeyframes = useMemo(
        () =>
            buildKeyframes(
                fromSnapshot,
                toSnapshots,
            ),
        [fromSnapshot, toSnapshots],
    );

    return (
        <div
            ref={ref}
            className={`w-full ${className}`}
            style={{
                textAlign:
                    "justify" as CSSProperties["textAlign"],
            }}
        >
            {elements.map((segment, index) => {
                const isSpace =
                    segment.trim() === "";

                const spanTransition: Transition = {
                    duration: totalDuration,
                    times,
                    delay: (index * delay) / 1000,
                    ease: easing,
                };

                return (
                    <span key={index}>
                        {isSpace ? (
                            segment
                        ) : (
                            <motion.span
                                className="
                                    inline-block
                                    will-change-[transform,filter,opacity]
                                "
                                initial={fromSnapshot}
                                animate={
                                    inView
                                        ? animateKeyframes
                                        : undefined
                                }
                                transition={spanTransition}
                                onAnimationComplete={
                                    index ===
                                        elements.length - 1
                                        ? onAnimationComplete
                                        : undefined
                                }
                            >
                                {segment}
                            </motion.span>
                        )}
                    </span>
                );
            })}
        </div>
    );
};

export default BlurText;