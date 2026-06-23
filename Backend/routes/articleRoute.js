import express from "express";
import { getAllArticles, getArticle } from "../controllers/articleController.js";

const articleRoute = express.Router();

articleRoute.get("/all",getAllArticles);
articleRoute.get("/get/:id",getArticle);

export default articleRoute;