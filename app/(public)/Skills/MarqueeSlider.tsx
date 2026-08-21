"use client";

import Marquee from "react-fast-marquee";

import SkillsCategoriesCards from "./SkillsCategoriesCards";

const MarqueeSlider = () => {
    return (
        <div className="overflow-hidden py-4">
            <Marquee
                speed={40}
                gradient={false}
                pauseOnHover
                pauseOnClick
            >
                <SkillsCategoriesCards />
            </Marquee>
        </div>
    );
};

export default MarqueeSlider;