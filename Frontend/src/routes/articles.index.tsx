import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getArticles } from "@/services/articleService";
import { ArticleCard, ArticleCardSkeleton } from "@/components/site/ArticleCard";
import { SubscribeBlock } from "@/components/site/SubscribeBlock";

export const Route = createFileRoute("/articles/")({
  head: () => ({
    meta: [
      { title: "Articles — AI Weekly Digest" },
      {
        name: "description",
        content:
          "The latest AI articles we're tracking — from OpenAI, Anthropic, Hugging Face, DeepMind, Meta, and the broader AI industry.",
      },
      { property: "og:title", content: "Articles — AI Weekly Digest" },
      {
        property: "og:description",
        content: "Our live feed of AI source material — filtered weekly.",
      },
    ],
  }),
  component: ArticlesPage,
});

function ArticlesPage() {
  const { data, isLoading } = useQuery({ queryKey: ["articles"], queryFn: getArticles });

  return (
    <>
      <section className="border-b border-border py-16 md:py-20">
        <div className="container-prose">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
            The feed
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Articles we're tracking this week.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Hundreds of updates pass through our pipeline weekly. These are the
            ones worth your attention.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-prose">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {isLoading
              ? Array.from({ length: 9 }).map((_, i) => <ArticleCardSkeleton key={i} />)
              : data?.map((a) => <ArticleCard key={a._id} article={a} />)}
          </div>
        </div>
      </section>

      <SubscribeBlock compact />
    </>
  );
}
