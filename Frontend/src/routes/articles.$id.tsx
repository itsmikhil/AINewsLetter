import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getArticle, getArticles } from "@/services/articleService";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { ArticleCard, formatDate } from "@/components/site/ArticleCard";
import { SubscribeBlock } from "@/components/site/SubscribeBlock";

export const Route = createFileRoute("/articles/$id")({
  head: () => ({
    meta: [
      { title: "Article — AI Weekly Digest" },
      { name: "description", content: "Read this AI article briefing." },
    ],
  }),
  component: ArticleDetailPage,
});

function ArticleDetailPage() {
  const { id } = Route.useParams();
  const { data: article, isLoading } = useQuery({
    queryKey: ["article", id],
    queryFn: () => getArticle(id),
  });
  const { data: all } = useQuery({ queryKey: ["articles"], queryFn: getArticles });

  if (isLoading) {
    return (
      <div className="container-prose py-24">
        <div className="h-4 w-32 animate-pulse rounded bg-muted" />
        <div className="mt-6 h-10 w-3/4 animate-pulse rounded bg-muted" />
        <div className="mt-3 h-10 w-1/2 animate-pulse rounded bg-muted" />
        <div className="mt-10 space-y-3">
          <div className="h-4 w-full animate-pulse rounded bg-muted" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
          <div className="h-4 w-4/6 animate-pulse rounded bg-muted" />
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="container-prose py-24 text-center">
        <h1 className="font-display text-2xl">Article not found</h1>
        <Link to="/articles" className="mt-4 inline-flex items-center gap-2 text-sm text-primary">
          <ArrowLeft className="h-4 w-4" /> Back to articles
        </Link>
      </div>
    );
  }

  const related = all?.filter((a) => a._id !== article._id).slice(0, 3) ?? [];

  return (
    <>
      <article className="border-b border-border py-16 md:py-20">
        <div className="container-prose max-w-3xl">
          <Link
            to="/articles"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-wider text-foreground">
              {article.source}
            </span>
            <span className="text-muted-foreground">·</span>
            <time className="text-muted-foreground" dateTime={article.publishedAt}>
              {formatDate(article.publishedAt)}
            </time>
            <span className="text-muted-foreground">·</span>
            <span className="font-mono text-xs text-muted-foreground">
              {article.categories.join(" · ")}
            </span>
          </div>

          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            {article.title}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {article.description}
          </p>

          <div className="mt-10 space-y-5 text-[17px] leading-[1.8] text-foreground/90">
            <p>{article.description}</p>
            <p className="text-muted-foreground">
              This briefing is condensed from the original source. For complete technical detail,
              methodology, or context, follow the link below.
            </p>
          </div>

          <a
            href={article.url}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Read original at {article.source}
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-16">
          <div className="container-prose">
            <h2 className="mb-8 font-display text-2xl font-semibold tracking-tight">
              Related briefings
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {related.map((a) => (
                <ArticleCard key={a._id} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      <SubscribeBlock compact />
    </>
  );
}
