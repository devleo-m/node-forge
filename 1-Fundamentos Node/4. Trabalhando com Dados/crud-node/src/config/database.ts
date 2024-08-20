import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    username: 'root',
    password: 'root',
    database: 'database-crud-node',
    
    dialect: 'postgres',
    host: 'localhost',
    port: 5434
});

export default sequelize;