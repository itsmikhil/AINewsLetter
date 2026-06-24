import express from "express";

import {
    getAllNewsletters,
    getLatestNewsletter,
    getNewsletterById,
    sendLatestNewsletter
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

newsletterRouter.post(
    "/send",
    sendLatestNewsletter
);

export default newsletterRouter;