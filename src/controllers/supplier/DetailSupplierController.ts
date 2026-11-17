import type { Request, Response } from "express";
import { DetailSupplierService } from "../../services/supplier/DetailSupplierService.js";

class DetailSupplierController {
    async handle(request: Request, response: Response) {
        const supplier_id = (request.params.id || request.query.supplier_id) as string;
        const detailSupplierService = new DetailSupplierService();

        const supplier = await detailSupplierService.execute({ supplier_id });

        return response.json(supplier);
    }
}

export { DetailSupplierController };
