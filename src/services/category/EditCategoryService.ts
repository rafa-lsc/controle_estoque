import prismaClient from "../../prisma/index.js";
import { type EditCategoryRequest } from "../../models/interfaces/category/EditCategoryRequest.js";

class EditCategoryService{
    async execute({name, category_id}: EditCategoryRequest) {
        if(category_id === "" || name === "" || !category_id || !name){
            throw new Error("Invalid arguments to edit category")
        }

        const categoryEdited = await prismaClient.category.update({
            where: {
                id: category_id,
            },
            data: {
                name: name,
            },
        });

        return categoryEdited;
    }
}

export {EditCategoryService};