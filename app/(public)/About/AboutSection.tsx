"use client";

import Image from "next/image";
import {
    Brush,
    Code2,
    Database,
    Server,
    Minus,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";


import imranHossain from "@/public/imran-hossain-bg.png";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";

const features = [
    {
        icon: Brush,
        title: "Pixel-Perfect UI",
        description:
            "Crafting beautiful, intuitive, and highly polished user interfaces that provide an exceptional user experience.",
    },
    {
        icon: Server,
        title: "Scalable Backend",
        description:
            "Building robust, efficient, and secure server-side logic and RESTful APIs that can grow with your product.",
    },
    {
        icon: Code2,
        title: "Clean Code",
        description:
            "Writing professional, well-structured, and documented code that is easy to understand, test, and maintain.",
    },
];

const stats = [
    {
        value: "1.3+",
        label: "Years Experience",
    },
    {
        value: "23+",
        label: "Projects Completed",
    },
    {
        value: "39+",
        label: "Technologies",
    },
];

const AboutSection = () => {
    return (
        <section id="about" className="bg-secondary">
            <div className="container mx-auto px-6 py-24 lg:px-0">
                <div className="w-full lg:w-1/2">
                    {/* Who I Am */}
                    <div className="mb-2 flex items-center gap-1 text-sm font-semibold tracking-[0.12em] text-primary uppercase">
                        <Minus
                            size={20}
                            strokeWidth={3}
                            className="text-primary"
                        />

                        <span>Who I Am</span>
                    </div>

                    {/* Main Heading */}
                    <SectionHeader >
                        <span className="text-primary">
                            &lt; Get to{" "}
                        </span>
                        Know Me /&gt;
                    </SectionHeader>

                    {/* Short Description */}
                    <p className="mt-3 text-[18px] leading-[1.9] text-[#bdbdbd]">
                        Passionate full-stack developer building modern web
                        experiences with clean code and scalable architecture.
                    </p>
                </div>

                <div className="mt-6 grid items-center gap-6 text-white lg:grid-cols-2">
                    <div className="flex justify-center">
                        <div className="relative w-full">
                            <Image
                                src={imranHossain}
                                alt="Imran Hossain"
                                priority
                                className="
                w-10/12
                rounded-4xl
                border
                border-primary/30
                shadow-[0_0_40px_rgba(19,187,255,.25)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_0_60px_rgba(19,187,255,.45)]
                hover:border-primary
              "
                            />
                        </div>
                    </div>

                    <div>
                        {/* Name */}
                        <h2 className="text-[32px] font-bold text-white">
                            Imran Hossain
                        </h2>

                        {/* Role */}
                        <p className="mb-6 text-[18px] font-semibold text-primary">
                            Full Stack Developer
                        </p>

                        {/* Paragraph 1 */}
                        <p className="mb-5 text-sm
                                leading-7
                                sm:text-base
                                sm:leading-7
                                lg:text-lg
                                lg:leading-8
                                text-muted-foreground">
                            I&apos;m{" "}
                            <strong className="font-bold text-white">
                                Imran Hossain
                            </strong>
                            , a full stack developer focused on building fast,
                            responsive, and user-friendly web applications. I enjoy
                            turning ideas into real products using modern
                            technologies and clean development practices.
                        </p>

                        {/* Paragraph 2 */}
                        <p className="mb-5 text-sm
                            leading-7
                            sm:text-base
                            sm:leading-7
                            lg:text-lg
                            lg:leading-8
                            text-muted-foreground">
                            My journey started with curiosity about how websites
                            work, and over time it grew into a passion for creating
                            modern web applications. I work with React, Next.js,
                            TypeScript, Node.js, Express, Prisma, PostgreSQL, and
                            MongoDB to build scalable and maintainable solutions.
                        </p>

                        {/* Paragraph 3 */}
                        <p className="text-sm
                            leading-7
                            sm:text-base
                            sm:leading-7
                            lg:text-lg
                            lg:leading-8
                            text-muted-foreground">
                            Whether it&apos;s a portfolio website, dashboard,
                            e-commerce platform, or SaaS application, I focus on
                            performance, accessibility, SEO, and great user
                            experience. My goal is to write code that is not only
                            functional but also clean, maintainable, and
                            production-ready.
                        </p>

                        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                            {stats.map((item) => (
                                <Card
                                    key={item.label}
                                    className="
                                         cursor-pointer
                                            rounded-3xl
                                            bg-background
                                            border-[0.3px]
                                            border-primary/50
                                            transition-all
                                            duration-400
                                            hover:-translate-y-3
                                            hover:border-primary
                                            hover:shadow-[0_0_30px_rgba(19,187,255,.25)]
                                        "
                                >
                                    <CardContent className="py-0 text-center">
                                        {/* Value */}
                                        <div className="text-[42px] leading-none font-bold text-primary">
                                            {item.value}
                                        </div>
                                        {/* Label */}
                                        <div className="mt-1 text-[15px] font-medium text-muted-foreground">
                                            {item.label}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {features.map((item) => {
                        const Icon = item.icon;

                        return (
                            <Card
                                key={item.title}
                                className="
                                            h-full
                                            rounded-3xl
                                            bg-background
                                            border-[0.3px]
                                            border-primary/50
                                            transition-all
                                            duration-400
                                            hover:-translate-y-3
                                            hover:border-primary
                                            hover:shadow-[0_0_30px_rgba(19,187,255,.25)]
                                        "
                            >
                                <CardContent className="py-3 px-6">
                                    {/* Icon + Title */}
                                    <div className="mb-2 flex items-center gap-3">
                                        {/* Icon Box */}
                                        <div
                                            className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-[10px]
                      bg-[#13bbff1f]
                      
                    "
                                        >
                                            <Icon
                                                size={20}
                                                strokeWidth={2}
                                                className="text-primary"
                                            />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-[18px] font-bold text-white">
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <p className="text-[15px] leading-[1.8] text-muted-foreground">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;