import prismaClient from "../../prisma/index.js";

class ListSupplierService {
    async execute() {
        const suppliers = await prismaClient.supplier.findMany({
            orderBy: {
                created_at: "desc"
            }
        });

        return suppliers;
    }
}

export { ListSupplierService };
