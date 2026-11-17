import type { Request, Response } from "express";
import { CreateSupplierService } from "../../services/supplier/CreateSupplierService.js";
import type { SupplierRequest } from "../../models/interfaces/supplier/SupplierRequest.js";

class CreateSupplierController {
    async handle(request: Request, response: Response) {
        const { name, phone }: SupplierRequest = request.body;
        const user_id = request.user_id;
        const createSupplierService = new CreateSupplierService();

        const supplier = await createSupplierService.execute({
            name,
            phone,
            user_id
        });

        return response.json(supplier);
    }
}

export { CreateSupplierController };
