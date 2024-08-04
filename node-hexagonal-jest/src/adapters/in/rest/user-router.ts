import { Router } from 'express';
import { UserController } from './user-controller';
import { UserService } from '../../../application/services/user-services';
import { SequelizeUserRepository } from '../../out/persistence/sequelize-user-repository';

const userRouter = Router();
const userRepository = new SequelizeUserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

userRouter.get('/', userController.getAllUsers.bind(userController));
userRouter.get('/:id', userController.getUserById.bind(userController));
userRouter.post('/', userController.createUser.bind(userController));
userRouter.put('/:id', userController.updateUser.bind(userController));
userRouter.delete('/:id', userController.deleteUser.bind(userController));

export { userRouter };
