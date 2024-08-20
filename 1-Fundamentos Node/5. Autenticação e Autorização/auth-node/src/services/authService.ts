import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import Role from '../models/role';

const secret = process.env.JWT_SECRET || 'teste_jwt_secret';

export class AuthService {
    static async register(username: string, email: string, password: string) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, email, password: hashedPassword, roleId: 1 });
        return user;
    }

    static async login(email: string, password: string) {
        const user = await User.findOne({ where: { email } });
        if (!user) throw new Error('Usuario nao encontrado');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error('Senha invalida');

        const token = jwt.sign({ id: user.id, roleId: user.roleId }, secret, { expiresIn: '1h' });
        return { user, token };
    }

    static async verifyToken(token: string) {
        try {
            const decoded = jwt.verify(token, secret);
            return decoded;
        } catch (error) {
            throw new Error('Token invalido');
        }
    }
}
