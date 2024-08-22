import { Router } from 'express';
import { AuthController } from '../controller/authController';
import { validateRegisterInput, validateLoginInput } from '../controller/authController';

const router = Router();

router.post('/register', validateRegisterInput, AuthController.register);
router.post('/login', validateLoginInput, AuthController.login);

export default router;
