import type { Request, Response } from "express";
import { EditSupplierService } from "../../services/supplier/EditSupplierService.js";

class EditSupplierController {
    async handle(request: Request, response: Response) {
        const supplier_id = (request.params.id || request.query.supplier_id || request.body.supplier_id) as string;
        const { name, phone } = request.body;
        const editSupplierService = new EditSupplierService();

        const supplierEdited = await editSupplierService.execute({
            supplier_id,
            name,
            phone
        });

        return response.json(supplierEdited);
    }
}

export { EditSupplierController };
