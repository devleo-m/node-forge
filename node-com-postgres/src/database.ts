import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('node-com-postgres', 'root', 'root', {
  host: 'localhost',
  dialect: 'postgres'
});

export default sequelize;
