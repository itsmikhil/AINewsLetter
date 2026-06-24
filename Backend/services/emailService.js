import "dotenv/config";
import { Resend } from "resend";
import {
  createNewsletterTemplate,
  createVerificationEmailTemplate,
} from "../templates/emailTemplate.js";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email, verificationLink) => {
  const response = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Verify your subscription",
    html: createVerificationEmailTemplate(verificationLink),
  });
};

const from = process.env.EMAIL_FROM || "Acme <onboarding@resend.dev>";

export const sendNewsletterEmail = async (
  email,
  newsletter,
  unsubscribeToken,
) => {
  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",

      to: email,

      subject: newsletter.title,

      html: createNewsletterTemplate(newsletter, unsubscribeToken),
    });

    return response;
  } catch (error) {
    console.log("Newsletter Email Error:", error);

    throw error;
  }
};
