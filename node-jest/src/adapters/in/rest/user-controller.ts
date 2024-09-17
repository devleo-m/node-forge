import express from 'express';
import { UserService } from '../../../application/services/user-services';
import { User } from '../../../domain/models/user';

export class UserController {
  constructor(private userService: UserService) {}

  async getAllUsers(req: express.Request, res: express.Response) {
    const users = await this.userService.getAllUsers();
    res.json(users);
  }

  async getUserById(req: express.Request, res: express.Response) {
    const id = parseInt(req.params.id, 10);
    const user = await this.userService.getUserById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  }

  async createUser(req: express.Request, res: express.Response) {
    const user = new User(req.body.name, req.body.email);
    const newUser = await this.userService.createUser(user);
    res.status(201).json(newUser);
  }

  async updateUser(req: express.Request, res: express.Response) {
    const id = parseInt(req.params.id, 10);
    const user = new User(req.body.name, req.body.email);
    const success = await this.userService.updateUser(id, user);
    if (success) {
      res.status(200).send('User updated');
    } else {
      res.status(404).send('User not found');
    }
  }

  async deleteUser(req: express.Request, res: express.Response) {
    const id = parseInt(req.params.id, 10);
    const success = await this.userService.deleteUser(id);
    if (success) {
      res.status(204).send('User deleted');
    } else {
      res.status(404).send('User not found');
    }
  }
}
