import api from "./api";

export type Article = {
  _id: string;
  title: string;
  description: string;
  source: string;
  url: string;
  publishedAt: string;
};

export const getArticles = async (): Promise<Article[]> => {
  const response = await api.get("/article/all");

  return response.data.articles;
};

export const getArticle = async (
  id: string
): Promise<Article> => {
  const response = await api.get(`/article/get/${id}`);

  return response.data.article;
};