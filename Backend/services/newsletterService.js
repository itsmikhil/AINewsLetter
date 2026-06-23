import newsletterModel from "../models/newsletter.js";
import { getLastWeekArticles, getSelectedArticles } from "./articleService.js"
import { selectTopArticles,newsletterGenerationByMistral } from "./mistralService.js";


const generateWeeklyNewsletter = async () => {
    try {

        // Step 1: Fetch articles from last 7 days
        const articles =
            await getLastWeekArticles();

        // Step 2: Let Mistral select top 5
        const selectedArticleIds =
            await selectTopArticles(
                articles
            );

        // Step 3: Fetch selected articles
        // mistral AI only returns back id of selected articles 
        // therefore here we fetch all articles whose id mistral ai has chosen
        const selectedArticles =
            await getSelectedArticles(
                selectedArticleIds.selectedIds
            );

        // Step 4: Generate newsletter content
        // all we have select 5 articles we send it to mistral for drafting the newsletter
        const aiNewsletter =
            await newsletterGenerationByMistral(
                selectedArticles
            );

        // Step 5: Create lookup map
        // we get articles with their id,summary and whyItMatters back from mistral ai 
        // now we recombine the article for storing in db
        // with their url,source and other info that we already have 
        // and the new infos that we got from ai
        const articleMap = new Map();

        selectedArticles.forEach(article => {

            articleMap.set(
                article._id.toString(),
                article
            );

        });

        // Safety check 
        if (
            !aiNewsletter ||
            !aiNewsletter.articles
        ) {
            throw new Error(
                "Invalid newsletter response from Mistral"
            );
        }

        // to avoid ai from making mistakes
        if(newsLetter.articles.length !== 5){
            throw new Error(
                "Expected exactly 5 articles"
            );
        }

        // to prevent ai from hallucinating article ids
        for(const article of newsLetter.articles){
            if(
                !selectedArticles.some(
                    a =>
                        a._id.toString() ===
                        article.articleId
                )
            ){
                throw new Error(
                    "Unknown articleId returned by AI"
                );
            }
        }

        // Step 6: Merge AI response with DB articles
        const mergedArticles =
            aiNewsletter.articles.map(
                item => {

                    const article =
                        articleMap.get(
                            item.articleId
                        );

                    return {
                        articleId:
                            article._id,

                        title:
                            article.title,

                        source:
                            article.source,

                        url:
                            article.url,

                        aiSummary:
                            item.aiSummary,

                        whyItMatters:
                            item.whyItMatters
                    };
                }
            );

        // Step 7: Calculate week range
        // calculating week range because its needed in newletter schema and also for
        // identifying newsletter uniquely by thier week range
        const weekEnd = new Date();

        const weekStart =
            new Date();

        weekStart.setDate(
            weekStart.getDate() - 7
        );

        const formattedWeekStart =
            weekStart.toLocaleDateString(
                "en-US",
                {
                    month: "long",
                    day: "numeric"
                }
            );

        const formattedWeekEnd =
            weekEnd.toLocaleDateString(
                "en-US",
                {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                }
            );

        // Step 8: Build newsletter document
        const newsletterDocument = {

            title:
                `AI Weekly Digest | ${formattedWeekStart} - ${formattedWeekEnd}`,

            weeklySummary:
                aiNewsletter.weeklySummary,

            weekStart,

            weekEnd,

            selectedArticles:
                mergedArticles
        };

        // Step 9: Save newsletter
        const savedNewsletter =
            await newsletterModel.create(
                newsletterDocument
            );

        return savedNewsletter;

    } catch (error) {

        console.error(
            error.message
        );

        throw error;
    }
};

export {generateWeeklyNewsletter}