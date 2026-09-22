import { ArrowRight } from "lucide-react";

export function Cover() {
  return (
    <section className="face face--cover flex h-full w-full flex-col overflow-hidden p-[clamp(24px,3.6vw,44px)] [background-image:var(--face-cover)]">
      <p className="uppercase tracking-[.10em] flex">
        Experience <ArrowRight />
      </p>

      <div className="mt-auto">
        <h1 className="cover__name text-[clamp(2rem,5.2vw,2.9rem)] font-bold leading-[.96] tracking-[-.03em] text-white">
          <span className="text-primary">IMRAN </span> HOSSAIN
        </h1>
        <p className="mt-4 text-[13px] tracking-[.10em] text-white">
          Full Stack Developer building sharp, motion-driven web products.
        </p>

        <div className="scroll-hint mt-6 inline-flex items-center gap-[10px] rounded-full border border-[rgba(255,255,255,0.28)] bg-[rgba(255,255,255,0.06)] px-[16px] py-[5px] text-[.75rem] uppercase tracking-[.15em] text-white">
          <span>Scroll to open</span>
          <i className="arrow inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[8px] not-italic text-primary-foreground animate-[bob_1.4s_ease-in-out_infinite] motion-reduce:animate-none">↓</i>
        </div>
      </div>
    </section>
  );
}