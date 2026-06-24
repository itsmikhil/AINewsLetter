import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { to: "/", label: "Home" },
    { to: "/articles", label: "Articles" },
    { to: "/newsletters", label: "Newsletter Archive" },
  ] as const;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-background/60 backdrop-blur-md"
      }`}
    >
      <div className="container-prose flex h-16 items-center justify-between">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-md border border-border bg-card font-display text-sm font-semibold text-primary">
            AI
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-semibold tracking-tight text-foreground">
              Weekly Digest
            </span>
            <span className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Signal, not noise
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/"
          hash="subscribe"
          className="inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Subscribe
        </Link>
      </div>
    </header>
  );
}
