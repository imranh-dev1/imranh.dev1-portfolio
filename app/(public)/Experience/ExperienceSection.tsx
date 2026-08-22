import { Book } from "@/components/book/Book";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import { Minus } from "lucide-react";

const ExperienceSection = () => {
    return (
        <section id="experience" className="bg-secondary">
            <div className="container mx-auto px-6 py-24 lg:px-0">
                <div className="mx-auto mb-12 flex w-full flex-col items-center text-center">
                    <div className="mb-3 flex items-center justify-center gap-1 text-sm font-semibold tracking-[0.12em] text-primary uppercase">
                        <Minus size={20} strokeWidth={3} className="text-primary" />
                        <span>Experience</span>
                    </div>

                    <div className="flex w-full justify-center">
                        <SectionHeader>
                            <span className="text-primary">&lt; My </span>
                            Journey /&gt;
                        </SectionHeader>
                    </div>

                    <p className="mx-auto mt-4 max-w-2xl text-center leading-[1.9] text-[#bdbdbd]">
                        A look through my professional journey, projects,
                        responsibilities and technologies.
                    </p>
                </div>
                <Book />
            </div>
        </section>
    );
};

export default ExperienceSection;