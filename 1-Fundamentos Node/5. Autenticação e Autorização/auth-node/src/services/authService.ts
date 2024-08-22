import bcrypt from 'bcryptjs';
import jwt, { JwtPayload } from 'jsonwebtoken';
import User from '../models/user';

// Obtém a chave secreta do ambiente ou usa uma chave padrão para desenvolvimento
const secret = process.env.JWT_SECRET || 'teste_jwt_secret';

// Define uma interface para o payload do JWT
interface AuthTokenPayload {
    id: number;
    roleId: number;
}

// Classe de serviço de autenticação
export class AuthService {
    // Registra um novo usuário
    static async register(username: string, email: string, password: string) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, email, password: hashedPassword, roleId: 2 });
        return user;
    }

    // Faz login e retorna o usuário e o token JWT
    static async login(email: string, password: string) {
        const user = await User.findOne({ where: { email } });
        if (!user) throw new Error('Usuário não encontrado');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error('Senha inválida');

        const token = jwt.sign({ id: user.id, roleId: user.roleId } as AuthTokenPayload, secret, { expiresIn: '1h' });
        return { user, token };
    }

    // Verifica e decodifica o token JWT
    static async verifyToken(token: string): Promise<JwtPayload | string> {
        try {
            return jwt.verify(token, secret);
        } catch (error) {
            throw new Error('Token inválido');
        }
    }
}
