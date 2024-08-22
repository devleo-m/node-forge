import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';
import User from './user';

interface RoleAttributes { // Interface para os atributos do modelo Role
    id: number;
    name: string;
}

interface RoleCreationAttributes extends Optional<RoleAttributes, 'id'> {} // Interface para a criação de um novo Role

class Role extends Model<RoleAttributes, RoleCreationAttributes> implements RoleAttributes { // Modelo Role
    public id!: number;
    public name!: string;

    // Define o relacionamento com o modelo User
    public readonly users?: User[]; // `users` será um array de Users se houver muitos
}

Role.init({ // Inicializa o modelo Role com suas propriedades e opções
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    sequelize,
    modelName: 'Role',
    tableName: 'role',
    timestamps: false // Desativa os campos createdAt e updatedAt, se não necessários
});

export default Role;