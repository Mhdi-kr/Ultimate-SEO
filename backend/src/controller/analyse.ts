import {RequestHandler} from "express";
import {SeoAnalyzer} from "../../../Core/seoAnalyzer";
import validURL from "valid-url";
import fetch from "node-fetch";

class AnalyseController {

    analyse: RequestHandler = async (req, res) => {

        const {input} = req.body;

        if (validURL.isUri(input)) {
            try {
                const response = await fetch(input);
                const htmlBody = await response.text();
                const result = new SeoAnalyzer(htmlBody);
                res.status(200).send({
                    res: result.score
                })
            } catch (e) {
                res.status(400).send(e);
            }
        } else {
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

    
}
export default new AnalyseController();