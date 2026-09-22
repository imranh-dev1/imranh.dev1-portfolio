export function ContactIntro() {
  return (
    <section className="face face--contact-intro flex h-full w-full flex-col overflow-hidden bg-(--face-contact-intro) p-[clamp(24px,3.6vw,44px)]">
      <p className="kicker text-[.75rem] uppercase tracking-[.24em] text-primary">Contact</p>
      <h2 className="face__title mt-3 text-[1.15rem] font-bold leading-[1] tracking-[-.02em] text-foreground">
        Got a project?
      </h2>
      <span className="mt-6 block h-px w-14 bg-primary" />
      <p className="face__body mt-6 text-[1rem] leading-[1.65] text-muted-foreground">
        I reply within a day. Use the form on the right, or reach out on any of the socials below.
      </p>
    </section>
  );
}