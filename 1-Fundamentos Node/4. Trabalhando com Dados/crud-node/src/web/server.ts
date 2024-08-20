import bodyParser from 'body-parser';
import express from 'express';
import productRoutes from '../router/productRoutes';
import sequelize from '../config/database';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.use('/api', productRoutes);

sequelize.sync().then(() => {
    console.log('Database connected and synced');
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});