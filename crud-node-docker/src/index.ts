import express from 'express';
import sequelize from './database';
import User from './models/User';

const app = express();
const port = 3000;

app.use(express.json());

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

app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).send('Error fetching users');
  }
});

app.get('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).send('Error fetching user');
  }
});


app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).send('Error creating user');
  }
});

app.put('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const [updated] = await User.update(req.body, {
      where: { id }
    });
    if (updated) {
      const updatedUser = await User.findOne({ where: { id } });
      res.status(200).json(updatedUser);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send('Error updating user');
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await User.destroy({
      where: { id }
    });
    if (deleted) {
      res.status(204).send('User deleted');
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send('Error deleting user');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

sequelize.sync({ alter: true }).then(() => {
  console.log('Database & tables created!');
});