import crypto from "crypto";
import subscriberModel from "../models/subscriber.js";
import { sendVerificationEmail } from "../services/emailService.js";

const generateVerificationToken = () => {
  return crypto.randomBytes(32).toString("hex");
};

const subscribeUser = async (req, res) => {
  try {
    let { email } = req.body;
    email = email?.trim();
    if (!email || email.length == 0) {
      return res
        .status(400)
        .send({ success: false, message: "Enter a valid email id" });
    }
    const verificationToken = generateVerificationToken();
    const result = await subscriberModel.create({ email, verificationToken });
    await sendVerificationEmail(
      email,
      process.env.BACKEND_URL + `/api/subscriber/verify/${verificationToken}`,
    );
    res.status(200).json({
      success: true,
      message:
        "We've sent a verification email. Please check your inbox to complete your subscription.",
    });
  } catch (error) {
    if (error.code === 11000)
      return res.status(409).json({
        success: false,
        message: "This email is already subscribed or pending verification.",
      });
    res.status(500).json({ success: false, message: error.message });
  }
};

const verifyUser = async (req, res) => {
  try {
    let { verificationToken } = req.params;

    verificationToken = verificationToken?.trim();

    if (!verificationToken || verificationToken.length === 0) {
      return res.redirect(
        `${process.env.FRONTEND_URL}/verified?status=failed&reason=missing-token`,
      );
    }

    const result = await subscriberModel.findOneAndUpdate(
      {
        verificationToken,
      },
      {
        isVerified: true,
        verificationToken: null,
      },
    );

    if (!result) {
      return res.redirect(
        `${process.env.FRONTEND_URL}/verified?status=failed&reason=invalid-token`,
      );
    }

    return res.redirect(`${process.env.FRONTEND_URL}/verified?status=success`);
  } catch (error) {
    return res.redirect(
      `${process.env.FRONTEND_URL}/verified?status=failed&reason=server-error`,
    );
  }
};

const getSubscriberCount = async (req, res) => {
  try {
    const count = await subscriberModel.countDocuments({
      isVerified: true,
    });

    return res.status(200).json({
      success: true,
      count,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { subscribeUser, verifyUser, getSubscriberCount };
