import { ArrowUp, GithubLogo, LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { profile, navLinks } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-ink-900">
      <div className="container-content py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <span className="font-mono text-lg font-semibold text-fg">
              krishan<span className="text-accent">.dev</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed text-fg-muted">
              {profile.role} based in {profile.location}. Building reliable
              hardware by day, software by night.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-fg-muted transition-all hover:border-accent/40 hover:text-accent"
              >
                <GithubLogo size={18} />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-fg-muted transition-all hover:border-accent/40 hover:text-accent"
              >
                <LinkedinLogo size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-fg-muted transition-all hover:border-accent/40 hover:text-accent"
              >
                <EnvelopeSimple size={18} />
              </a>
            </div>
          </div>

          <nav className="flex flex-col gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-faint">
              Navigate
            </span>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline text-sm text-fg-muted transition-colors hover:text-fg"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <p className="font-mono text-xs text-fg-faint">
            © {year} Krishan Arpidani. Built with Next.js & Tailwind.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 font-mono text-xs text-fg-muted transition-colors hover:text-accent"
          >
            Back to top
            <ArrowUp size={13} weight="bold" />
          </a>
        </div>
      </div>
    </footer>
  );
}
