import type { Request, Response } from "express";
import { DetailProductService } from "../../services/product/DetailProductService.js";

class DetailProductController {
    async handle(request: Request, response: Response) {
        const product_id = (request.params.id || request.query.product_id) as string;
        const detailProductService = new DetailProductService();

        const product = await detailProductService.execute({ product_id });

        return response.json(product);
    }
}

export { DetailProductController };
