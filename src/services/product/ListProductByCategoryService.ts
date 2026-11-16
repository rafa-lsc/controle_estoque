import prismaClient from "../../prisma/index.js";
import { type ListProductByCategoryIdRequest } from "../../models/interfaces/product/ListProductByCategoryIdRequest.js";

class ListProductByCategoryService {
    async execute({ category_id }: ListProductByCategoryIdRequest) {
        const findProductByCategoryId = await prismaClient.product.findMany({
            where: {
                category_id: category_id
            }
        });

        return findProductByCategoryId;
    }
}

export { ListProductByCategoryService };
