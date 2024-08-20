import express from 'express';
import bodyParser from 'body-parser';
import sequelize from '../config/database';
import authRoutes from '../routes/authRoutes';
import { authMiddleware } from '../middleware/authMiddleware';

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World!!!");
})

app.use('/auth', authRoutes);

// Exemplo de rota protegida
app.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: 'Rota protegida' });
});

sequelize.sync().then(() => {
    console.log('Banco de dados conectado com sucesso!');
    app.listen(port, () => {
      console.log(`Servidor iniciado em http://localhost:${port}`);
    });
}).catch(err => {
    console.error('Erro ao conectar ao banco de dados', err);
});