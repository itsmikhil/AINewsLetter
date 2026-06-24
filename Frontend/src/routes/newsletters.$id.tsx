import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getNewsletter } from "@/services/newsletterService";
import { formatDate } from "@/components/site/ArticleCard";
import { SubscribeBlock } from "@/components/site/SubscribeBlock";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/newsletters/$id")({
  head: () => ({
    meta: [
      { title: "Issue — AI Weekly Digest" },
      { name: "description", content: "Read this weekly issue of AI Weekly Digest." },
    ],
  }),
  component: NewsletterDetailPage,
});

function NewsletterDetailPage() {
  const { id } = Route.useParams();
  const { data: nl, isLoading } = useQuery({
    queryKey: ["newsletter", id],
    queryFn: () => getNewsletter(id),
  });

  if (isLoading) {
    return (
      <div className="container-prose py-24">
        <div className="h-4 w-40 animate-pulse rounded bg-muted" />
        <div className="mt-6 h-12 w-3/4 animate-pulse rounded bg-muted" />
        <div className="mt-10 space-y-3">
          <div className="h-4 w-full animate-pulse rounded bg-muted" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
        </div>
      </div>
    );
  }

  if (!nl) {
    return (
      <div className="container-prose py-24 text-center">
        <h1 className="font-display text-2xl">Issue not found</h1>
        <Link
          to="/newsletters"
          className="mt-4 inline-flex items-center gap-2 text-sm text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Back to archive
        </Link>
      </div>
    );
  }

  return (
    <>
      <article className="border-b border-border py-16 md:py-20">
        <div className="container-prose max-w-3xl">
          <Link
            to="/newsletters"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Newsletter archive
          </Link>

          <p className="mt-8 text-xs font-medium uppercase tracking-[0.22em] text-primary">
            Issue · {formatDate(nl.weekStart)} → {formatDate(nl.weekEnd)}
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            {nl.title}
          </h1>

          <div className="mt-8 rounded-xl border border-border bg-card p-6 md:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              The week in one paragraph
            </p>
            <p className="mt-3 text-lg leading-relaxed text-foreground">
              {nl.weeklySummary}
            </p>
          </div>

          <div className="mt-14 space-y-12">
            {nl.selectedArticles.map((item, idx) => (
              <section key={item.articleId} className="border-t border-border pt-10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(idx + 1).padStart(2, "0")} / {String(nl.selectedArticles.length).padStart(2, "0")}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-foreground">
                    {item.source}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
                  {item.title}
                </h2>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      Summary
                    </p>
                    <p className="mt-2 leading-relaxed text-foreground/90">
                      {item.aiSummary}
                    </p>
                  </div>
                  <div className="rounded-lg border border-primary/25 bg-primary/5 p-5">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                      Why it matters
                    </p>
                    <p className="mt-2 leading-relaxed text-foreground/95">
                      {item.whyItMatters}
                    </p>
                  </div>
                </div>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40"
                >
                  Read full article
                  <ExternalLink className="h-4 w-4" />
                </a>
              </section>
            ))}
          </div>
        </div>
      </article>

      <SubscribeBlock compact />
    </>
  );
}
