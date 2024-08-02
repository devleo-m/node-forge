import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('node-docker', 'root', 'root', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5434
});

export default sequelize;
