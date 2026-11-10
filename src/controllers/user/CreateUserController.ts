import { type Request, type Response } from "express";
import { CreateUserService } from "../../services/users/CreateUseServices.js";
import { type UserRequest } from "../../models/interfaces/user/UserRequest.js";

class CreateUserController {
    async handle(request: Request, response:Response) {
        const { name, email, password}: UserRequest = request.body;
        const createUserService = new CreateUserService();
        const user = await createUserService.execute({
            name, email, password
        });

        return response.json(user);
    }
}

export {CreateUserController}