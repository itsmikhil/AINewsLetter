import mongoose from "mongoose";

// we are storing source,title and url again so that even if the original article thats deleted 
// from our db still we have it saved along with us in newsletter

const newsletterSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        weeklySummary: {
            type: String,
            required: true,
            trim: true,
        },

        selectedArticles: [
            {
                articleId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Article",
                    required: true,
                },

                title: {
                    type: String,
                    required: true,
                },

                source: {
                    type: String,
                    required: true,
                },

                url: {
                    type: String,
                    required: true,
                },

                aiSummary: {
                    type: String,
                    required: true,
                },

                whyItMatters: {
                    type: String,
                    required: true,
                },
            },
        ],

        weekStart: {
            type: Date,
            required: true,
        },

        weekEnd: {
            type: Date,
            required: true,
        },

        generatedAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

const newsletterModel = mongoose.model(
    "newsletter",
    newsletterSchema
);

export default newsletterModel;