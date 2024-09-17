import Role from '../models/role';

async function createAdminRole() {
    try {
        const [adminRole, created] = await Role.findOrCreate({
            where: { name: 'ADMIN' },
            defaults: { name: 'ADMIN' },
        });

        if (created) {
            console.log('Role ADMIN criada com sucesso.');
        } else {
            console.log('Role ADMIN já existe.');
        }
    } catch (error) {
        console.error('Erro ao criar a role ADMIN:', error);
    }
}

async function createReaderRole() {
    try {
        const [adminRole, created] = await Role.findOrCreate({
            where: { name: 'READER' },
            defaults: { name: 'READER' },
        });

        if (created) {
            console.log('Role READER criada com sucesso.');
        } else {
            console.log('Role READER já existe.');
        }
    } catch (error) {
        console.error('Erro ao criar a role READER:', error);
    }
}

createAdminRole();
createReaderRole();