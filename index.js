import express from "express";
const app = express();

import mongoose from "mongoose";
import { } from 'dotenv/config'
import postRoutes from './routes/post.js';

//Middlearwe
app.use('/posts', postRoutes);


app.get("/", (req, res) => {
    res.send("hello express");
});

app.get("/posts", (req, res) => {
    res.send("hello posts");
});

// dataBase connect
mongoose.connect(
    process.env.DB_CONNECTION,
    () => console.log("connected to db")
);

app.listen(5000);
