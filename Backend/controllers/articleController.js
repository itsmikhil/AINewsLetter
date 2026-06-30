import articleModel from "../models/articles.js";
import { fetchAndStoreAllArticles } from "../services/rssService.js";


const getAllArticles=async(req,res)=>{
    try {
        // sorting result based on published date so that recent one is returned first
        const result=await articleModel.find().sort({ publishedAt: -1 });
        res.status(200).json({articles:result})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

const getArticle=async(req,res)=>{
    try {
        const {id}=req.params;
        const result=await articleModel.findById(id)
        if(!result){
            res.status(404).json({message:"Invalid article id"})
        }
        res.status(200).json({article:result})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

const fetchArticlesCron = async (req, res) => {
  try {
    console.log("Starting article collection...");

    await fetchAndStoreAllArticles();

    console.log("Article collection completed.");

    return res.status(200).json({
      success: true,
      message: "Articles fetched successfully.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export {getAllArticles,getArticle,fetchArticlesCron}