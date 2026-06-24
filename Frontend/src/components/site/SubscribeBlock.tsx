import { SubscribeForm } from "./SubscribeForm";

interface Props {
  id?: string;
  compact?: boolean;
}

export function SubscribeBlock({ id, compact = false }: Props) {
  return (
    <section id={id} className={compact ? "py-16" : "py-24"}>
      <div className="container-prose">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-6 py-14 md:px-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.06] hairline-grid"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
              The briefing
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Join professionals reading AI Weekly Digest.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              One concise email every Sunday. The stories that actually moved
              the field — explained clearly, with context.
            </p>
            <div className="mt-8">
              <SubscribeForm size="lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
