import prismaClient from "../../prisma/index.js";
import { type EditSupplierRequest } from "../../models/interfaces/supplier/EditSupplierRequest.js";

class EditSupplierService {
    async execute({ supplier_id, name, phone }: EditSupplierRequest) {
        if (!supplier_id || !name || name === "") {
            throw new Error("Argumentos inválidos para editar fornecedor!");
        }

        const supplierEdited = await prismaClient.supplier.update({
            where: {
                id: supplier_id
            },
            data: {
                name: name,
                phone: phone
            }
        });

        return supplierEdited;
    }
}

export { EditSupplierService };
