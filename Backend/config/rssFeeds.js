// ye saare woh sources hain jahan se hum news articles fetch karenge
// inhe alag rakhna better hai kyunki kal koi source add/remove karna ho
// toh rssService.js ko touch nahi karna padega

export const RSS_FEEDS = [
  {
    source: "OpenAI",
    url: "https://openai.com/news/rss.xml",
    // official feed hai, stable rehega
  },
  {
    source: "Anthropic",
    url: "https://raw.githubusercontent.com/Olshansk/rss-feeds/main/feeds/feed_anthropic_news.xml",
    // koi official feed nahi hai; GitHub Actions se hourly scrape hota hai
  },
  {
    source: "DeepMind",
    url: "https://deepmind.google/blog/rss.xml",
    // Google DeepMind ka official blog feed
  },
  {
    source: "Mistral",
    url: "https://raw.githubusercontent.com/Olshansk/rss-feeds/main/feeds/feed_mistral.xml",
    // koi official feed nahi hai Mistral ka; scraped feed use kar rahe hain
  },
  {
    source: "VentureBeat AI",
    url: "https://venturebeat.com/category/ai/feed/",
    // sirf AI category ka feed, full VentureBeat nahi
  },
  {
    source: "TechCrunch AI",
    url: "https://techcrunch.com/category/artificial-intelligence/feed/",
    // TC ka dedicated AI section
  },
];