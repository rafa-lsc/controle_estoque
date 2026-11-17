import prismaClient from "../../prisma/index.js";

class ListCategoryService{
    async execute(){
        //buscar todas as categorias do banco
        const categories = await prismaClient.category.findMany({
            select:{
                id: true,
                name: true
            }
        });

        return categories;
    }
}

export {ListCategoryService}