import prismaClient from "../../prisma/index.js";
import { type RemoveSupplierRequest } from "../../models/interfaces/supplier/RemoveSupplierRequest.js";

class RemoveSupplierService {
    async execute({ supplier_id }: RemoveSupplierRequest) {
        if (!supplier_id) {
            throw new Error("Id do fornecedor não foi enviado!");
        }

        const removeSupplier = await prismaClient.supplier.delete({
            where: {
                id: supplier_id
            }
        });

        return removeSupplier;
    }
}

export { RemoveSupplierService };
