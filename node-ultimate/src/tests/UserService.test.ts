import { UserService } from "../application/services/UserService";
import User from "../domain/models/UserModel";
import { UserRepository } from "../domain/repositories/UserRepository";


describe('UserService', () => {
  let userService: UserService;
  let userRepository: jest.Mocked<UserRepository>;

  beforeEach(() => {
    userRepository = {
      findAll: jest.fn(),
      findById: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };

    userService = new UserService(userRepository);
  });

  it('should fetch all users', async () => {
    const users = await User.findAll(); //Usuarios do db

    userRepository.findAll.mockResolvedValue(users);

    const result = await userService.findAll();

    expect(result).toEqual(users);
    expect(userRepository.findAll).toHaveBeenCalledTimes(1);
  });

  it('should fetch a user by ID', async () => {
    const user = await User.findByPk(1); //Usuario do db

    userRepository.findById.mockResolvedValue(user);

    const result = await userService.findById(1);

    expect(result).toEqual(user);
    expect(userRepository.findById).toHaveBeenCalledWith(1);
    expect(userRepository.findById).toHaveBeenCalledTimes(1);
  });

  it('should create a new user', async () => {
    const newUser: Partial<User> = { name: 'Leo', email: 'leo@gmail.com' };
    const createdUser: User = { id: 1, ...newUser } as User;

    userRepository.create.mockResolvedValue(createdUser);

    const result = await userService.create(newUser);

    expect(result).toEqual(createdUser);
    expect(userRepository.create).toHaveBeenCalledWith(newUser);
    expect(userRepository.create).toHaveBeenCalledTimes(1);
  });

  it('should update a user by ID', async () => {
    const updatedUser: Partial<User> = { name: 'John Smith' };
    const user = await User.findByPk(1);

    userRepository.update.mockResolvedValue(user);

    const result = await userService.update(1, updatedUser);

    expect(result).toEqual(user);
    expect(userRepository.update).toHaveBeenCalledWith(1, updatedUser);
    expect(userRepository.update).toHaveBeenCalledTimes(1);
  });

  it('should delete a user by ID', async () => {
    userRepository.delete.mockResolvedValue(true);

    const result = await userService.delete(1);

    expect(result).toBe(true);
    expect(userRepository.delete).toHaveBeenCalledWith(1);
    expect(userRepository.delete).toHaveBeenCalledTimes(1);
  });
});
