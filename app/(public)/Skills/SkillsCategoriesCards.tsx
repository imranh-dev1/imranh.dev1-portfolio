import { Card, CardContent } from "@/components/ui/card"

import { skillsCategories } from "./Skills"

const SkillsCategoriesCards = () => {
  return (
    <div className="flex gap-6 px-2 py-2 pb-20">
      {skillsCategories.map((category, index) => (
        <Card
          key={`${category.name}-${index}`}
          className="h-46.25 w-82.5 min-w-82.5 rounded-[20px] border border-primary/50 bg-card p-0 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-[0_10px_35px_rgba(19,187,255,.18)]"
        >
          <CardContent className="flex h-full flex-col p-6">
            {/* Top */}
            <div className="mb-0 flex items-center gap-4">
              <div className="flex h-10.5 w-10.5 items-center justify-center rounded-xl border border-primary/15 bg-background">
                {category.icon}
              </div>

              <h3 className="text-lg font-bold text-white">{category.name}</h3>
            </div>

            {/* Description */}
            <p className="text-sm leading-[1.8] text-muted-foreground">
              {category.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default SkillsCategoriesCards
