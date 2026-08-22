import { stats } from "@/lib/data/content";

export function Awards() {
  return (
    <section className="face face--awards bg-background" id="awards">
      <p className="kicker">05 — By the numbers</p>
      <h2 className="face__title">
        By the
        <br />
        numbers
      </h2>
      <div className="stats">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <b>{stat.value}</b>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
