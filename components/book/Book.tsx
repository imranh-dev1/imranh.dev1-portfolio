"use client";

import { useRef } from "react";
import { useAppSelector } from "@/lib/hooks";
import { Leaf } from "@/components/book/Leaf";
import { Cover } from "@/components/book/faces/Cover";
import { ExperienceCard } from "@/components/book/faces/ExperienceCard";
import { Awards } from "@/components/book/faces/Awards";
import { useBookFlip } from "@/hooks/useBookFlip";
import { Minus } from "lucide-react";
import SectionHeader from "../shared/SectionHeader/SectionHeader";

export function Book() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLParagraphElement>(null);

  const experiences = useAppSelector((state) => state.experience.items);

  useBookFlip({ sceneRef, bookRef, hintRef });

  // Two experience items per leaf (front + back), like a real book page.
  // If there's an odd one out at the end, its back face falls back to
  // the Awards/stats page instead of being left blank.
  const leaves: { front: React.ReactNode; back: React.ReactNode }[] = [];
  for (let i = 0; i < experiences.length; i += 2) {
    const front = (
      <ExperienceCard
        exp={experiences[i]}
        order={i + 1}
        total={experiences.length}
      />
    );
    const next = experiences[i + 1];
    const back = next ? (
      <ExperienceCard exp={next} order={i + 2} total={experiences.length} />
    ) : (
      <Awards />
    );
    leaves.push({ front, back });
  }

  return (
    <div className="scene" id="scene" ref={sceneRef}>
      <div className="book bg-green" id="book" ref={bookRef}>
        {/* Static left page: Cover. Never flips — stays open on desktop. */}
        <div className="page page--left-base">
          <Cover />
        </div>

        {/* Static right base page: revealed once every leaf has flipped */}
        <div className="page page--right-base">

        </div>

        {leaves.map((leaf, i) => (
          <Leaf key={i} index={i} front={leaf.front} back={leaf.back} />
        ))}
      </div>

      <p className="scene__hint" id="sceneHint" ref={hintRef}>
        scroll ↓
      </p>
    </div>
  );
}