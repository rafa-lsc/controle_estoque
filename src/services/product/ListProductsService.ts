import prismaClient from "../../prisma/index.js";

class ListProductsService {
    async execute() {
        const products = await prismaClient.product.findMany({
            select: {
                id: true,
                name: true,
                amount: true,
                supplier: true
            },
            orderBy: {
                created_at: "desc"
            }
        });

        return products;
    }
}

export { ListProductsService };
