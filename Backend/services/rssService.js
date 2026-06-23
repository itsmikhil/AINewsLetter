import Parser from "rss-parser";
import { RSS_FEEDS } from "../config/rssFeeds.js";
import articleModel from "../models/articles.js";

const parser = new Parser();


// we get news articles from rss feed in xml format
// so we need to use rss-parser package for extracting desired info

// FLOW:- fetchAndStoreAllArticles->to get articles from each source->fetchRSSFeed()->
// to store each article in db ->first we map it to schema->mapRSSItem()->storeArticle()

export const fetchRSSFeed = async (url) => {
    try {
        const feed = await parser.parseURL(
            url
        );

        if(!feed){
            return null;
        }

        // we return max 20 articles from a source
        return feed.items.slice(0, 20);
    } catch (error) {
        console.error(
            `Failed to fetch ${url}`,
            error.message
        );
        return null;
    }
};

export const fetchAndStoreAllArticles=async()=>{
    let stored=0;
    let failed=0;
    let skipped=0; // because they are already stored
    for(const el of RSS_FEEDS){
        console.log(el.source)
        try {
            const feed=await fetchRSSFeed(el.url)

            if(feed === null){
                continue;
            }

            for(let article of feed){
                try {

                    const mappedArticle=mapRSSItem(article,el.source);
                    // remove this
                    console.log(mappedArticle.publishedAt)

                    const result=await storeArticle(mappedArticle);
                    if(result === "DUPLICATE"){
                        skipped++;
                    }
                    else{
                        stored++;
                    }
                } catch (error) {
                    failed++;
                    console.error(error.message);
                    continue;
                }
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    console.log(stored,skipped,failed)
    return {
        stored,
        skipped,
        failed
    };
}

export const storeArticle=async(article)=>{
    try {
        const res=await articleModel.create(article); 
        return res;
    } catch (error) {
        if(error.code===11000){
            return "DUPLICATE"
        }
        throw error
    }
}

// we need this because we have diff sources
// and all sources provide news articels with diff fields
// so this helps in Data Normalization
// also we have provided each field with fallback handling
const mapRSSItem = (item, source) => {
    return {
        title: item.title,

        description:
            item.contentSnippet ||
            item.content ||
            "",

        source,

        url: item.link,

        categories:
            item.categories || [],

        publishedAt:
            item.isoDate ||
            item.pubDate
    };
};