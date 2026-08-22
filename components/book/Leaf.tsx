interface LeafProps {
  index: number;
  front: React.ReactNode;
  back: React.ReactNode;
}

export function Leaf({ index, front, back }: LeafProps) {
  return (
    <article className="leaf" data-index={index}>
      <div className="leaf__face leaf__face--front">{front}</div>
      <div className="leaf__face leaf__face--back">{back}</div>
    </article>
  );
}
