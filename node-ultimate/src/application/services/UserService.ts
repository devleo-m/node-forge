import { UserRepository } from '../../domain/repositories/UserRepository';
import User from '../../domain/models/UserModel';

export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  findById(id: number): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  create(user: Partial<User>): Promise<User> {
    return this.userRepository.create(user);
  }

  update(id: number, user: Partial<User>): Promise<User | null> {
    return this.userRepository.update(id, user);
  }

  delete(id: number): Promise<boolean> {
    return this.userRepository.delete(id);
  }
}
