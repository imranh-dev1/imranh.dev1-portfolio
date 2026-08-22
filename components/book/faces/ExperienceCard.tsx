import type { Experience as ExperienceItem } from "@/lib/data/experience";

interface ExperienceCardProps {
    exp: ExperienceItem;
    order: number;
    total: number;
}

export function ExperienceCard({ exp, order, total }: ExperienceCardProps) {
    return (
        <section className="face face--experience" id={`experience-${exp.id}`}>
            <p className="kicker">
                {String(order).padStart(2, "0")} / {String(total).padStart(2, "0")} — Journey
            </p>
            <h2 className="face__title">{exp.title}</h2>
            <ol className="timeline">
                <li> 
                    <span className="timeline__year">
                        {exp.period}
                        {exp.current && <span className="current-badge">Current</span>}
                    </span>
                    <em>{exp.company}</em>
                    <p className="timeline__desc">{exp.description}</p>

                    {exp.achievements.length > 0 && (
                        <ul className="timeline__achievements">
                            {exp.achievements.map((achievement) => (
                                <li key={achievement}>{achievement}</li>
                            ))}
                        </ul>
                    )}

                    {exp.technologies.length > 0 && (
                        <div className="tech-tags">
                            {exp.technologies.map((tech) => (
                                <span className="tech-tag" key={tech}>
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