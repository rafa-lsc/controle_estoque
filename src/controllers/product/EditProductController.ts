import type { Request, Response } from "express";
import { EditProductService } from "../../services/product/EditProductService.js";
import type { EditProductRequest } from "../../models/interfaces/product/EditProductRequest.js";

class EditProductController {
    async handle(request: Request, response: Response) {
        const { name, amount, description, price, product_id, banner }: EditProductRequest = request.body;
        const editProductService = new EditProductService();

        const productEdited = await editProductService.execute({
            name,
            amount,
            description,
            price,
            product_id,
            banner
        });

        return response.json(productEdited);
    }
}

export { EditProductController };
