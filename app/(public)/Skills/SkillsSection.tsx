import {
    Code,
    Database,
    Minus,
} from "lucide-react";

import SkillCategories from "./SkillCategories";

import {
    backendSkills,
    frontendSkills,
    toolsSkills,
} from "./Skills";

import MarqueeSlider from "./MarqueeSlider";
import { MdBuild } from "react-icons/md";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";

const SkillsSection = () => {
    return (
        <section
            id="skills"
            className="container mx-auto px-6 py-24 lg:px-0"
        >
            {/* Heading */}
            <div className="text-center">
                {/* Expertise */}
                <div className="mb-2 flex items-center justify-center gap-1 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                    <Minus
                        size={20}
                        strokeWidth={3}
                        className="text-primary"
                    />

                    <span>Expertise</span>
                </div>

                {/* Main Heading */}
                <div className="flex justify-center">
                    <SectionHeader className="text-center">
                        <span className="text-primary">
                            &lt; Skill{" "}
                        </span>
                        `s /&gt;
                    </SectionHeader>
                </div>

                {/* Description */}
                <p className="mx-auto mt-3 mb-8 max-w-3xl text-center leading-[1.9] text-[#bdbdbd]">
                    I specialize in building fast, responsive, and scalable web
                    applications using modern frontend and backend technologies,
                    with a strong focus on clean code, performance, and user
                    experience.
                </p>
            </div>

            {/* Skills Cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Frontend */}
                <SkillCategories
                    title="Frontend Development"
                    skills={frontendSkills}
                    icon={<Code size={22} />}
                />

                {/* Backend */}
                <SkillCategories
                    title="Backend Development"
                    skills={backendSkills}
                    icon={<Database size={22} />}
                />

                {/* Tools */}
                <SkillCategories
                    title="Tools & Technologies"
                    skills={toolsSkills}
                    icon={<MdBuild size={22} />}
                />
            </div>

            {/* Slider */}
            <div className="pt-10">
                <MarqueeSlider />
            </div>
        </section>
    );
};

export default SkillsSection; 