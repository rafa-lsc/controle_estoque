import prismaClient from "../../prisma/index.js";
import { type RemoveCategoryRequest } from "../../models/interfaces/category/RemoveCategoryRequest.js";

class RemoveCategoryService{
    async execute({category_id}: RemoveCategoryRequest){
        if(category_id){
            const category = await prismaClient.category.delete({
                where: {
                    id:category_id
                }
            });

            return category;
        }
    }
}

export {RemoveCategoryService}