import {Router, type Request, type Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController.js";
import { AuthUserController } from "./controllers/user/AuthUserController.js";
import { isAuthenticated } from "./middlewares/isAuthenticated.js";
import { DetailUserService } from "./services/user/DetailUserService.js";
import { DetailuserController } from "./controllers/user/DetailUserController.js";
import { RemoveUserController } from "./controllers/user/RemoveUserController.js";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController.js";
import { EditCategoryController } from "./controllers/category/EditCategoryController.js";

const router = Router();
router.get("/test", (request: Request, reponse: Response) => {
    return reponse.json({ok: true});
});

//User routes
router.post('/user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailuserController().handle);
router.delete('/user/remove', new RemoveUserController().handle);

//Category routes
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.put('/category/edit', isAuthenticated, new EditCategoryController().handle)

export {router};
