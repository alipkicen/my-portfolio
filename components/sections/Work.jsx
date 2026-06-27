"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react";
import { projects, techLinks } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

const ease = [0.16, 1, 0.3, 1];

function TechTag({ name }) {
  const href = techLinks[name];
  const inner = <span className="tag">{name}</span>;
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-opacity hover:opacity-80"
    >
      {inner}
    </a>
  ) : (
    inner
  );
}

function FeaturedProject({ project, reversed }) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease }}
      className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14"
    >
      {/* image */}
      <a
        href={project.live || project.github}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative block overflow-hidden rounded-xl border border-line bg-ink-700 ${
          reversed ? "lg:order-2" : ""
        }`}
      >
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 560px"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/50 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center bg-ink-900/0 opacity-0 transition-all duration-300 group-hover:bg-ink-900/40 group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 rounded-md border border-line bg-ink-800/90 px-4 py-2 text-sm text-fg backdrop-blur">
              {project.live ? "Visit live" : "View code"}
              <ArrowUpRight size={15} weight="bold" />
            </span>
          </div>
        </div>
      </a>

      {/* copy */}
      <div className={reversed ? "lg:order-1" : ""}>
        <div className="mb-3 flex items-center gap-3">
          <span className="font-mono text-sm text-accent">{project.num}</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-faint">
            {project.category}
          </span>
        </div>
        <h3 className="display text-2xl leading-tight text-fg lg:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-fg-muted">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <TechTag key={t} name={t} />
          ))}
        </div>

        <div className="mt-7 flex items-center gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-ink-900 transition-all hover:bg-accent-soft active:translate-y-px"
            >
              Live demo
              <ArrowUpRight size={15} weight="bold" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line bg-ink-700/50 px-4 py-2.5 text-sm text-fg transition-all hover:border-accent/40 hover:text-accent active:translate-y-px"
          >
            <GithubLogo size={16} />
            Source
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function CompactProject({ project }) {
  const reduce = useReducedMotion();
  return (
    <motion.a
      href={project.live || project.github}
      target="_blank"
      rel="noopener noreferrer"
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease }}
      className="group grid grid-cols-1 items-center gap-5 rounded-xl border border-line bg-ink-800/50 p-5 transition-all hover:border-accent/30 hover:bg-ink-700/50 sm:grid-cols-[200px_1fr] sm:gap-7"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-line bg-ink-700">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="200px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div>
        <div className="mb-1.5 flex items-center gap-3">
          <span className="font-mono text-sm text-accent">{project.num}</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-faint">
            {project.category}
          </span>
        </div>
        <h3 className="flex items-center gap-1.5 text-lg font-medium text-fg">
          {project.title}
          <ArrowUpRight
            size={15}
            weight="bold"
            className="text-fg-faint transition-all group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </h3>
        <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-fg-muted">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <span key={t} className="font-mono text-[11px] text-fg-faint">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default function Work() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="work"
      className="scroll-mt-24 border-t border-line bg-ink-800/40 py-24 lg:py-32"
    >
      <div className="container-content">
        <SectionHeading
          index="03"
          kicker="Selected work"
          title="Things I've built to solve real problems."
          className="max-w-3xl"
        />

        <div className="mt-16 flex flex-col gap-20 lg:gap-28">
          {featured.map((project, i) => (
            <FeaturedProject
              key={project.num}
              project={project}
              reversed={i % 2 === 1}
            />
          ))}
        </div>

        {rest.length > 0 && (
          <div className="mt-20 flex flex-col gap-5">
            {rest.map((project) => (
              <CompactProject key={project.num} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
