import { testimonials } from "@/lib/data/content";

export function Testimonials() {
  return (
    <section className="face face--testimonials flex h-full w-full flex-col overflow-y-auto bg-(--face-testimonials) p-[clamp(28px,4vw,52px)]" id="testimonials">
      <p className="kicker mb-auto text-[.8rem] uppercase tracking-[.22em] text-(--accent-2)">06 — Words</p>
      <h2 className="face__title my-[.25em] text-[clamp(1rem,4.4vw,2rem)] font-bold leading-[.95] tracking-[-.02em] text-(--ink)">
        Kind
        <br />
        words
      </h2>
      {testimonials.map((t) => (
        <figure className="quote mt-4 rounded-xl border border-(--line) border-l-[3px] border-l-(--accent) bg-(--panel-2) px-[18px] py-4" key={t.name}>
          <blockquote className="text-[1.05rem] leading-[1.5] text-(--ink)">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-[10px] flex items-baseline gap-2 text-[.85rem]">
            <strong className="text-(--ink)">{t.name}</strong>
            <em className="text-(--muted) not-italic">{t.role}</em>
          </figcaption>
        </figure>
      ))}
    </section>
  );
}
