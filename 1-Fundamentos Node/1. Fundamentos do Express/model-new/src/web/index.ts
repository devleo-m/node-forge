import express from 'express';
import { logger } from '../middleware/logger';
import { routeHome } from '../routes/routeHome';

const app = express();
const port = 3000;

app.use(logger);
app.use(express.json());
app.use("/", routeHome);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})