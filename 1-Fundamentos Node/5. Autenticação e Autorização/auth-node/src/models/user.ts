import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";
import Role from "./role";

interface UserAttributes { // Interface para os atributos do modelo User
    id: number;
    username: string;
    email: string;
    password: string;
    roleId: number;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {} // Interface para a criação de um novo User

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes{ // Modelo User
    public id!: number;
    public username!: string;
    public email!: string;
    public password!: string;
    public roleId!: number;

    // Define o relacionamento com o modelo Role
    public readonly role?: Role; // `role` será uma instância de Role
}

User.init({ // Inicializa o modelo User com suas propriedades e opções
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "User",
    tableName: "user",
    timestamps: false // Desativa os campos createdAt e updatedAt, se não necessários
});

// Define os relacionamentos
User.belongsTo(Role, { foreignKey: 'roleId', as: 'role' }); // Um User pertence a um Role
Role.hasMany(User, { foreignKey: 'roleId', as: 'users' }); // Um Role tem muitos Users

export default User;