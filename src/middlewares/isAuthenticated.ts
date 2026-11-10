import { type Request, type Response, type NextFunction } from "express";
import { type Payload } from "../models/interfaces/user/auth/Payload.js";
import jwt from "jsonwebtoken"

const {verify} = jwt;

export function isAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
){

    //Acessar toke JWT
    const authToken = request.headers.authorization;

    if(!authToken){
        return response.status(401).end();
    }

    const [, token] = authToken.split("");

    try{
        //Validar token
        const {sub} = verify(token, process.env.JWT_SECRET) as Payload;
        request.user_id = sub;
        return next(); //Deixa que a requisição prossiga
    } catch(error){
          return response.send(401).end();  
    }
}