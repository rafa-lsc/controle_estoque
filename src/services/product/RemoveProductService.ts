import prismaClient from "../../prisma/index.js";
import { type RemoveProductRequest } from "../../models/interfaces/product/RemoveProductRequest.js";

class RemoveProductService {
    async execute({ product_id }: RemoveProductRequest) {
        if (!product_id) {
            throw new Error("Id do produto não foi enviado!");
        }

        const removeProduct = await prismaClient.product.delete({
            where: {
                id: product_id
            }
        });

        return removeProduct;
    }
}

export { RemoveProductService };
