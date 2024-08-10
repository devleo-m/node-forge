import express from 'express';
import router from '../routes/productRoutes';
import { logger } from '../middleware/logger';

const loggerMiddleware = logger;
const app = express();

app.use(express.json());
app.use(loggerMiddleware);
app.use('/product', router);

app.get('/', (req, res) => {
    res.send('Welcome to the User API');
})

export default app;