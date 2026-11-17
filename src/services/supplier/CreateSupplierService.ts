import prismaClient from "../../prisma/index.js";
import { type SupplierRequest } from "../../models/interfaces/supplier/SupplierRequest.js";

class CreateSupplierService {
    async execute({ name, phone, user_id }: SupplierRequest) {
        if (!name || name === "") {
            throw new Error("Nome do fornecedor inválido!");
        }

        const supplier = await prismaClient.supplier.create({
            data: {
                name: name,
                phone: phone,
                user_id: user_id
            }
        });

        return supplier;
    }
}

export { CreateSupplierService };
