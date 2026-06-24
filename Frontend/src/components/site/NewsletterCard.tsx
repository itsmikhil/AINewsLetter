import { Link } from "@tanstack/react-router";
import type { Newsletter } from "@/lib/mock-api";
import { formatDate } from "./ArticleCard";
import { ArrowRight } from "lucide-react";

export function NewsletterCard({ newsletter }: { newsletter: Newsletter }) {
  return (
    <Link
      to="/newsletters/$id"
      params={{ id: newsletter.id }}
      className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-7 transition-all hover:border-primary/40 md:flex-row md:items-start md:gap-8"
    >
      <div className="md:w-56 md:shrink-0">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
          Issue
        </p>
        <p className="mt-2 font-mono text-sm text-muted-foreground">
          {formatDate(newsletter.startDate)} → {formatDate(newsletter.endDate)}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          {newsletter.items.length} stories
        </p>
      </div>
      <div className="flex-1">
        <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight transition-colors group-hover:text-primary">
          {newsletter.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          {newsletter.summary}
        </p>
        <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
          Read this issue
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}

export function NewsletterCardSkeleton() {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-7 md:flex-row md:gap-8">
      <div className="md:w-56">
        <div className="h-3 w-12 animate-pulse rounded bg-muted" />
        <div className="mt-3 h-4 w-40 animate-pulse rounded bg-muted" />
      </div>
      <div className="flex-1 space-y-3">
        <div className="h-7 w-3/4 animate-pulse rounded bg-muted" />
        <div className="h-4 w-full animate-pulse rounded bg-muted" />
        <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
      </div>
    </div>
  );
}
