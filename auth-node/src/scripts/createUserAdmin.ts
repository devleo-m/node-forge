import bcrypt from 'bcryptjs';
import User from '../models/user';
import Role from '../models/role';

async function createAdminUser() {
    try {
        // Encontre a role ADMIN
        const adminRole = await Role.findOne({ where: { name: 'ADMIN' } });

        if (!adminRole) {
            console.error('Role ADMIN não encontrada. Certifique-se de criar a role primeiro.');
            return;
        }

        // Verifique se o admin já existe
        const existingAdmin = await User.findOne({ where: { email: 'admin@example.com' } });

        if (existingAdmin) {
            console.log('Usuário admin já existe.');
            return;
        }

        // Crie o usuário admin
        const hashedPassword = await bcrypt.hash('root', 10);
        const adminUser = await User.create({
            username: 'admin',
            email: 'admin@gmail.com',
            password: hashedPassword,
            roleId: adminRole.id,
        });

        console.log('Usuário admin criado com sucesso:', adminUser.username);
    } catch (error) {
        console.error('Erro ao criar o usuário admin:', error);
    }
}

createAdminUser();
