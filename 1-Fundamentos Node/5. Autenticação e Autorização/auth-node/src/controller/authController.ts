import { Request, Response } from 'express';
import { AuthService } from '../services/authService';

export class AuthController {
    static async register(req: Request, res: Response) {
        try {
            const { username, email, password } = req.body;
            const user = await AuthService.register(username, email, password);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ message: "Erro ao registrar usuário" });
        }
    }

    static async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const { user, token } = await AuthService.login(email, password);
            res.status(200).json({ user, token });
        } catch (error) {
            res.status(400).json({ message: "Erro ao realizar login" });
        }
    }
}
