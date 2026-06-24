import { Link } from "@tanstack/react-router";
import type { Article } from "@/services/articleService";
import { ArrowUpRight } from "lucide-react";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      to="/articles/$id"
      params={{ id: article._id }}
      className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:bg-card/80"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          {article.source}
        </span>
        <time className="text-xs text-muted-foreground" dateTime={article.publishedAt}>
          {formatDate(article.publishedAt)}
        </time>
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary">
        {article.title}
      </h3>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
        {article.description}
      </p>
      <div className="mt-6 flex items-center gap-1.5 text-xs font-medium text-primary">
        Read briefing
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}

export function ArticleCardSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex justify-between">
        <div className="h-5 w-16 animate-pulse rounded-full bg-muted" />
        <div className="h-4 w-20 animate-pulse rounded bg-muted" />
      </div>
      <div className="mt-5 h-6 w-full animate-pulse rounded bg-muted" />
      <div className="mt-2 h-6 w-4/5 animate-pulse rounded bg-muted" />
      <div className="mt-4 space-y-2">
        <div className="h-3 w-full animate-pulse rounded bg-muted" />
        <div className="h-3 w-5/6 animate-pulse rounded bg-muted" />
        <div className="h-3 w-3/4 animate-pulse rounded bg-muted" />
      </div>
    </div>
  );
}

export function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
