import mongoose from 'mongoose';
const { Schema } = mongoose;

const articleSchema = new Schema({
    title: String,

    description: String,

    source: String,

    url: {
        type: String,
        unique: true
    },

    author: String,

    categories: {
        type: [String],
        default: []
    },

    publishedAt: Date
});

const articleModel = mongoose.model("article", articleSchema);

export default articleModel