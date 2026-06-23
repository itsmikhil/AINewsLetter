export const articleSelectionPrompt = (articles)=>{
    return `
    You are the editor of an AI industry newsletter.

    You will receive a list of AI news articles from the past 7 days.

    Select the 5 most important stories based on:

    - Industry impact
    - Major model releases
    - Significant product launches
    - Research breakthroughs
    - Security developments
    - Adoption by large organizations

    Return ONLY valid JSON.

    {
    "selectedIds":[]
    }

    Do not include explanations.
    Do not include markdown.
    Do not include any text outside the JSON object.
    LastWeekArticles:${articles}
    `
}

export const newsLetterGenerationPrompt=(articles)=>{
    return `
    You are the editor of a premium AI newsletter.

    You will receive 5 selected AI news articles from the past week.

    For each article:

    1. Generate a concise summary (2-3 sentences).
    2. Explain why the news matters to the AI industry (1-2 sentences).

    Also generate a weekly overview summarizing the major themes and trends across all selected articles.

    Guidelines:

    - Focus on AI industry impact.
    - Focus on model releases, research breakthroughs, enterprise adoption, security developments, infrastructure, and open-source ecosystem developments.
    - Be objective and factual.
    - Do not invent facts.
    - If an article has no description, infer significance from the title and source only.
    - Keep summaries concise and newsletter-friendly.

    Return ONLY valid JSON.

    Format:

    {
    "weeklySummary": "string",
    "articles": [
        {
        "articleId": "string",
        "aiSummary": "string",
        "whyItMatters": "string"
        }
    ]
    }

    Rules:

    - Return exactly 5 articles.
    - Preserve the articleId exactly as provided.
    - Do not return markdown.
    - Do not return explanations.
    - Do not wrap the JSON in backticks.
    - Do not include any text before or after the JSON.
    selecedArticles:${articles}
    `;
}