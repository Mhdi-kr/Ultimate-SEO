import {RequestHandler} from "express";

class AnalyseController {

    test: RequestHandler = (req, res) => {

        res.status(200).send({
            res: "hello"
        });
    };

}

export default new AnalyseController();