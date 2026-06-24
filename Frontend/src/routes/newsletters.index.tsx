import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getNewsletters } from "@/services/newsletterService";
import { NewsletterCard, NewsletterCardSkeleton } from "@/components/site/NewsletterCard";
import { SubscribeBlock } from "@/components/site/SubscribeBlock";

export const Route = createFileRoute("/newsletters/")({
  head: () => ({
    meta: [
      { title: "Newsletter Archive — AI Weekly Digest" },
      {
        name: "description",
        content:
          "Every issue of AI Weekly Digest. Browse past editions covering the most important AI developments week by week.",
      },
      { property: "og:title", content: "Newsletter Archive — AI Weekly Digest" },
      {
        property: "og:description",
        content: "Browse every past edition of AI Weekly Digest.",
      },
    ],
  }),
  component: NewslettersPage,
});

function NewslettersPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["newsletters"],
    queryFn: getNewsletters,
  });

  return (
    <>
      <section className="border-b border-border py-16 md:py-20">
        <div className="container-prose">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
            Archive
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Every issue, since the beginning.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            A continuous record of what mattered in AI, week by week.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-prose space-y-4">
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => <NewsletterCardSkeleton key={i} />)
            : data?.map((n) => <NewsletterCard key={n._id} newsletter={n} />)}
        </div>
      </section>

      <SubscribeBlock compact />
    </>
  );
}
