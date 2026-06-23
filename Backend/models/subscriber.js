import mongoose, { mongo } from "mongoose";

const subscriberSchema=new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    isVerified: {
        type: Boolean,
        default: false
    },

    verificationToken: String,

    subscribedAt: {
        type: Date,
        default: Date.now
    }
})

const subscriberModel=await mongoose.model("subscriber",subscriberSchema);

export default subscriberModel