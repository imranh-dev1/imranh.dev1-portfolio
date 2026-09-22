import type { Experience as ExperienceItem } from "@/lib/data/experience";

interface ExperienceCardProps {
    exp: ExperienceItem;
    order: number;
    total: number;
}

export function ExperienceCard({ exp, order, total }: ExperienceCardProps) {
    return (
        <section className="face face--experience flex h-full w-full flex-col overflow-y-auto bg-(--face-experience) p-[clamp(28px,4vw,52px)]" id={`experience-${exp.id}`}>
            <p className="kicker mb-auto text-[.8rem] uppercase tracking-[.22em] text-(--accent-2)">
                {String(order).padStart(2, "0")} / {String(total).padStart(2, "0")} — Journey
            </p>
            <h2 className="face__title my-[.25em] text-[clamp(1rem,4.4vw,2rem)] font-bold leading-[.95] tracking-[-.02em] text-(--ink)">
                {exp.title}
            </h2>
            <ol className="timeline mt-[5px] grid flex-1 list-none">
                <li className="relative border-l-2 border-(--line) pl-[26px] before:absolute before:top-5 before:left-[-7px] before:h-3 before:w-3 before:rounded-full before:bg-(--accent) before:content-[''] before:[box-shadow:0_0_0_4px_rgba(19,187,255,0.18)]">
                    <span className="timeline__year mb-[2px] flex items-center gap-2 text-[.8rem] tracking-[.08em] text-(--accent-2)">
                        {exp.period}
                        {exp.current && (
                            <span className="current-badge rounded-full border border-[#13bbff59] bg-[#13bbff24] px-[9px] py-[2px] text-[.65rem] uppercase tracking-[.08em] text-(--accent-2)">
                                Current
                            </span>
                        )}
                    </span>
                    <em className="block text-[.9rem] text-(--muted) not-italic">{exp.company}</em>
                    <p className="timeline__desc mt-2 max-w-[46ch] text-[.92rem] leading-[1.55] text-(--muted)">
                        {exp.description}
                    </p>

                    {exp.achievements.length > 0 && (
                        <ul className="timeline__achievements mt-[10px] grid list-none gap-[6px]">
                            {exp.achievements.map((achievement) => (
                                <li
                                    className="relative pl-4 text-[.88rem] leading-[1.5] text-(--ink) before:absolute before:top-0 before:left-0 before:content-['•'] before:text-(--accent-2)"
                                    key={achievement}
                                >
                                    {achievement}
                                </li>
                            ))}
                        </ul>
                    )}

                    {exp.technologies.length > 0 && (
                        <div className="tech-tags mt-3 flex flex-wrap gap-[6px]">
                            {exp.technologies.map((tech) => (
                                <span className="tech-tag rounded-full border border-(--line) bg-(--panel-2) px-[10px] py-1 text-[.72rem] tracking-[.02em] text-(--muted)" key={tech}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}
                </li>
            </ol>
        </section>
    );
}