import { stats } from "@/lib/data/content";

export function Awards() {
  return (
    <section className="face face--awards flex h-full w-full flex-col overflow-y-auto p-[clamp(28px,4vw,52px)] [background-image:var(--face-awards)]" id="awards">
      <p className="kicker mb-auto text-[.8rem] uppercase tracking-[.22em] text-(--accent-2)">05 — By the numbers</p>
      <h2 className="face__title my-[.25em] text-[clamp(1rem,4.4vw,2rem)] font-bold leading-[.95] tracking-[-.02em] text-(--ink)">
        By the
        <br />
        numbers
      </h2>
      <div className="stats mt-[22px] grid grid-cols-2 gap-[14px]">
        {stats.map((stat) => (
          <div className="stat rounded-xl border border-(--line) bg-(--panel-2) p-4" key={stat.label}>
            <b className="block bg-[linear-gradient(90deg,var(--accent-2),var(--accent))] text-[clamp(1.8rem,4vw,2.6rem)] font-bold leading-none text-transparent [-webkit-background-clip:text] [background-clip:text]">
              {stat.value}
            </b>
            <span className="text-[.85rem] text-(--muted)">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
