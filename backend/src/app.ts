import express from "express";
import {json} from "body-parser";
import morgan from "morgan";
import cors from "cors";

import analyseRouter from "./routes/analyse";


const app = express();


app.use(json());
app.use(cors({
    origin: /:8080$/,
    credentials: true
}));
app.use(morgan("common"));

app.use("/analyse", analyseRouter);


export default app;