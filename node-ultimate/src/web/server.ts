import express from 'express';
import sequelize from '../infrastructure/database/database';
import userRouter from '../interfaces/controllers/UserController';

const app = express();
const port = 3000;

app.use(express.json());
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
