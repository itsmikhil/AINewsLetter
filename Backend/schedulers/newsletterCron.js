import cron from "node-cron";

import {
  generateWeeklyNewsletter,
  deliverLatestNewsletter,
} from "../services/newsletterService.js";

export const startNewsletterCron = () => {
  cron.schedule("0 8 * * 0", async () => {
    try {
      console.log("Starting weekly newsletter pipeline...");

      await generateWeeklyNewsletter();

      await deliverLatestNewsletter();

      console.log("Newsletter pipeline completed.");
    } catch (error) {
      console.error("Newsletter pipeline failed:");

      console.error(error);
    }
  });
};
