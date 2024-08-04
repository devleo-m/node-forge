import express from 'express';
import { sequelize } from '../infrastructure/database';
import { userRouter } from '../adapters/in/rest/user-router';

const app = express();
app.use(express.json());
app.use('/users', userRouter);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the User API');
  });  

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();

export { app };
