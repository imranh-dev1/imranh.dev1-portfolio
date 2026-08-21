import SkillBar from "./SkillBar";
import type { Skill } from "./Skills";

interface SkillCategoriesProps {
    title: string;
    skills: Skill[];
    icon: React.ReactNode;
}

const SkillCategories = ({
    title,
    skills,
    icon,
}: SkillCategoriesProps) => {
    return (
        <div className="
                h-full
                overflow-hidden
                rounded-[20px]
                border
                border-primary/50
                bg-card
                transition-all
                duration-300 
                hover:-translate-y-4
                hover:border-primary
                hover:shadow-[0_0_30px_rgba(19,187,255,.25)]
            "
        >
            <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="mb-8 flex items-center gap-4">
                    {/* Icon Box */}
                    <div
                        className="
              flex
              size-10.5
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-primary/10
              text-primary
            "
                    >
                        {icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold tracking-wide text-primary uppercase">
                        {title}
                    </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-col gap-6">
                    {skills.map((skill) => (
                        <SkillBar
                            key={skill.name}
                            name={skill.name}
                            icon={skill.icon}
                            percent={skill.percent}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillCategories;