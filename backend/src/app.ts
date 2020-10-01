import express from "express";
import {json} from "body-parser";
import morgan from "morgan";

import analyseRouter from "./routes/analyse";


const app = express();


app.use(json());
app.use(morgan("common"));

app.use("/analyse", analyseRouter);


export default app;