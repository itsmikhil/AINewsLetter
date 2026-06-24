import articleModel from "../models/articles.js";
import newsletterModel from "../models/newsletter.js";
import subscriberModel from "../models/subscriber.js";

export const getStats = async (req,res) => {

    try {

        const totalArticles =
            await articleModel.countDocuments();

        const totalNewsletters =
            await newsletterModel.countDocuments();

        const totalSubscribers =
            await subscriberModel.countDocuments({
                isVerified:true
            });

        return res.status(200).json({
            success:true,
            totalArticles,
            totalNewsletters,
            totalSubscribers
        });

    } catch(error){

        return res.status(500).json({
            success:false,
            message:error.message
        });

    }
};