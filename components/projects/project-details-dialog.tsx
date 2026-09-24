"use client";

import Image from "next/image";
import {
    CheckCircle2,
    ExternalLink,
    Layers3,
    Target,
    Wrench,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";

interface ProjectDetailsDialogProps {
    project: (typeof import("@/lib/data/projects").projects)[number] | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function ProjectDetailsDialog({
    project,
    open,
    onOpenChange,
}: ProjectDetailsDialogProps) {
    if (!project) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                className="!w-[95vw] !max-w-6xl max-h-[92vh] max-h-[92dvh] overflow-y-auto border-border bg-background p-0"
            >
                {/* Hero */}
                <div className="grid overflow-hidden lg:grid-cols-[1.15fr_0.85fr]">
                    {/* Image */}
                    <div className="relative h-64 min-h-full overflow-hidden bg-secondary sm:h-80 lg:h-[390px]">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            priority
                            className="object-cover object-top"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                        {/* Image Badge */}
                        <div className="absolute left-5 top-5">
                            <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                                Featured Project
                            </span>
                        </div>

                        {/* Image Bottom */}
                        <div className="absolute bottom-5 left-5 right-5 lg:hidden">
                            <p className="mb-1 text-sm font-medium text-primary">
                                {project.category}
                            </p>

                            <h2 className="text-2xl font-bold text-white">
                                {project.title}
                            </h2>
                        </div>
                    </div>

                    {/* Hero Content */}
                    <div className="flex flex-col justify-center border-l border-border bg-secondary/30 p-6 sm:p-8 lg:p-10">
                        <p className="mb-3 hidden text-sm font-medium text-primary lg:block">
                            {project.category}
                        </p>

                        <DialogHeader className="text-left">
                            <DialogTitle className="text-3xl font-bold leading-tight sr-only lg:block xl:text-4xl lg:not-sr-only">
                                {project.title}
                            </DialogTitle>

                            <DialogDescription className="mt-3 text-sm leading-7 text-muted-foreground">
                                {project.overview}
                            </DialogDescription>
                        </DialogHeader>

                        {/* Hero Actions */}
                        <div className="
                                    mt-6
                                    flex
                                    w-full
                                    flex-col
                                    items-center
                                    justify-center
                                    gap-3
                                    sm:w-auto
                                    sm:flex-row sm:items-center sm:gap-4">
                            <Button
                                asChild
                                variant="primary"
                                size="default"
                                className="w-full uppercase tracking-wide sm:w-auto flex-1">
                                <Link
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        flex
                                        items-center
                                        justify-center
                                        gap-2
                                      ">

                                    <ExternalLink />
                                    Live Project
                                </Link>
                            </Button>

                            <Button
                                asChild
                                variant="secondary"
                                size="default"
                                className="w-full uppercase tracking-wide sm:w-auto flex-1">
                                <Link
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        flex
                                        items-center
                                        justify-center
                                        gap-2
                                      ">

                                    <FaGithub />
                                    GitHub
                                </Link>
                            </Button>

                        </div>

                        {/* Quick Stats */}
                        <div className="mt-8 grid grid-cols-2 gap-3 border-t border-border pt-6">
                            {project.stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-xl border border-border bg-background/50 p-3 flex flex-col items-center justify-center">
                                    <p className="text-lg font-bold text-primary">
                                        {stat.value}
                                    </p>

                                    <p className="mt-0.5 text-xs text-muted-foreground">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="space-y-8 p-6 sm:p-8 lg:p-10">
                    {/* Technologies */}
                    <section>
                        <SectionHeading
                            icon={<Layers3 />}
                            title="Technologies"
                        />

                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="rounded-lg border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary transition hover:border-primary hover:bg-primary/10"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Features */}
                    <section>
                        <SectionHeading
                            icon={<CheckCircle2 />}
                            title="Key Features"
                        />

                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {project.features.map((feature) => (
                                <div
                                    key={feature}
                                    className="group flex items-start gap-3 rounded-xl border border-border bg-secondary/30 p-4 transition-all duration-200 hover:border-primary/40 hover:bg-primary/5"
                                >
                                    <div className="mt-0.5 rounded-full bg-primary/10 p-1">
                                        <CheckCircle2 className="size-3.5 text-primary" />
                                    </div>

                                    <span className="text-sm leading-5 text-muted-foreground transitions group-hover:text-foreground">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Challenge & Solution */}
                    <section>
                        <SectionHeading
                            icon={<Target />}
                            title="Development Process"
                        />

                        <div className="grid gap-4 lg:grid-cols-2">
                            {/* Challenge */}
                            <div className="rounded-2xl border border-border bg-secondary/30 p-5 sm:p-6">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="rounded-lg bg-primary/10 p-2">
                                        <Target className="size-4 text-primary" />
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-semibold">
                                            The Challenge
                                        </h3>

                                        <p className="text-xs text-muted-foreground">
                                            What needed to be solved
                                        </p>
                                    </div>
                                </div>

                                <p className="text-sm leading-7 text-muted-foreground">
                                    {project.challenges}
                                </p>
                            </div>

                            {/* Solution */}
                            <div className="rounded-2xl border border-border bg-secondary/30 p-5 sm:p-6">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="rounded-lg bg-primary/10 p-2">
                                        <Wrench className="size-4 text-primary" />
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-semibold">
                                            The Solution
                                        </h3>

                                        <p className="text-xs text-muted-foreground">
                                            How it was implemented
                                        </p>
                                    </div>
                                </div>

                                <p className="text-sm leading-7 text-muted-foreground">
                                    {project.solution}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Bottom CTA */}
                    <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-5 sm:flex-row sm:p-6">
                        <div>
                            <h3 className="font-semibold">
                                Interested in this project?
                            </h3>

                            <p className="mt-1 text-sm text-muted-foreground">
                                Explore the live application or check out the
                                source code.
                            </p>
                        </div>

                        <div className="flex w-full gap-2 sm:w-auto">
                           <Button
                                asChild
                                variant="primary"
                                size="default"
                                className="w-full uppercase tracking-wide sm:w-auto flex-1">
                                <Link
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        flex
                                        items-center
                                        justify-center
                                        gap-2
                                      ">

                                    <ExternalLink />
                                    Live Project
                                </Link>
                            </Button>

                            <Button
                                asChild
                                variant="secondary"
                                size="default"
                                className="w-full uppercase tracking-wide sm:w-auto flex-1">
                                <Link
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        flex
                                        items-center
                                        justify-center
                                        gap-2
                                      ">

                                    <FaGithub />
                                    GitHub
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

function SectionHeading({
    icon,
    title,
}: {
    icon: React.ReactNode;
    title: string;
}) {
    return (
        <div className="mb-4 flex items-center gap-2">
            <div className="rounded-lg bg-primary/10 p-2 text-primary">
                {icon}
            </div>

            <h3 className="font-semibold">{title}</h3>
        </div>
    );
} 
