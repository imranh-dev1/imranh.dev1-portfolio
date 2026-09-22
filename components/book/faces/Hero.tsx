import { heroCopy } from "@/lib/data/content";

export function Hero() {
  return (
    <section className="face face--hero flex h-full w-full flex-col justify-center overflow-y-auto p-[clamp(28px,4vw,52px)] [background-image:var(--face-hero)]">
      <p className="kicker mb-auto text-[.8rem] uppercase tracking-[.22em] text-primary">
        {heroCopy.kicker}
      </p>
      <h2 className="hero__title mb-[.5em] text-[clamp(2.2rem,4.6vw,3.4rem)] font-bold leading-[1.02] tracking-[-.02em] text-foreground">
        {heroCopy.title}
        <em className="text-primary not-italic">{heroCopy.emphasis}</em>
        {heroCopy.titleEnd}
      </h2>
      <p className="hero__lead max-w-[36ch] text-[1.1rem] leading-[1.6] text-muted-foreground">
        {heroCopy.lead}
      </p>
    </section>
  );
}
