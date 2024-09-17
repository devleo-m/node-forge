import { UserRepository } from '../../domain/ports/user-repository';
import { User } from '../../domain/models/user';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  getAllUsers(): Promise<User[]> {
    return this.userRepository.getAllUsers();
  }

  getUserById(id: number): Promise<User | null> {
    return this.userRepository.getUserById(id);
  }

  createUser(user: User): Promise<User> {
    return this.userRepository.createUser(user);
  }

  updateUser(id: number, user: User): Promise<boolean> {
    return this.userRepository.updateUser(id, user);
  }

  deleteUser(id: number): Promise<boolean> {
    return this.userRepository.deleteUser(id);
  }
}
