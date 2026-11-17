import type { Request, Response } from "express";
import { RemoveSupplierService } from "../../services/supplier/RemoveSupplierService.js";

class RemoveSupplierController {
    async handle(request: Request, response: Response) {
        const supplier_id = (request.params.id || request.query.supplier_id) as string;
        const removeSupplierService = new RemoveSupplierService();

        const supplierDeleted = await removeSupplierService.execute({ supplier_id });

        return response.json(supplierDeleted);
    }
}

export { RemoveSupplierController };
