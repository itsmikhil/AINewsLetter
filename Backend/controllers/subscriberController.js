import crypto from "crypto";
import subscriberModel from "../models/subscriber";

const generateVerificationToken=()=>{
    return crypto.randomBytes(32).toString("hex");
}

const subscribeUser=async(req,res)=>{
    try {
        const {email} = req.body;
        email=email?.trim();
        if(!email || email.length==0){
            return res.status(400).send({success:false,message:"Enter a valid email id"})
        }
        const verificationToken=generateVerificationToken();
        const result=await subscriberModel.create({email,verificationToken});
        res.status(200).json({success:true,message:"User registered successfully"});
    } catch (error) {
        if(error.code === 11000) return res.status(409).json({success:false,message:"Email id already registered"})
        res.status(500).json({success:false,message:error.message});
    }
}

const verifyUser=async(req,res)=>{
    try {
        const {verificationToken} = req.params;
        verificationToken=verificationToken?.trim();
        if(!verificationToken || verificationToken.length===0){
            return res.status(400).send({success:false,message:"Invalid Request"})
        }
        const result=await subscriberModel.findOneAndUpdate({verificationToken},{isVerified:true,verificationToken=null});
        if(!result){
            return res.status(404).json({
                success:false,
                message:"Invalid verification token"
            });
        }
        res.status(200).json({success:true,message:"Email Id verified successfully"});
    } catch (error) {
        res.status(500).json({success:false,message:error.message});
    }
}

const getSubscriberCount = async (req,res)=>{
    try {

        const count =
            await subscriberModel.countDocuments({
                isVerified:true
            });

        return res.status(200).json({
            success:true,
            count
        });

    } catch(error){

        return res.status(500).json({
            success:false,
            message:error.message
        });

    }
}

export {registerUser,verifyUser,getSubscriberCount}