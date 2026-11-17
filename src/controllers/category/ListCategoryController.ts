import type { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService.js";

class ListCategoryController {
    async handle(request: Request, response: Response){
        const listCategoryService = new ListCategoryService;
        const categories = await listCategoryService.execute();
        return response.json(categories);
    }
}

export {ListCategoryController};