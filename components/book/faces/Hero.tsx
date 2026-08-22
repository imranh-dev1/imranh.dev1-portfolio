import { heroCopy } from "@/lib/data/content";

export function Hero() {
  return (
    <section className="face face--hero bg-background p-10">
      <p className="kicker">{heroCopy.kicker}</p>
      <h2 className="hero__title">
        {heroCopy.title}
        <em>{heroCopy.emphasis}</em>
        {heroCopy.titleEnd}
      </h2>
      <p className="hero__lead">{heroCopy.lead}</p>
    </section>
  );
}
