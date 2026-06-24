import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getArticles } from "@/services/articleService";
import { getNewsletters } from "@/services/newsletterService";
import { getStats } from "@/services/statsService";
import { SubscribeForm } from "@/components/site/SubscribeForm";
import { SubscribeBlock } from "@/components/site/SubscribeBlock";
import { Section } from "@/components/site/Section";
import { ArticleCard, ArticleCardSkeleton } from "@/components/site/ArticleCard";
import { NewsletterCard, NewsletterCardSkeleton } from "@/components/site/NewsletterCard";
import { ArrowRight, BookOpenText, Filter, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Weekly Digest — AI Moves Fast. We Help You Keep Up." },
      {
        name: "description",
        content:
          "Every week, AI Weekly Digest analyzes hundreds of AI updates and delivers the stories that matter most — concisely, in your inbox.",
      },
      { property: "og:title", content: "AI Weekly Digest" },
      {
        property: "og:description",
        content: "A weekly briefing on artificial intelligence. Signal, not noise.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <AboutSection />
      <LatestArticles />
      <LatestNewsletters />
      <SubscribeBlock id="subscribe" />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] hairline-grid"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
      />
      <div className="container-prose relative pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Issue 96 · Published Tuesday, June 23, 2026
          </span>
          <h1 className="mt-7 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight md:text-6xl">
            AI Moves Fast.
            <br />
            <span className="text-muted-foreground">We Help You </span>
            <span className="bg-gradient-to-br from-primary to-foreground bg-clip-text text-transparent">
              Keep Up.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Every week, AI Weekly Digest analyzes hundreds of AI updates, selects the stories that
            matter most, and delivers concise insights directly to your inbox.
          </p>

          <div className="mt-9">
            <SubscribeForm size="lg" />
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              to="/newsletters"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Explore previous issues
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  const items = [
    { src: "OpenAI", tag: "Models", title: "GPT-5 long-horizon reasoning", picked: true },
    { src: "Anthropic", tag: "Safety", title: "Claude Constitution v3", picked: true },
    { src: "TechCrunch", tag: "Rumor", title: "Speculation about Apple LLM", picked: false },
    { src: "DeepMind", tag: "Research", title: "Gemini 3 technical report", picked: true },
    { src: "Twitter", tag: "Hot take", title: "Why X kills Y, a thread", picked: false },
    { src: "VentureBeat", tag: "Funding", title: "Mistral raises $1.2B", picked: true },
    { src: "Newsletter", tag: "Opinion", title: "AI bubble 2.0?", picked: false },
    { src: "Meta", tag: "Open", title: "Llama 4 Scout for edge", picked: true },
  ];

  return (
    <div className="relative mx-auto mt-16 max-w-5xl">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
        {/* Left: noise */}
        <div className="rounded-xl border border-border bg-card/60 p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              This week's signal
            </span>
            <span className="font-mono text-[10px] text-muted-foreground">812 updates</span>
          </div>
          <ul className="space-y-2">
            {items.map((i, idx) => (
              <li
                key={idx}
                className={`flex items-center gap-2.5 rounded-md border px-3 py-2 text-xs transition-opacity ${
                  i.picked
                    ? "border-border bg-background"
                    : "border-border/60 bg-background/40 opacity-50"
                }`}
              >
                <span className="font-mono text-[10px] text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="truncate text-foreground/80">{i.title}</span>
                <span className="ml-auto rounded-sm bg-secondary px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-muted-foreground">
                  {i.src}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Center: filter */}
        <div className="hidden flex-col items-center justify-center px-6 md:flex">
          <div className="flex h-full flex-col items-center justify-center">
            <div className="h-16 w-px bg-gradient-to-b from-transparent to-border" />
            <div className="grid h-14 w-14 place-items-center rounded-full border border-primary/40 bg-card text-primary">
              <Filter className="h-5 w-5" />
            </div>
            <div className="mt-3 text-[10px] font-medium uppercase tracking-[0.22em] text-primary">
              Curated
            </div>
            <div className="mt-3 h-16 w-px bg-gradient-to-t from-transparent to-border" />
          </div>
        </div>

        {/* Right: digest */}
        <div className="rounded-xl border border-primary/30 bg-gradient-to-b from-card to-card/60 p-5 shadow-[0_0_0_1px_rgba(59,130,246,0.08),0_20px_60px_-20px_rgba(59,130,246,0.3)]">
          <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
            <div>
              <div className="font-display text-sm font-semibold tracking-tight">
                AI Weekly Digest
              </div>
              <div className="font-mono text-[10px] text-muted-foreground">
                Issue 96 · 5 min read
              </div>
            </div>
            <Sparkles className="h-4 w-4 text-primary" />
          </div>
          <ul className="space-y-3">
            {items
              .filter((i) => i.picked)
              .slice(0, 4)
              .map((i, idx) => (
                <li key={idx} className="text-xs">
                  <div className="flex items-center gap-2">
                    <span className="rounded-sm bg-primary/15 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider text-primary">
                      {i.src}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">{i.tag}</span>
                  </div>
                  <div className="mt-1.5 font-display text-[13px] font-medium leading-snug text-foreground">
                    {i.title}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-muted-foreground">
        From 812 weekly updates → 6 stories that matter
      </div>
    </div>
  );
}

function StatsSection() {
  const { data, isLoading } = useQuery({ queryKey: ["stats"], queryFn: getStats });

  const items = [
    { label: "Articles curated", value: data?.totalArticles, suffix: "+" },
    { label: "Weekly digests published", value: data?.totalNewsletters, suffix: "" },
    { label: "Active subscribers", value: data?.totalSubscribers, suffix: "+" },
  ];

  return (
    <section id="stats" className="border-b border-border py-20">
      <div className="container-prose">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
              By the numbers
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
              A research operation, in your inbox.
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm text-muted-foreground md:block">
            We've been reading, filtering and explaining AI since 2024.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
          {items.map((s, i) => (
            <div key={i} className="bg-card p-8 md:p-10">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")} / 03
              </div>
              <div className="mt-4 font-display text-5xl font-semibold tracking-tight text-foreground md:text-6xl">
                {isLoading || s.value == null ? (
                  <span className="inline-block h-12 w-32 animate-pulse rounded bg-muted" />
                ) : (
                  <>
                    {s.value.toLocaleString()}
                    <span className="text-primary">{s.suffix}</span>
                  </>
                )}
              </div>
              <div className="mt-3 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="border-b border-border py-24">
      <div className="container-prose grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
            Our approach
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            AI moves faster than most people can follow.
          </h2>
          <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
            <BookOpenText className="h-4 w-4 text-primary" />
            <span>Written by humans. Curated with AI.</span>
          </div>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:col-span-7 md:text-[17px]">
          <p>
            Every week brings new models, research papers, product launches, funding announcements,
            and industry developments. Keeping track is a full-time job.
          </p>
          <p className="text-foreground">
            AI Weekly Digest filters through the noise and delivers only the developments that
            genuinely matter.
          </p>
          <ul className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
            {["No hype.", "No clickbait.", "No endless scrolling."].map((t) => (
              <li
                key={t}
                className="rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
          <p className="pt-2">
            Just the most important AI stories, explained clearly — with context on why each one
            matters.
          </p>
        </div>
      </div>
    </section>
  );
}

function LatestArticles() {
  const { data, isLoading } = useQuery({ queryKey: ["articles"], queryFn: getArticles });
  const items = data?.slice(0, 6);

  return (
    <Section
      eyebrow="Latest articles"
      title="From the field this week"
      description="A live stream of the source material we read so you don't have to."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => <ArticleCardSkeleton key={i} />)
          : items?.map((a) => <ArticleCard key={a._id} article={a} />)}
      </div>
      <div className="mt-10 text-center">
        <Link
          to="/articles"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40"
        >
          View all articles
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}

function LatestNewsletters() {
  const { data, isLoading } = useQuery({
    queryKey: ["newsletters"],
    queryFn: getNewsletters,
  });
  const items = data?.slice(0, 2);

  return (
    <Section
      eyebrow="Recent issues"
      title="Read the latest digests"
      description="Two recent issues — each a focused 5-minute read."
    >
      <div className="space-y-4">
        {isLoading
          ? Array.from({ length: 2 }).map((_, i) => <NewsletterCardSkeleton key={i} />)
          : items?.map((n) => <NewsletterCard key={n._id} newsletter={n} />)}
      </div>
      <div className="mt-10 text-center">
        <Link
          to="/newsletters"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40"
        >
          Browse newsletter archive
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
