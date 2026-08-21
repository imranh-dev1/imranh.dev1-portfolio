"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Typewriter.css";

const TypewriterEffect = () => {
    const typedElement = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const element = typedElement.current;

        if (!element) return;

        const typed = new Typed(element, {
            strings: [
                `I'm <span style="color:#13bbff;">Imran Hossain.</span>`,
                `I'm a <span style="color:#13bbff;">Full Stack Developer.</span>`,
                `I build <span style="color:#13bbff;">scalable web apps.</span>`,
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            showCursor: true,
            cursorChar: "|",
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="mt-2 w-full">
            <h1
                className="
                    text-left
                    text-3xl
                    font-bold
                    leading-tight 
                    sm:text-4xl
                    md:text-5xl
                    lg:text-[38px]
                    xl:text-[53px]
                "
            >
                <span ref={typedElement} />
            </h1>
        </div>
    );
};

export default TypewriterEffect;