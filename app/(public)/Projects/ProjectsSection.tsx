"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowUpRight, Minus } from "lucide-react"
import { projects } from "@/lib/data/projects"
import { Button } from "@/components/ui/button"
import ProjectDetailsDialog from "@/components/projects/project-details-dialog"
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader"

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null)

  return (
    <section id="projects" className="container mx-auto scroll-mt-24 py-24">
      {/* Section Title */}
      <div className="mx-auto mb-8 flex w-full flex-col items-center text-center">
        <div className="mb-3 flex items-center justify-center gap-1 text-sm font-semibold tracking-[0.12em] text-primary uppercase">
          <Minus size={20} strokeWidth={3} className="text-primary" />
          <span>Projects</span>
        </div>

        <div className="flex w-full justify-center">
          <SectionHeader>
            <span className="text-primary">&lt; My </span>
            Work /&gt;
          </SectionHeader>
        </div>

        <p className="mx-auto mt-4 max-w-2xl text-center leading-[1.9] text-muted-foreground">
          A selection of projects I have built, showcasing my experience,
          technical skills, and approach to solving real-world problems.
        </p>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-0">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group rounded-[18px] border border-transparent bg-secondary p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-[0_10px_35px_rgba(19,187,255,.18)]"
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
              {project.technologies.slice(0, 6).map((technology, index) => (
                <span
                  key={`${technology}-${index}`}
                  className="rounded-full border border-primary/30 px-3 py-[3px] text-sm text-primary transition-all duration-200 hover:border-primary hover:bg-primary/10"
                >
                  {technology}
                </span>
              ))}

              {project.technologies.length > 6 && (
                <span className="rounded-full border border-foreground/20 px-3 py-[3px] text-sm text-muted-foreground">
                  +{project.technologies.length - 6} more
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
            setSelectedProject(null)
          }
        }}
      />
    </section>
  )
}
