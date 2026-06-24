import mongoose from "mongoose";
import newsletterModel from "../models/newsletter.js";
import subscriberModel from "../models/subscriber.js";
import { sendNewsletterEmail } from "../services/emailService.js";
import { deliverLatestNewsletter } from "../services/newsletterService.js";

export const getAllNewsletters = async (req, res) => {
  try {
    const newsletters = await newsletterModel.find().sort({ generatedAt: -1 });

    return res.status(200).json({
      success: true,
      newsletters,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getLatestNewsletter = async (req, res) => {
  try {
    // first all newsletter are sorted in decending order and then the first newsletter is
    // selected which is the latest one
    const newsletter = await newsletterModel
      .findOne()
      .sort({ generatedAt: -1 });

    if (!newsletter) {
      return res.status(404).json({
        success: false,
        message: "No newsletter found",
      });
    }

    return res.status(200).json({
      success: true,
      newsletter,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getNewsletterById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid newsletter id",
      });
    }

    const newsletter = await newsletterModel.findById(id);

    if (!newsletter) {
      return res.status(404).json({
        success: false,
        message: "Newsletter not found",
      });
    }

    return res.status(200).json({
      success: true,
      newsletter,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const sendLatestNewsletter = async (req, res) => {
  try {
    const result = await deliverLatestNewsletter();

    return res.status(200).json({
      success: true,
      message: "Newsletter delivery completed.",
      ...result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
