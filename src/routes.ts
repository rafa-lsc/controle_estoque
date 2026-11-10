import {Router, type Request, type Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController.js";
import { AuthUserController } from "./controllers/user/AuthUserController.js";

const router = Router();
router.get("/test", (request: Request, reponse: Response) => {
    return reponse.json({ok: true});
});

//User routes
router.post('/user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);

export {router};
