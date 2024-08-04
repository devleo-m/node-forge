import { UserRepository } from '../../../domain/ports/user-repository';
import { User } from '../../../domain/models/user';
import { UserModel } from '../../../infrastructure/database/models/user';

export class SequelizeUserRepository implements UserRepository {
  async getAllUsers(): Promise<User[]> {
    const users = await UserModel.findAll();
    return users.map(user => new User(user.name, user.email, user.id));
  }

  async getUserById(id: number): Promise<User | null> {
    const user = await UserModel.findByPk(id);
    if (!user) {
      return null;
    }
    return new User(user.name, user.email, user.id);
  }

  async createUser(user: User): Promise<User> {
    const newUser = await UserModel.create({ name: user.name, email: user.email });
    return new User( newUser.name, newUser.email, newUser.id);
  }

  async updateUser(id: number, user: User): Promise<boolean> {
    const [updated] = await UserModel.update({ name: user.name, email: user.email }, { where: { id } });
    return updated > 0;
  }

  async deleteUser(id: number): Promise<boolean> {
    const deleted = await UserModel.destroy({ where: { id } });
    return deleted > 0;
  }
}
