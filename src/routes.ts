import {Router, type Request, type Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController.js";

const router = Router();
router.get("/test", (request: Request, reponse: Response) => {
    return reponse.json({ok: true});
});

//User routes
router.post('/user', new CreateUserController().handle)

export {router};
