import express from 'express'
import cors from "cors";
import dotenv from "dotenv"
import connectDB from './config/db.js';

dotenv.config();
console.log(process.env.MONGODB_URI)

const app=express();

const PORT=process.env.PORT;

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send(`Server is listening at ${PORT}`);
});

app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`)
})