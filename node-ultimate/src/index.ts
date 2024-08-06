import express from 'express';
import sequelize from './database';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    await sequelize.authenticate();
    console.log('Banco de dados conectado');
    res.send('Banco de dados conectado');
  } catch (error) {
    console.error('Nao foi possivel conectar com o db', error);
    res.status(500).send('Nao foi possivel conectar com o db');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
