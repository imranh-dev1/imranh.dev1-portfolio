export function Cover() {
  return (
    <section className="face face--cover flex h-full w-full flex-col justify-between overflow-y-auto rounded-l-[15px] p-[clamp(28px,4vw,52px)] [background-image:var(--face-cover)]">
      <p className="kicker mb-auto text-[.8rem] uppercase tracking-[.22em] text-(--accent-2)">
        Experience ·
      </p>
      <h1 className="cover__name text-[clamp(2rem,7vw,3rem)] font-bold leading-none tracking-[-.03em] text-white">
        <span className="text-primary">
          IMRAN
        </span>
        <br />
        HOSSAIN
      </h1>
      <p className="cover__role py-2 text-[1.05rem] text-[rgba(255,255,255,0.85)]">Full Stack Developer.</p>
      <div className="scroll-hint flex items-center gap-[10px] text-[.75rem] uppercase tracking-[.15em] text-[rgba(255,255,255,0.8)]">
        <span>Scroll to open</span>
        <i className="arrow animate-[bob_1.4s_ease-in-out_infinite] text-[#13bbff] not-italic motion-reduce:animate-none">↓</i>
      </div>
    </section>
  );
}
