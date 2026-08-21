import { Card, CardContent } from "@/components/ui/card";

import { skillsCategories } from "./Skills";

const SkillsCategoriesCards = () => {
    return (
        <div className="flex gap-6 px-2 py-2 pb-20">
            {skillsCategories.map((category, index) => (
                <Card
                    key={`${category.name}-${index}`}
                    className="
                        w-82.5
                        min-w-82.5
                        h-46.25
                        rounded-[20px]
                        border
                        border-primary/50
                        bg-card
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        hover:border-primary
                        hover:shadow-[0_10px_35px_rgba(19,187,255,.18)]
                        p-0
                    "
                >
                    <CardContent className="flex h-full flex-col p-6">
                        {/* Top */}
                        <div className="mb-0 flex items-center gap-4">
                            <div
                                className="
                                        flex
                                        w-10.5
                                        h-10.5
                                        items-center
                                        justify-center
                                        rounded-xl
                                        border
                                        border-primary/15
                                        bg-background
                                    "
                            >
                                {category.icon}
                            </div>

                            <h3 className="text-lg font-bold text-white">
                                {category.name}
                            </h3>
                        </div>

                        {/* Description */}
                        <p className="text-sm leading-[1.8] text-gray-400">
                            {category.description}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default SkillsCategoriesCards;