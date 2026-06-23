import { Mistral } from '@mistralai/mistralai';
import { articleSelectionPrompt, newsLetterGenerationPrompt } from '../prompts/newsletterPrompts.js';


const selectTopArticles=async(articles)=>{
    const client = new Mistral({ apiKey: process.env.MISTRAL_API_KEY });
    
    const response = await client.chat.complete({
    model: 'mistral-small-latest',
    messages: [
        { role: 'user', content: articleSelectionPrompt(articles) }
    ],
    });
    
    const result = response.choices[0].message.content;

    const cleaned =result.replace(/```json/g, "").replace(/```/g, "").trim();
    
    return JSON.parse(cleaned)
}

const newsletterGenerationByMistral=async(articles)=>{
    const client = new Mistral({ apiKey: process.env.MISTRAL_API_KEY });
    
    const response = await client.chat.complete({
    model: 'mistral-small-latest',
    messages: [
        { role: 'user', content: newsLetterGenerationPrompt(articles) }
    ],
    });
    
    const result = response.choices[0].message.content;

    const cleaned =result.replace(/```json/g, "").replace(/```/g, "").trim();
    
    return JSON.parse(cleaned)
}

export {selectTopArticles,newsletterGenerationByMistral}
