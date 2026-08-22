import { testimonials } from "@/lib/data/content";

export function Testimonials() {
  return (
    <section className="face face--testimonials" id="testimonials">
      <p className="kicker">06 — Words</p>
      <h2 className="face__title">
        Kind
        <br />
        words
      </h2>
      {testimonials.map((t) => (
        <figure className="quote" key={t.name}>
          <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
          <figcaption>
            <strong>{t.name}</strong>
            <em>{t.role}</em>
          </figcaption>
        </figure>
      ))}
    </section>
  );
}
