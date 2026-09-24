import { ArrowRight } from "lucide-react"

export function Cover() {
  return (
    <section className="face face--cover flex h-full w-full flex-col overflow-hidden [background-image:var(--face-cover)] p-[clamp(24px,3.6vw,44px)]">
      <p className="flex tracking-[.10em] uppercase">
        Experience <ArrowRight />
      </p>

      <div className="mt-auto">
        <h1 className="cover__name text-[clamp(2rem,5.2vw,2.9rem)] leading-[.96] font-bold tracking-[-.03em] text-white">
          <span className="text-primary">IMRAN </span> HOSSAIN
        </h1>
        <p className="mt-4 text-[13px] tracking-[.10em] text-white">
          Full Stack Developer building sharp, motion-driven web products.
        </p>

        <div className="scroll-hint mt-6 inline-flex items-center gap-[10px] rounded-full border border-[rgba(255,255,255,0.28)] bg-[rgba(255,255,255,0.06)] px-[16px] py-[5px] text-[.75rem] tracking-[.15em] text-white uppercase">
          <span>Scroll to open</span>
          <i className="arrow inline-flex h-4 w-4 animate-[bob_1.4s_ease-in-out_infinite] items-center justify-center rounded-full bg-primary text-[8px] text-primary-foreground not-italic motion-reduce:animate-none">
            ↓
          </i>
        </div>
      </div>
    </section>
  )
}
