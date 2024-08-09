import express from 'express';
import sequelize from '../infrastructure/database/database';
import userRouter from '../interfaces/controllers/UserController';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const app = express();
const port = process.env.PORT;

app.use(express.json());
const swaggerDocument = YAML.load('./public/swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', userRouter);

app.get('/', async (req, res) => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    res.send('Database connection established!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    res.status(500).send('Unable to connect to the database');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

sequelize.sync({ alter: true }).then(() => {
  console.log('Database & tables created!');
});
