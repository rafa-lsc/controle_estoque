import {Router, type Request, type Response } from "express";

const router = Router();
router.get("/test", (request: Request, reponse: Response) => {
    return reponse.json({ok: true});
});

export {router};
