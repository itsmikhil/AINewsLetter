import express from "express";

import {
  subscribeUser,
  verifyUser,
  getSubscriberCount,
  unsubscribeUser,
} from "../controllers/subscriberController.js";

const subscriberRouter = express.Router();

// Subscribe
subscriberRouter.post("/subscribe", subscribeUser);

// Verify Email
subscriberRouter.get("/verify/:verificationToken", verifyUser);

// Admin Stats
subscriberRouter.get("/count", getSubscriberCount);

subscriberRouter.get("/unsubscribe/:token", unsubscribeUser);

export default subscriberRouter;
