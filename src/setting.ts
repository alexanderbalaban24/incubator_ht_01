import express from "express";
import {videosRouter} from "./routes/videos-router";
import {testingRouter} from "./routes/testing-router";

export const app = express();


app.use(express.json());
app.use('/videos', videosRouter);
app.use('/testing', testingRouter);
app.use('/testing-all', testingRouter);