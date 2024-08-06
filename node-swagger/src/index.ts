import express, { Express, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const app: Express = express();
const port = 3000;

// Middleware
app.use(express.json());

// Swagger Setup
const swaggerDocument = YAML.load('./public/swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
import usersRouter from './users';
app.use('/users', usersRouter);

// Start Server
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
