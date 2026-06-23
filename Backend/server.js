import express from 'express'
import cors from "cors";
import dotenv from "dotenv"
import connectDB from './config/db.js';
import articleRoute from './routes/articleRoute.js';
import { generateWeeklyNewsletter } from './services/newsletterService.js';

dotenv.config();

const app=express();

const PORT=process.env.PORT;

app.use(cors());
app.use(express.json());

await connectDB();
// await generateWeeklyNewsletter();

app.get("/", (req, res) => {
    res.send(`Server is listening at ${PORT}`);
});

app.use("/api/article",articleRoute)

app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`)
})