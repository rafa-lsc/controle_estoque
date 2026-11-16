import prismaClient from "../../prisma/index.js";
import { type DetailProductRequest } from "../../models/interfaces/product/DetailProductRequest.js";

class DetailProductService {
    async execute({ product_id }: DetailProductRequest) {
        if (!product_id) {
            throw new Error("Id do produto não foi enviado!");
        }

        const product = await prismaClient.product.findFirst({
            where: {
                id: product_id
            },
            include: {
                supplier: true
            }
        });

        return product;
    }
}

export { DetailProductService };
