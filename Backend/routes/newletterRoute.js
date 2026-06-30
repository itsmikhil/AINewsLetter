import express from "express";

import {
  getAllNewsletters,
  getLatestNewsletter,
  getNewsletterById,
  runNewsletterPipeline,
  sendLatestNewsletter,
} from "../controllers/newsletterController.js";
import verifyCronRequest from "../middleware/cronMiddleware.js";

const newsletterRouter = express.Router();

newsletterRouter.get("/", getAllNewsletters);

newsletterRouter.get("/latest", getLatestNewsletter);

newsletterRouter.get("/:id", getNewsletterById);

newsletterRouter.post("/send", sendLatestNewsletter);

router.post("/run", verifyCronRequest, runNewsletterPipeline);

export default newsletterRouter;
