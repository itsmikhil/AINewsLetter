import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import articleRoute from "./routes/articleRoute.js";
import newsletterRouter from "./routes/newletterRoute.js";
import subscriberRouter from "./routes/subscriberRoute.js";
import statsRouter from "./routes/statsRoute.js";
import { sendLatestNewsletter } from "./controllers/newsletterController.js";
import { startNewsletterCron } from "./schedulers/newsletterCron.js";
import { startArticleCron } from "./schedulers/articleCron.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

await connectDB();

// Cron jobs now handled by cronjob.org
// cronjob.org automatically calls our protected end points to run pipeline
// await startNewsletterCron(); api/newsletter/run
// await startArticleCron(); api/article/fetch

app.get("/", (req, res) => {
  res.send(`Server is listening at ${PORT}`);
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    service: "WeeklyBrief API",
    timestamp: new Date().toISOString(),
    uptime: Math.floor(process.uptime()),
    environment: process.env.NODE_ENV || "development",
  });
});

app.use("/api/article", articleRoute);
app.use("/api/newsletter", newsletterRouter);
app.use("/api/subscriber", subscriberRouter);
app.use("/api/stats", statsRouter);

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
