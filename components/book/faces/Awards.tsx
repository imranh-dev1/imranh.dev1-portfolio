import { stats } from "@/lib/data/content"

export function Awards() {
  return (
    <section
      className="face face--awards flex h-full w-full flex-col overflow-hidden [background-image:var(--face-awards)] p-[clamp(24px,3.6vw,44px)]"
      id="awards"
    >
      <header className="shrink-0">
        <p className="kicker text-[.75rem] tracking-[.24em] text-primary uppercase">
          05 — By the numbers
        </p>
        <h2 className="face__title mt-3 text-[clamp(1.2rem,2.4vw,1.9rem)] leading-[1.05] font-bold tracking-[-.02em] text-foreground">
          By the numbers
        </h2>
        <span className="mt-5 block h-px w-14 bg-primary" />
      </header>

      <div className="stats mt-6 grid flex-1 grid-cols-2 content-start gap-[14px] overflow-y-auto pr-1">
        {stats.map((stat) => (
          <div
            className="stat rounded-2xl border border-border bg-(--panel-2) p-[18px] shadow-[var(--card-shadow)]"
            key={stat.label}
          >
            <b className="block bg-[linear-gradient(90deg,var(--primary),var(--ring))] [background-clip:text] text-[clamp(1.8rem,3.6vw,2.4rem)] leading-none font-bold text-transparent [-webkit-background-clip:text]">
              {stat.value}
            </b>
            <span className="mt-3 block border-t border-border pt-2.5 text-[.82rem] leading-snug text-muted-foreground">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
