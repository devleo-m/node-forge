import { UserRepository } from '../../domain/repositories/UserRepository';
import User from '../../domain/models/UserModel';

export class UserRepositoryImpl implements UserRepository {
  async findAll(): Promise<User[]> {
    return User.findAll();
  }

  async findById(id: number): Promise<User | null> {
    return User.findByPk(id);
  }

  async create(user: Partial<User>): Promise<User> {
    return User.create(user);
  }

  async update(id: number, user: Partial<User>): Promise<User | null> {
    const [updated] = await User.update(user, {
      where: { id }
    });
    if (updated) {
      return User.findByPk(id);
    }
    return null;
  }

  async delete(id: number): Promise<boolean> {
    const deleted = await User.destroy({
      where: { id }
    });
    return deleted > 0;
  }
}
