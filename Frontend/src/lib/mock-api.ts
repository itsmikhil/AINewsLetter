export interface Article {
  id: string;
  title: string;
  source: string;
  publishedAt: string;
  description: string;
  body: string;
  url: string;
  category: string;
}

export interface NewsletterItem {
  articleId: string;
  source: string;
  title: string;
  summary: string;
  whyItMatters: string;
  url: string;
}

export interface Newsletter {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  summary: string;
  items: NewsletterItem[];
}

export interface PlatformStats {
  totalArticles: number;
  weeklyDigests: number;
  activeSubscribers: number;
}

const delay = (ms = 350) => new Promise((r) => setTimeout(r, ms));

const ARTICLES: Article[] = [
  {
    id: "a1",
    title: "OpenAI Introduces GPT-5 Reasoning Mode for Long-Horizon Tasks",
    source: "OpenAI",
    publishedAt: "2026-06-22",
    description:
      "A new reasoning mode keeps coherent context across multi-hour agent workflows, with measurable gains on planning benchmarks.",
    body: "OpenAI announced a reasoning mode that allows GPT-5 to sustain coherent context across long-running agent workflows. Internal benchmarks show double-digit improvements on planning and tool-use tasks. The update is rolling out to API customers this week.",
    url: "https://openai.com",
    category: "Models",
  },
  {
    id: "a2",
    title: "Anthropic Releases Claude Constitution v3",
    source: "Anthropic",
    publishedAt: "2026-06-21",
    description:
      "The third revision tightens guidance around agentic actions, autonomy, and irreversible decisions.",
    body: "Anthropic's revised constitution introduces explicit guardrails for agents performing irreversible actions and clarifies expected behavior in ambiguous safety contexts.",
    url: "https://anthropic.com",
    category: "Safety",
  },
  {
    id: "a3",
    title: "Hugging Face Crosses 2 Million Public Models",
    source: "Hugging Face",
    publishedAt: "2026-06-20",
    description:
      "The open model hub passes a milestone as fine-tuned variants outpace base model uploads 9 to 1.",
    body: "Hugging Face reports rapid growth in community fine-tunes, with specialized variants of Llama and Mistral families leading downloads.",
    url: "https://huggingface.co",
    category: "Open Source",
  },
  {
    id: "a4",
    title: "Mistral Raises $1.2B at $14B Valuation",
    source: "VentureBeat",
    publishedAt: "2026-06-19",
    description:
      "The French AI lab triples its valuation in nine months as European demand for sovereign AI accelerates.",
    body: "Mistral closed a $1.2B Series D led by a consortium of European sovereign funds. The round positions the company as Europe's flagship open-weights lab.",
    url: "https://venturebeat.com",
    category: "Funding",
  },
  {
    id: "a5",
    title: "Google DeepMind Publishes Gemini 3 Technical Report",
    source: "DeepMind",
    publishedAt: "2026-06-18",
    description:
      "Detailed evaluations show parity with frontier closed models on math and code, ahead on multimodal grounding.",
    body: "The 86-page report details a refined mixture-of-experts architecture and new evaluation protocols for grounded multimodal reasoning.",
    url: "https://deepmind.google",
    category: "Research",
  },
  {
    id: "a6",
    title: "Meta Open-Sources Llama 4 Scout for Edge Devices",
    source: "Meta AI",
    publishedAt: "2026-06-17",
    description:
      "A 3B-parameter model targets on-device inference with strong tool use and long context.",
    body: "Llama 4 Scout is optimized for mobile and embedded deployment, with quantized variants running on consumer phones at interactive latency.",
    url: "https://ai.meta.com",
    category: "Open Source",
  },
  {
    id: "a7",
    title: "EU AI Act Enforcement Begins for General-Purpose Models",
    source: "Reuters",
    publishedAt: "2026-06-16",
    description:
      "Providers must now publish training-data summaries and complete systemic-risk assessments.",
    body: "The European Commission confirmed enforcement timelines for general-purpose AI obligations, with first audits expected this quarter.",
    url: "https://reuters.com",
    category: "Policy",
  },
  {
    id: "a8",
    title: "NVIDIA Announces Rubin GPU Architecture",
    source: "NVIDIA",
    publishedAt: "2026-06-15",
    description:
      "Next-gen accelerator promises 3.5x training throughput over Blackwell with HBM4 memory.",
    body: "Rubin debuts at a developer keynote and will ship in volume in early 2027. Major hyperscalers have already placed orders.",
    url: "https://nvidia.com",
    category: "Hardware",
  },
];

