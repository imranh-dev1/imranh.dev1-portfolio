"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/lib/data/projects";
import { Button } from "@/components/ui/button";
import ProjectDetailsDialog from "@/components/projects/project-details-dialog";

export default function ProjectsSection() {
    const [selectedProject, setSelectedProject] =
        useState<(typeof projects)[number] | null>(null);

    return (
        <section className="container mx-auto py-24">
            {/* Section Title */}
            <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold">
                    Project
                    <span className="text-primary-color">S</span>
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
                    A selection of projects I have built using modern web
                    technologies and development practices.
                </p>
            </div>

            {/* Projects */}
            <div className="grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-0">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="group rounded-[20px] border border-transparent bg-secondary p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-[0_10px_35px_rgba(19,187,255,.18)]"
                    >
                        {/* Image */}
                        <div className="mb-4 h-48 overflow-hidden rounded-lg shadow-md">
                            <Image
                                src={project.image}
                                alt={project.title}
                                className="h-auto min-h-full w-full object-cover object-top transition-transform duration-[4000ms] ease-in-out group-hover:-translate-y-[70%]"
                            />
                        </div>

                        {/* Category */}
                        <p className="mb-2 text-sm font-semibold text-muted-foreground">
                            {project.category}
                        </p>

                        {/* Title */}
                        <h3 className="mb-2 text-xl font-semibold text-primary">
                            {project.title}
                        </h3>

                        {/* Overview */}
                        <p className="text-sm leading-6 text-muted-foreground">
                            {project.overview.length > 180
                                ? `${project.overview.slice(0, 180)}...`
                                : project.overview}
                        </p>


                        {/* Technologies */}
                        <div className="mx-auto flex flex-wrap justify-center gap-3 rounded-2xl p-4">

                            {project.technologies

                                .slice(0, 6)

                                .map((technology, index) => (

                                    <span

                                        key={`${technology}-${index}`}

                                        className="rounded-full border border-primary-color px-3 py-.9 text-sm text-primary transition-all duration-200 hover:bg-primary-color hover:text-white">

                                        {technology}

                                    </span>

                                ))}

                            {project.technologies.length > 3 && (

                                <span className="rounded-full border border-gray-300 px-3 py-.9 text-sm text-muted-foreground">

                                    +{project.technologies.length - 3} more

                                </span>

                            )}

                        </div>
                        <div className="flex items-center justify-center">

                            {/* Details */}
                            <Button
                                variant="secondary"
                                className="uppercase"
                                onClick={() => setSelectedProject(project)}
                            >
                                View More / Details
                                <ArrowUpRight />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {projects.length === 0 && (
                <div className="py-10 text-center text-muted-foreground">
                    No projects found.
                </div>
            )}

            {/* Details Dialog */}
            <ProjectDetailsDialog
                project={selectedProject}
                open={!!selectedProject}
                onOpenChange={(open) => {
                    if (!open) {
                        setSelectedProject(null);
                    }
                }}
            />
        </section>
    );
} 
