interface LeafProps {
  index: number
  front: React.ReactNode
  back: React.ReactNode
}

export function Leaf({ index, front, back }: LeafProps) {
  return (
    <article
      className="leaf absolute top-0 left-(--pw) h-full w-(--pw) origin-left will-change-transform transform-3d"
      data-index={index}
    >
      <div className="leaf__face leaf__face--front absolute inset-0 overflow-hidden rounded-r-[10px] [box-shadow:inset_1px_0_0_var(--leaf-face-shadow)] backface-hidden after:pointer-events-none after:absolute after:top-0 after:bottom-0 after:left-0 after:h-full after:w-[26px] after:[background-image:var(--leaf-shade-front)] after:content-['']">
        {front}
      </div>
      <div className="leaf__face leaf__face--back absolute inset-0 [transform:rotateY(180deg)] overflow-hidden rounded-l-[10px] [box-shadow:inset_1px_0_0_var(--leaf-face-shadow)] backface-hidden after:pointer-events-none after:absolute after:top-0 after:right-0 after:bottom-0 after:h-full after:w-[26px] after:[background-image:var(--leaf-shade-back)] after:content-['']">
        {back}
      </div>
    </article>
  )
}
