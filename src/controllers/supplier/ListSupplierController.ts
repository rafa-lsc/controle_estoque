import type { Request, Response } from "express";
import { ListSupplierService } from "../../services/supplier/ListSupplierService.js";

class ListSupplierController {
    async handle(request: Request, response: Response) {
        const listSupplierService = new ListSupplierService();
        const suppliers = await listSupplierService.execute();

        return response.json(suppliers);
    }
}

export { ListSupplierController };
