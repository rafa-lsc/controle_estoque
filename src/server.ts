import express, { type Request, type Response, type NextFunction } from "express";
import { router } from "./routes.js";

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof Error){
    return response.status(500).json({ error: err.message });
  }
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
})

app.listen(3333, () => {
  console.log("Servidor iniciado na porta 3333");
});