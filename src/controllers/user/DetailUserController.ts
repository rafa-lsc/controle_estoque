import { type Request, type Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService.js";

class DetailuserController{
    async handle(request: Request, response: Response){
        const user_id = request?.user_id;
        const detailuserService = new DetailUserService();
        const user = await detailuserService.execute(user_id);
        return response.json(user);
    }
}

export { DetailuserController}