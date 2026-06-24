import api from "./api";

export type Stats = {
  totalArticles: number;

  totalNewsletters: number;

  totalSubscribers: number;
};

export const getStats =
  async (): Promise<Stats> => {

    const response =
      await api.get("/stats");

    return {
      totalArticles:
        response.data.totalArticles,

      totalNewsletters:
        response.data.totalNewsletters,

      totalSubscribers:
        response.data.totalSubscribers,
    };
  };