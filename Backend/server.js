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

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

await connectDB();
await startNewsletterCron();
await startArticleCron();
app.get("/", (req, res) => {
  res.send(`Server is listening at ${PORT}`);
});

app.use("/api/article", articleRoute);
app.use("/api/newsletter", newsletterRouter);
app.use("/api/subscriber", subscriberRouter);
app.use("/api/stats", statsRouter);

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
