import type { Experience as ExperienceItem } from "@/lib/data/experience"

interface ExperienceCardProps {
  exp: ExperienceItem
  order: number
  total: number
}

export function ExperienceCard({ exp, order, total }: ExperienceCardProps) {
  return (
    <section
      className="face face--experience flex h-full w-full flex-col overflow-hidden bg-(--face-experience) p-[clamp(24px,3.6vw,44px)]"
      id={`experience-${exp.id}`}
    >
      <header className="shrink-0">
        <p className="kicker text-[.75rem] tracking-[.24em] text-primary uppercase">
          {String(order).padStart(2, "0")} / {String(total).padStart(2, "0")} —
          Journey
        </p>
        <h2 className="face__title mt-3 text-[clamp(1rem,2.4vw,1.4rem)] leading-[1.05] font-bold tracking-[-.02em] text-foreground">
          {exp.title}
        </h2>
        <span className="mt-5 block h-px w-14 bg-primary" />
      </header>

      <div className="mt-6 flex-1 overflow-y-auto pr-1">
        <ol className="timeline list-none border-l-2 border-border pl-[26px]">
          <li className="relative">
            <span className="absolute top-[7px] -left-[31px] h-3 w-3 rounded-full bg-primary ring-4 ring-primary/20" />
            <span className="timeline__year flex items-center gap-2 text-[.8rem] tracking-[.08em] text-primary">
              {exp.period}
              {exp.current && (
                <span className="current-badge rounded-full border border-border bg-primary/15 px-[9px] py-[2px] text-[.65rem] tracking-[.08em] text-primary uppercase">
                  Current
                </span>
              )}
            </span>
            <em className="mt-1 block text-[.95rem] text-muted-foreground not-italic">
              {exp.company}
            </em>
            <p className="timeline__desc mt-2.5 text-justify text-[.92rem] leading-[1.6] text-muted-foreground">
              {exp.description}
            </p>

            {exp.achievements.length > 0 && (
              <ul className="timeline__achievements mt-4 grid list-none gap-[8px]">
                {exp.achievements.map((achievement) => (
                  <li
                    className="relative flex gap-2.5 text-[.88rem] leading-[1.55] text-foreground"
                    key={achievement}
                  >
                    <span className="mt-[3px] flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-[4px] bg-primary/15 text-[9px] font-bold text-primary">
                      ✓
                    </span>
                    {achievement}
                  </li>
                ))}
              </ul>
            )}

            {exp.technologies.length > 0 && (
              <div className="tech-tags mt-4 flex flex-wrap gap-[6px]">
                {exp.technologies.map((tech) => (
                  <span
                    className="tech-tag rounded-full border border-border bg-(--panel-2) px-[10px] py-1 text-[.72rem] tracking-[.02em] text-muted-foreground"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </li>
        </ol>
      </div>
    </section>
  )
}
