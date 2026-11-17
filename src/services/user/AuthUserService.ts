import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import prismaClient from "../../prisma/index.js";
import { type AuthRequest } from "../../models/interfaces/user/auth/Authrequest.js";

const { sign } = jwt

class AuthUserService{
    async execute({email, password}: AuthRequest){

        if(!email){
            throw new Error("Email precisa ser enviado")
        }

        if(!password){
            throw new Error("Senha precisa ser enviada")
        }

        //Verificar se já existe um usuário com esse email
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });

        if (!user){
            throw new Error("Wrong username or password")
        }

        //Verfificaçao da senha
        const passwordMatch = await compare(password, user?.password)

        if(!passwordMatch){
            throw new Error("Wrong Password")
        }

        const token = sign(
            {
                name: user?.name,
                email: user?.email
            },
            process.env.JWT_SECRET as string,
            {
                subject: user?.id,
                expiresIn: "30d"
            }
        );

        return {
            id: user?.id,
            name: user?.name,
            email: user?.email,
            token: token
        }
    }
}

export {AuthUserService}