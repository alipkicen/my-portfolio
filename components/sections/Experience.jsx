import { experience, education } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import { ArrowUpRight, GraduationCap } from "@phosphor-icons/react/dist/ssr";

function TimelineRow({ item }) {
  return (
    <div className="group relative grid grid-cols-1 gap-2 py-7 sm:grid-cols-[180px_1fr] sm:gap-8">
      <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-2">
        <span className="font-mono text-xs tracking-wide text-fg-faint">
          {item.duration}
        </span>
        {item.current && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent" />
            Current
          </span>
        )}
      </div>

      <div>
        <h3 className="text-lg font-medium text-fg">{item.position}</h3>
        <a
          href={item.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-0.5 inline-flex items-center gap-1 text-sm text-accent/90 transition-colors hover:text-accent"
        >
          {item.company}
          <ArrowUpRight size={13} weight="bold" />
        </a>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fg-muted">
          {item.summary}
        </p>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-line bg-ink-800/40 py-24 lg:py-32"
    >
      <div className="container-content">
        <SectionHeading
          index="02"
          title="Where I've worked & studied."
          className="max-w-3xl"
        />

        <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          {/* experience timeline */}
          <RevealStagger className="divide-y divide-line">
            {experience.map((item, i) => (
              <RevealItem key={i}>
                <TimelineRow item={item} />
              </RevealItem>
            ))}
          </RevealStagger>

          {/* education */}
          <Reveal delay={0.1}>
            <div className="mb-6 flex items-center gap-2.5">
              <GraduationCap size={18} className="text-accent" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
                Education
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {education.map((edu, i) => (
                <a
                  key={i}
                  href={edu.instituteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-lg border border-line bg-ink-900/60 p-5 transition-all hover:border-accent/30 hover:bg-ink-700/60"
                >
                  <span className="font-mono text-xs text-fg-faint">
                    {edu.duration}
                  </span>
                  <h4 className="mt-1.5 text-base font-medium leading-snug text-fg">
                    {edu.degree}
                  </h4>
                  <span className="mt-1 inline-flex items-center gap-1 text-sm text-fg-muted transition-colors group-hover:text-accent">
                    {edu.institute}
                    <ArrowUpRight size={12} weight="bold" />
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
