import express from "express";

import {
    getAllNewsletters,
    getLatestNewsletter,
    getNewsletterById
} from "../controllers/newsletterController.js";

const newsletterRouter = express.Router();

newsletterRouter.get(
    "/",
    getAllNewsletters
);

newsletterRouter.get(
    "/latest",
    getLatestNewsletter
);

newsletterRouter.get(
    "/:id",
    getNewsletterById
);

export default newsletterRouter;