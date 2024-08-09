//import express, { Request, Response } from 'express';
import express from "express";
import routes from "./routes";
import { logger } from "./middleware/logger";

const app = express();
const port = 3000;

// Middleware para logging
app.use(logger);

// Middleware para parsear JSON
app.use(express.json());

//rota basica
app.use('/', routes);

// Rota básica
// app.get('/', (req: Request, res: Response) => {
//     res.send('Hello, world! This is an Express server with TypeScript.');
// });

//iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})