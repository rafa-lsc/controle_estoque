import type { Response, Request } from "express";
import type { CategoryRequest } from "../../models/interfaces/category/CategoryRequest.js";
import { CreateCategoryService } from "../../services/category/CreateCategoryService.js";

class CreateCategoryController{
    async handle(request: Request, response: Response){
        const {name}: CategoryRequest = request.body;
        const createCategoryService = new CreateCategoryService();
        const category = await createCategoryService.execute({name});
        return response.json(category);
    }
}

export {CreateCategoryController}