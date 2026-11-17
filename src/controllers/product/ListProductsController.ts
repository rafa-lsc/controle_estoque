import type { Request, Response } from "express";
import { ListProductsService } from "../../services/product/ListProductsService.js";

class ListProductsController {
    async handle(request: Request, response: Response) {
        const listProductsService = new ListProductsService();
        const products = await listProductsService.execute();

        return response.json(products);
    }
}

export { ListProductsController };
