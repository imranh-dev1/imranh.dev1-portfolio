interface LeafProps {
  index: number;
  front: React.ReactNode;
  back: React.ReactNode;
}

export function Leaf({ index, front, back }: LeafProps) {
  return (
    <article
      className="leaf absolute top-0 left-(--pw) h-full w-(--pw) origin-left transform-3d will-change-transform"
      data-index={index}
    >
      <div className="leaf__face leaf__face--front absolute inset-0 overflow-hidden rounded-r-[10px] backface-hidden [box-shadow:inset_1px_0_0_var(--leaf-face-shadow)] after:absolute after:top-0 after:bottom-0 after:left-0 after:h-full after:w-[26px] after:content-[''] after:pointer-events-none after:[background-image:var(--leaf-shade-front)]">
        {front}
      </div>
      <div className="leaf__face leaf__face--back absolute inset-0 overflow-hidden rounded-l-[10px] backface-hidden [transform:rotateY(180deg)] [box-shadow:inset_1px_0_0_var(--leaf-face-shadow)] after:absolute after:top-0 after:bottom-0 after:right-0 after:h-full after:w-[26px] after:content-[''] after:pointer-events-none after:[background-image:var(--leaf-shade-back)]">
        {back}
      </div>
    </article>
  );
}
