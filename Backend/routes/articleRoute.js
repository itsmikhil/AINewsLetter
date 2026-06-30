import express from "express";
import {
  fetchArticlesCron,
  getAllArticles,
  getArticle,
} from "../controllers/articleController.js";
import verifyCronRequest from "../middleware/cronMiddleware.js";

const articleRoute = express.Router();

articleRoute.get("/all", getAllArticles);
articleRoute.get("/get/:id", getArticle);
articleRoute.post("/fetch", verifyCronRequest, fetchArticlesCron);

export default articleRoute;
