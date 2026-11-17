import type { Response, Request } from "express";
import { RemoveUserService } from "../../services/user/RemoveUserService.js";

class RemoveUserController {
    async handle(request: Request, response: Response){
        const user_id = request?.query.user_id as string;
        const removeUserService = new RemoveUserService();
        const removeUser = removeUserService.execute({user_id});
        return response.json(removeUser);

    }
}

export { RemoveUserController}