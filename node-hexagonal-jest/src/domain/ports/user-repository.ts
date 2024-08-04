import { User } from '../models/user';

export interface UserRepository {
  getAllUsers(): Promise<User[]>;
  getUserById(id: number): Promise<User | null>;
  createUser(user: User): Promise<User>;
  updateUser(id: number, user: User): Promise<boolean>;
  deleteUser(id: number): Promise<boolean>;
}