const NEWSLETTERS: Newsletter[] = [
  {
    id: "n1",
    title: "AI Weekly Digest | June 16 – June 23, 2026",
    startDate: "2026-06-16",
    endDate: "2026-06-23",
    summary:
      "Frontier labs pushed reasoning further this week. OpenAI's new long-horizon mode and DeepMind's Gemini 3 report dominated, while Mistral's mega-round signals a real European alternative.",
    items: [
      {
        articleId: "a1",
        source: "OpenAI",
        title: "OpenAI Introduces GPT-5 Reasoning Mode",
        summary:
          "A dedicated mode that holds context across multi-hour agentic workflows, with measurable gains on planning benchmarks.",
        whyItMatters:
          "Long-horizon coherence is the missing piece for production agents. This is the clearest signal yet that reliable multi-step automation is approaching.",
        url: "https://openai.com",
      },
      {
        articleId: "a4",
        source: "VentureBeat",
        title: "Mistral Raises $1.2B at $14B Valuation",
        summary:
          "A European-led Series D triples Mistral's valuation amid surging demand for sovereign, open-weights AI.",
        whyItMatters:
          "Capital is consolidating behind a credible European alternative to US labs — with implications for procurement, policy, and the open ecosystem.",
        url: "https://venturebeat.com",
      },
      {
        articleId: "a5",
        source: "DeepMind",
        title: "Gemini 3 Technical Report Published",
        summary:
          "Detailed evaluations and a refined MoE architecture, with new protocols for grounded multimodal reasoning.",
        whyItMatters:
          "DeepMind is reasserting research leadership with reproducible evaluations — a useful counterweight to opaque release notes.",
        url: "https://deepmind.google",
      },
    ],
  },
  {
    id: "n2",
    title: "AI Weekly Digest | June 9 – June 15, 2026",
    startDate: "2026-06-09",
    endDate: "2026-06-15",
    summary:
      "Open source and policy took center stage. Meta's edge-ready Llama 4 Scout and the EU AI Act enforcement kickoff defined the conversation.",
    items: [
      {
        articleId: "a6",
        source: "Meta AI",
        title: "Llama 4 Scout Targets Edge Devices",
        summary:
          "A 3B-parameter model engineered for on-device inference with strong tool use and long context.",
        whyItMatters:
          "Capable on-device models change the economics of AI features. Expect a wave of latency-sensitive products built without cloud round-trips.",
        url: "https://ai.meta.com",
      },
      {
        articleId: "a7",
        source: "Reuters",
        title: "EU AI Act Enforcement Begins",
        summary:
          "General-purpose model providers must now publish training-data summaries and complete systemic-risk assessments.",
        whyItMatters:
          "This is the first enforceable transparency regime for frontier models. The compliance template that emerges will likely shape global norms.",
        url: "https://reuters.com",
      },
      {
        articleId: "a8",
        source: "NVIDIA",
        title: "Rubin GPU Architecture Announced",
        summary:
          "Next-gen accelerator promises 3.5x training throughput over Blackwell with HBM4 memory.",
        whyItMatters:
          "Compute remains the binding constraint. Rubin's roadmap dictates the pace of frontier training runs through 2027.",
        url: "https://nvidia.com",
      },
    ],
  },
  {
    id: "n3",
    title: "AI Weekly Digest | June 2 – June 8, 2026",
    startDate: "2026-06-02",
    endDate: "2026-06-08",
    summary:
      "A quieter week on releases, but two foundational shifts: Anthropic's constitution update and Hugging Face's open-model milestone.",
    items: [
      {
        articleId: "a2",
        source: "Anthropic",
        title: "Claude Constitution v3",
        summary:
          "Tightens guidance for agentic actions and irreversible decisions, with clearer escalation behavior.",
        whyItMatters:
          "As agents take real actions, the values they encode matter operationally — not just philosophically. v3 is a more deployment-ready document.",
        url: "https://anthropic.com",
      },
      {
        articleId: "a3",
        source: "Hugging Face",
        title: "2 Million Public Models",
        summary:
          "Community fine-tunes now outpace base uploads 9 to 1, led by Llama and Mistral variants.",
        whyItMatters:
          "The center of gravity for applied AI is shifting toward specialized fine-tunes rather than monolithic frontier models.",
        url: "https://huggingface.co",
      },
    ],
  },
];

const STATS: PlatformStats = {
  totalArticles: 4827,
  weeklyDigests: 96,
  activeSubscribers: 18342,
};

export async function getArticles(): Promise<Article[]> {
  await delay();
  return ARTICLES;
}
export async function getArticle(id: string): Promise<Article | undefined> {
  await delay();
  return ARTICLES.find((a) => a.id === id);
}
export async function getNewsletters(): Promise<Newsletter[]> {
  await delay();
  return NEWSLETTERS;
}
export async function getNewsletter(id: string): Promise<Newsletter | undefined> {
  await delay();
  return NEWSLETTERS.find((n) => n.id === id);
}
export async function getStats(): Promise<PlatformStats> {
  await delay(250);
  return STATS;
}
export async function subscribeEmail(email: string): Promise<{ ok: true }> {
  await delay(600);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Please enter a valid email address.");
  }
  return { ok: true };
}
