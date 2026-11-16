import type { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService.js";
import type { ProductRequest } from "../../models/interfaces/product/ProductRequest.js";

class CreateProductController {
    async handle(request: Request, response: Response) {
        const { name, price, description, banner, category_id, amount, supplier_id, supplierId }: ProductRequest = request.body;
        const createProductService = new CreateProductService();

        if (!request.file) {
            throw new Error("Error sending image");
        } else {
            const { originalname, filename: banner } = request.file;
            const product = await createProductService.execute({
                name,
                price,
                description,
                banner,
                category_id,
                amount,
                supplier_id: supplier_id || supplierId
            });

            return response.json(product);
        }
    }
}

export { CreateProductController };
