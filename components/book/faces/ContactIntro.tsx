export function ContactIntro() {
  return (
    <section className="face face--contact-intro flex h-full w-full flex-col justify-center overflow-y-auto bg-(--face-contact-intro) p-[clamp(28px,4vw,52px)]">
      <p className="kicker mb-auto text-[.8rem] uppercase tracking-[.22em] text-(--accent-2)">07 — Contact</p>
      <h2 className="face__title my-[.25em] text-[clamp(1rem,4.4vw,2rem)] font-bold leading-[.95] tracking-[-.02em] text-(--ink)">
        Got a
        <br />
        project?
      </h2>
      <p className="face__body max-w-[34ch] text-[1.05rem] leading-[1.6] text-(--muted)">
        I reply within a day. Use the form on the right, or reach out on any of the socials below.
      </p>
    </section>
  );
}
