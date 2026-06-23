// these are going to be our sources from where we will get news articles
// storing them sepertaly is better because then tomorrow we can add or remove a source
// without impacting the rssService func in service folder

export const RSS_FEEDS = [
  {
    source: "OpenAI",
    url: "https://openai.com/news/rss.xml",
  },
  {
    source: "Anthropic",
    url: "https://raw.githubusercontent.com/taobojlen/anthropic-rss-feed/main/anthropic_news_rss.xml",
  },
  {
    source: "Hugging Face",
    url: "https://huggingface.co/blog/feed.xml",
  },
  {
    source: "VentureBeat AI",
    url: "https://venturebeat.com/ai/feed/",
  },
];