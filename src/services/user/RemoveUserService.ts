import prismaClient from "../../prisma/index.js";
import { type RemoveUserRequest } from "../../models/interfaces/user/RemoveUserRequest.js";

class RemoveUserService {
    async execute({user_id}: RemoveUserRequest) {

        if(user_id){
            const removeUser = await prismaClient.user.delete({
                where: {
                    id: user_id
                }
            })
            return removeUser;
        }
    }
}

export {RemoveUserService}