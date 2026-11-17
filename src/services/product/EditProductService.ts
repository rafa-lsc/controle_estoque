import prismaClient from "../../prisma/index.js";
import { type EditProductRequest } from "../../models/interfaces/product/EditProductRequest.js";

class EditProductService {
    async execute({ name, amount, description, price, product_id, banner }: EditProductRequest) {
        const productEdited = await prismaClient.product.update({
            where: {
                id: product_id
            },
            data: {
                name: name,
                amount: +amount,
                description: description,
                price: price,
                banner: banner
            }
        });

        return productEdited;
    }
}

export { EditProductService };
