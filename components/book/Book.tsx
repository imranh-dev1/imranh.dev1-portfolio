"use client"

import { useRef } from "react"
import { useAppSelector } from "@/lib/hooks"
import { Leaf } from "@/components/book/Leaf"
import { Cover } from "@/components/book/faces/Cover"
import { ExperienceCard } from "@/components/book/faces/ExperienceCard"
import { Awards } from "@/components/book/faces/Awards"
import { ContactIntro } from "@/components/book/faces/ContactIntro"
import { useBookFlip } from "@/hooks/useBookFlip"

export function Book() {
  const sceneRef = useRef<HTMLDivElement>(null)
  const bookRef = useRef<HTMLDivElement>(null)
  const hintRef = useRef<HTMLParagraphElement>(null)

  const experiences = useAppSelector((state) => state.experience.items)

  useBookFlip({ sceneRef, bookRef, hintRef })

  const leaves: { front: React.ReactNode; back: React.ReactNode }[] = []
  for (let i = 0; i < experiences.length; i += 2) {
    const front = (
      <ExperienceCard
        exp={experiences[i]}
        order={i + 1}
        total={experiences.length}
      />
    )
    const next = experiences[i + 1]
    const back = next ? (
      <ExperienceCard exp={next} order={i + 2} total={experiences.length} />
    ) : (
      <Awards />
    )
    leaves.push({ front, back })
  }

  return (
    <div
      className="scene relative grid h-screen place-items-center overflow-hidden rounded-[20px] [background-image:var(--scene-bg)] p-3 [perspective-origin:50%_45%] [perspective:2200px]"
      id="scene"
      ref={sceneRef}
    >
      <div
        className="book relative h-(--ph) w-[calc(var(--pw)*2)] [transform:scale(var(--book-scale))_rotateX(4deg)] bg-(--panel) [filter:drop-shadow(var(--book-shadow))] transform-3d"
        id="book"
        ref={bookRef}
      >
        {/* Static left page: Cover. Never flips — stays open on desktop. */}
        <div className="page page--left-base absolute top-0 left-0 h-full w-(--pw)">
          <Cover />
        </div>

        {/* Static right base page: revealed once every leaf has flipped */}
        <div className="page page--right-base absolute top-0 left-(--pw) z-0 h-full w-(--pw)">
          <ContactIntro />
        </div>

        {leaves.map((leaf, i) => (
          <Leaf key={i} index={i} front={leaf.front} back={leaf.back} />
        ))}
      </div>

      <p
        className="scene__hint absolute bottom-[22px] left-1/2 -translate-x-1/2 text-[.7rem] tracking-[.25em] text-muted-foreground uppercase [transition:opacity_.4s]"
        id="sceneHint"
        ref={hintRef}
      >
        scroll ↓
      </p>
    </div>
  )
}
