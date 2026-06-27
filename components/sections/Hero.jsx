"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { profile } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  const reduce = useReducedMotion();

  const item = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-[68px]"
    >
      {/* background texture */}
      <div className="pointer-events-none absolute inset-0 bg-grid bg-fade-bottom opacity-70" />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[420px] w-[420px] rounded-full bg-accent/[0.06] blur-[120px]" />

      <div className="container-content relative grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        {/* Left: copy */}
        <div className="order-2 lg:order-none">
          <motion.div
            {...item(0)}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-ink-700/60 px-3.5 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-accent" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs tracking-wide text-fg-muted">
              {profile.role} · {profile.location}
            </span>
          </motion.div>

          <motion.h1
            {...item(0.08)}
            className="display text-balance text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[4.4rem]"
          >
            Krishan
            <br />
            <span className="text-accent-grad">Arpidani</span>
          </motion.h1>

          <motion.p
            {...item(0.18)}
            className="mt-6 max-w-[46ch] text-balance text-lg leading-relaxed text-fg-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            {...item(0.28)}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-ink-900 transition-all hover:bg-accent-soft active:translate-y-px"
            >
              View my work
              <ArrowUpRight
                size={16}
                weight="bold"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-line bg-ink-700/50 px-5 py-3 text-sm text-fg transition-all hover:border-accent/40 hover:text-accent active:translate-y-px"
            >
              Get in touch
            </a>

            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-md border border-line text-fg-muted transition-all hover:border-accent/40 hover:text-accent"
              >
                <GithubLogo size={19} />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-md border border-line text-fg-muted transition-all hover:border-accent/40 hover:text-accent"
              >
                <LinkedinLogo size={19} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: portrait */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="order-1 mx-auto lg:order-none lg:ml-auto"
        >
          <div className="relative w-[230px] sm:w-[280px] lg:w-[340px]">
            {/* frame accents */}
            <div className="absolute -left-3 -top-3 h-16 w-16 border-l border-t border-accent/50" />
            <div className="absolute -bottom-3 -right-3 h-16 w-16 border-b border-r border-accent/50" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-line bg-ink-700">
              <Image
                src="/photos.png"
                alt="Krishan Arpidani"
                fill
                priority
                sizes="(max-width: 1024px) 280px, 340px"
                className="object-cover object-center grayscale-[0.15] transition-all duration-700 hover:grayscale-0"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent" />
            </div>
            {/* caption chip */}
            <div className="absolute -bottom-4 left-4 rounded-md border border-line bg-ink-800/90 px-3 py-1.5 backdrop-blur">
              <span className="font-mono text-[11px] tracking-wide text-fg-muted">
                <span className="text-accent">@</span>Micron · KL
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-fg-faint lg:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
          Scroll
        </span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
