import prismaClient from "../../prisma/index.js";
import { type CategoryRequest } from "../../models/interfaces/category/CategoryRequest.js";

class CreateCategoryService {
    async execute({name}: CategoryRequest) {
        if(name == "" || name == null || !name){
            throw new Error("Nome inválido")
        }

        const category = await prismaClient.category.create({
            data: {
                name: name
            },
            select: {
                id: true,
                name: true,
            }

        })
    }
}

export {CreateCategoryService}