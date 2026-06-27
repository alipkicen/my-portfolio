import { Reveal } from "@/components/Reveal";

export default function SectionHeading({ index, kicker, title, className = "" }) {
  return (
    <Reveal className={`flex flex-col gap-4 ${className}`}>
      <div className="flex items-center gap-4">
        {index ? (
          <span className="font-mono text-sm text-accent">{index}</span>
        ) : null}
        {kicker ? <span className="eyebrow">{kicker}</span> : null}
        <span className="h-px flex-1 bg-line" />
      </div>
      <h2 className="display text-balance text-3xl leading-[1.05] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
