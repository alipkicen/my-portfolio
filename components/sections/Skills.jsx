import { skillGroups, skillLevelMap } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";

function SkillBar({ name, level }) {
  const meta = skillLevelMap[level];
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between">
        <span className="text-sm text-fg">{name}</span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-fg-faint">
          {meta.label}
        </span>
      </div>
      <div className="h-1 w-full overflow-hidden rounded-full bg-ink-600">
        <div
          className="h-full rounded-full bg-accent/80"
          style={{ width: `${meta.pct}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24 lg:py-32">
      <div className="container-content">
        <SectionHeading
          title="The toolkit, and how comfortable I am with it."
          className="max-w-3xl"
        />
        <Reveal delay={0.05}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-fg-muted">
            I'd rather be honest than inflate badges. Bars below reflect real
            comfort level: strongest in Python and the web stack, and actively
            leveling up the ML side through projects.
          </p>
        </Reveal>

        <RevealStagger className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
          {skillGroups.map((group) => (
            <RevealItem
              key={group.title}
              className="bg-ink-800 p-7 lg:p-8"
            >
              <h3 className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent/90">
                <span className="h-px w-5 bg-accent/50" />
                {group.title}
              </h3>
              <div className="flex flex-col gap-5">
                {group.items.map((item) => (
                  <SkillBar key={item.name} name={item.name} level={item.level} />
                ))}
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
