import api from "./api";

export type NewsletterArticle = {
  articleId: string;

  title: string;

  source: string;

  url: string;

  aiSummary: string;

  whyItMatters: string;
};

export type Newsletter = {
  _id: string;

  title: string;

  weeklySummary: string;

  selectedArticles: NewsletterArticle[];

  weekStart: string;

  weekEnd: string;

  generatedAt: string;
};

export const getNewsletters =
  async (): Promise<Newsletter[]> => {

    const response =
      await api.get("/newsletter");

    return response.data.newsletters;
  };

export const getNewsletter =
  async (
    id: string
  ): Promise<Newsletter> => {

    const response =
      await api.get(`/newsletter/${id}`);

    return response.data.newsletter;
  };

export const getLatestNewsletter =
  async (): Promise<Newsletter> => {

    const response =
      await api.get("/newsletter/latest");

    return response.data.newsletter;
  };