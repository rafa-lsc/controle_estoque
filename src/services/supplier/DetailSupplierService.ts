import prismaClient from "../../prisma/index.js";
import { type DetailSupplierRequest } from "../../models/interfaces/supplier/DetailSupplierRequest.js";

class DetailSupplierService {
    async execute({ supplier_id }: DetailSupplierRequest) {
        if (!supplier_id) {
            throw new Error("Id do fornecedor não foi enviado!");
        }

        const supplier = await prismaClient.supplier.findFirst({
            where: {
                id: supplier_id
            },
            include: {
                products: true
            }
        });

        return supplier;
    }
}

export { DetailSupplierService };
