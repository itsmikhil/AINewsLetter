import articleModel from "../models/articles.js";

const getLastWeekArticles=async()=>{
    const sevenDaysAgo = new Date();

    sevenDaysAgo.setDate(
        sevenDaysAgo.getDate() - 7
    );

    const articles =
    await articleModel.find({
        publishedAt: {
            $gte: sevenDaysAgo
        }
    });

    return articles
}

const getSelectedArticles=async (selectedIds)=>{
    try {
        const selectedArticles =
        await articleModel.find({
            _id: {
                $in: selectedIds
            }
        });
    
        return selectedArticles;
        
    } catch (error) {
        console.log(error.message)
    }
}

export {getLastWeekArticles,getSelectedArticles}