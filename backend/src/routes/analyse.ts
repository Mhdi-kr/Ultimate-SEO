import {Router} from "express";
import AnalyseController from "../controller/analyse";


const analyseRouter = Router();


analyseRouter.post("/", AnalyseController.test);


export default analyseRouter;