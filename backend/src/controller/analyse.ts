import {RequestHandler} from "express";
import {SeoAnalyzer} from "../../../Core/seoAnalyzer";

class AnalyseController {

    test: RequestHandler = async (req, res) => {

        const {input} = req.body;

        try {
            const result = new SeoAnalyzer(input);
            res.status(200).send({
                res: result.score
            })
        } catch (e) {
            res.status(400).send(e);
        }
    }
}
export default new AnalyseController();