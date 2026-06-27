import { about, stats } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 lg:py-32">
      <div className="container-content">
        <SectionHeading
          index="01"
          kicker="About"
          title="Engineer by training, builder by habit."
          className="max-w-3xl"
        />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          {/* narrative */}
          <Reveal delay={0.05}>
            <p className="text-balance text-lg leading-relaxed text-fg-muted lg:text-xl">
              {about.description}
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
              {about.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col gap-0.5 border-l border-line pl-4"
                >
                  <span className="font-mono text-[11px] uppercase tracking-wider text-fg-faint">
                    {fact.label}
                  </span>
                  <span className="text-sm text-fg">{fact.value}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* stats card */}
          <RevealStagger className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line">
            {stats.map((s) => (
              <RevealItem
                key={s.label}
                className="flex flex-col gap-1.5 bg-ink-800 p-6"
              >
                <span className="font-mono text-2xl font-semibold text-fg lg:text-3xl">
                  {s.value}
                </span>
                <span className="text-xs leading-snug text-fg-muted">
                  {s.label}
                </span>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
