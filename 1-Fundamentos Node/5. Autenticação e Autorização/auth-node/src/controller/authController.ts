import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/authService';

// Valida os dados de entrada
const validateRegisterInput = (req: Request, res: Response, next: NextFunction) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: "Dados de entrada inválidos" });
    }
    next();
};

const validateLoginInput = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Dados de entrada inválidos" });
    }
    next();
};

export namespace AuthController {
    // Registra um novo usuário
    export const register = async (req: Request, res: Response) => {
        try {
            const { username, email, password } = req.body;
            const user = await AuthService.register(username, email, password);
            res.status(201).json(user);
        } catch (error) {
            console.error('Erro ao registrar usuário:', error);
            res.status(500).json({ message: "Erro interno ao registrar usuário" });
        }
    };

    // Realiza o login do usuário
    export const login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;
            const { user, token } = await AuthService.login(email, password);
            res.status(200).json({ user, token });
        } catch (error) {
            console.error('Erro ao realizar login:', error);
            res.status(401).json({ message: "Credenciais inválidas" });
        }
    };
}

// Exporta os validadores para serem usados nas rotas
export { validateRegisterInput, validateLoginInput };
