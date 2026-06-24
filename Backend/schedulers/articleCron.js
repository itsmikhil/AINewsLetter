import cron from "node-cron";
import { fetchAndStoreAllArticles } from "../services/rssService.js";

export const startArticleCron = () => {
  cron.schedule("0 23 * * *", async () => {
    try {
      console.log("Starting article collection...");

      await fetchAndStoreAllArticles();

      console.log("Article collection completed.");
    } catch (error) {
      console.error("Article collection failed:");

      console.error(error);
    }
  });
};
