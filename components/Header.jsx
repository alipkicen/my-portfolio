"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import { navLinks, profile } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-ink-900/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-content flex h-[68px] items-center justify-between">
        <Link
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label="Krishan Arpidani — home"
        >
          <span className="font-mono text-lg font-semibold tracking-tight text-fg">
            krishan
            <span className="text-accent">.dev</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline text-sm text-fg-muted transition-colors hover:text-fg"
            >
              {link.name}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-line bg-ink-700 px-4 py-2 font-mono text-xs uppercase tracking-wider text-fg transition-all hover:border-accent/50 hover:text-accent active:translate-y-px"
          >
            Résumé
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-fg lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <List size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-ink-900/95 backdrop-blur-md lg:hidden">
          <nav className="container-content flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base text-fg-muted transition-colors hover:bg-ink-700 hover:text-fg"
              >
                {link.name}
              </a>
            ))}
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md border border-line bg-ink-700 px-3 py-3 text-center font-mono text-sm uppercase tracking-wider text-accent"
            >
              Download Résumé
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
