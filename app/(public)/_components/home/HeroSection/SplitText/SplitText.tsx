"use client";

import { animated, useSprings } from "@react-spring/web";
import {
    CSSProperties,
    useEffect,
    useRef,
    useState,
} from "react";

interface AnimationStyle extends CSSProperties {
    transform?: string;
    opacity?: number;
}

export interface SplitTextProps {
    text?: string;
    className?: string;
    delay?: number;
    animationFrom?: AnimationStyle;
    animationTo?: AnimationStyle;
    easing?: string;
    threshold?: number;
    rootMargin?: string;
    textAlign?: CSSProperties["textAlign"];
    onLetterAnimationComplete?: () => void;
}

const SplitText = ({
    text = "",
    className = "",
    delay = 100,
    animationFrom = {
        opacity: 0,
        transform: "translate3d(0,40px,0)",
    },
    animationTo = {
        opacity: 1,
        transform: "translate3d(0,0,0)",
    },
    easing = "easeOutCubic",
    threshold = 0.1,
    rootMargin = "-100px",
    textAlign = "center",
    onLetterAnimationComplete,
}: SplitTextProps) => {
    const words = text.split(" ").map((word) => word.split(""));
    const letters = words.flat();

    const [inView, setInView] = useState(false);

    const ref = useRef<HTMLParagraphElement | null>(null);
    const animatedCount = useRef(0);

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

    const springs = useSprings(
        letters.length,
        letters.map((_, index) => ({
            from: animationFrom,
            to: inView
                ? async (
                    next: (
                        value: AnimationStyle,
                    ) => Promise<void>,
                ) => {
                    await next(animationTo);

                    animatedCount.current += 1;

                    if (
                        animatedCount.current ===
                        letters.length &&
                        onLetterAnimationComplete
                    ) {
                        onLetterAnimationComplete();
                    }
                }
                : animationFrom,
            delay: index * delay,
            config: {
                duration: 500,
            },
        })),
    );

    return (
        <p
            ref={ref}
            className={`split-parent ${className}`}
            style={{
                textAlign,
                overflow: "hidden",
                width: "100%",
                maxWidth: "100%",
                whiteSpace: "normal",
                overflowWrap: "break-word",
                wordBreak: "normal",
                margin: 0,
            }}
        >
            {words.map((word, wordIndex) => (
                <span
                    key={wordIndex}
                    style={{
                        display: "inline-block",
                        whiteSpace: "nowrap",
                    }}
                >
                    {word.map((letter, letterIndex) => {
                        const index =
                            words
                                .slice(0, wordIndex)
                                .reduce(
                                    (total, currentWord) =>
                                        total + currentWord.length,
                                    0,
                                ) + letterIndex;

                        return (
                            <animated.span
                                key={index}
                                style={{
                                    ...springs[index],
                                    display: "inline-block",
                                    willChange: "transform, opacity",
                                }}
                            >
                                {letter}
                            </animated.span>
                        );
                    })}

                    <span
                        style={{
                            display: "inline-block",
                            width: "0.3em",
                        }}
                    >
                        &nbsp;
                    </span>
                </span>
            ))}
        </p>
    );
};

export default SplitText;