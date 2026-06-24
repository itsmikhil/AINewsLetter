import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

export const Route = createFileRoute("/verified")({
  head: () => ({
    meta: [
      { title: "Subscription Confirmed — AI Weekly Digest" },
      {
        name: "description",
        content:
          "Your subscription to AI Weekly Digest is confirmed. Future editions will arrive in your inbox each week.",
      },
    ],
  }),
  component: VerifiedPage,
});

function VerifiedPage() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] hairline-grid"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl"
      />
      <div className="container-prose relative">
        <div className="mx-auto max-w-xl text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="relative mx-auto grid h-24 w-24 place-items-center">
            <span className="absolute inset-0 rounded-full border border-primary/30" />
            <span className="absolute inset-2 rounded-full border border-primary/20" />
            <span className="absolute inset-4 animate-ping rounded-full bg-primary/15" />
            <span className="relative grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_0_40px_-5px_rgba(59,130,246,0.6)]">
              <Check
                className="h-8 w-8 animate-in zoom-in-50 duration-500"
                strokeWidth={3}
              />
            </span>
          </div>

          <p className="mt-8 text-xs font-medium uppercase tracking-[0.22em] text-primary">
            You're in
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Subscription Confirmed
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            You're now subscribed to AI Weekly Digest. Future editions will be
            delivered directly to your inbox.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Return to homepage
            </Link>
            <Link
              to="/newsletters"
              className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-card px-6 text-sm font-medium text-foreground transition-colors hover:border-primary/40"
            >
              Read past issues
            </Link>
          </div>

          <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Next issue ships Tuesday · 06:00 ET
          </p>
        </div>
      </div>
    </section>
  );
}
