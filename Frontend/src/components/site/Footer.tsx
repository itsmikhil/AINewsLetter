import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-background">
      <div className="container-prose grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-md border border-border bg-card font-display text-sm font-semibold text-primary">
              AI
            </span>
            <span className="font-display text-base font-semibold tracking-tight">
              Weekly Digest
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A weekly briefing on artificial intelligence. We read everything so you can read what
            matters.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Explore
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to="/newsletters" className="text-foreground/90 hover:text-primary">
                Newsletter Archive
              </Link>
            </li>
            <li>
              <Link to="/articles" className="text-foreground/90 hover:text-primary">
                Articles
              </Link>
            </li>
            <li>
              <Link to="/" hash="subscribe" className="text-foreground/90 hover:text-primary">
                Subscribe
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Connect
          </h4>

          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href="https://github.com/itsmikhil/AINewsLetter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/90 hover:text-primary"
              >
                GitHub Repository
              </a>
            </li>

            <li>
              <a
                href="https://github.com/itsmikhil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/90 hover:text-primary"
              >
                GitHub Profile
              </a>
            </li>

            <li>
              <a
                href="https://linkedin.com/in/mikhilailani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/90 hover:text-primary"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-prose flex flex-col items-start justify-between gap-2 py-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} AI Weekly Digest. All rights reserved.</p>
          <p className="font-mono">No hype. No clickbait. No endless scrolling.</p>
        </div>
      </div>
    </footer>
  );
}
