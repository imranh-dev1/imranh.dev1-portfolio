"use client";

import { useAppSelector } from "@/lib/hooks";

export function Experience() {
  const experiences = useAppSelector((state) => state.experience.items);

  console.log(experiences)

  return (
    <section className="face face--experience" id="experience">
      <p className="kicker">04 — Journey</p>
      <h2 className="face__title">Experience</h2>
      <ol className="timeline">
        {experiences.map((exp) => (
          <li key={exp.id}>
            <span className="timeline__year">
              {exp.period}
              {exp.current && <span className="current-badge">Current</span>}
            </span>
            <strong>{exp.title}</strong>
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
        ))}
      </ol>
    </section>
  );
}
