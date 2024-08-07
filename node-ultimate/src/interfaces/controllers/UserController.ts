import express, { Request, Response } from 'express';
import { UserService } from '../../application/services/UserService';
import { UserRepositoryImpl } from '../../infrastructure/repositories/UserRepositoryImpl';

const userRouter = express.Router();
const userRepository = new UserRepositoryImpl();
const userService = new UserService(userRepository);

userRouter.get('/users', async (req: Request, res: Response) => {
  try {
    const users = await userService.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).send('Error fetching users');
  }
});

userRouter.get('/users/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const user = await userService.findById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send('Error fetching user');
  }
});

userRouter.post('/users', async (req: Request, res: Response) => {
  try {
    const user = await userService.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).send('Error creating user');
  }
});

userRouter.put('/users/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const updatedUser = await userService.update(id, req.body);
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send('Error updating user');
  }
});

userRouter.delete('/users/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const deleted = await userService.delete(id);
    if (deleted) {
      res.status(204).send('User deleted');
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send('Error deleting user');
  }
});

export default userRouter;
