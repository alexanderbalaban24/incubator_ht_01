import express from "express";
import {config} from "dotenv";
import {videosRouter} from "./routes/videos-router";
import {testingRouter} from "./routes/testing-router";

config();

const app = express();


app.use(express.json());
app.use('/videos', videosRouter);
app.use('/testing', testingRouter);


const PORT = process.env.PORT || 3002;


app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}...`);
});

