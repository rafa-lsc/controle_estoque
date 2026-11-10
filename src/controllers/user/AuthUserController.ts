import { type Request, type Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService.js";
import { type AuthRequest } from "../../models/interfaces/user/auth/Authrequest.js";

class AuthUserController{
    async handle(request: Request, response: Response) {
        const{email, password}: AuthRequest = request.body;
        const authUserService = new AuthUserService;
        const auth = await authUserService.execute({
            email, password
        });

        return response.json(auth);
    }
}

export {AuthUserController}