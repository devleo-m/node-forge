import { Sequelize } from 'sequelize';
import { initialize, UserModel } from './models/user';

const sequelize = new Sequelize('postgres://root:root@localhost:5434/node-hexagonal-jest', {
  dialect: 'postgres',
});

initialize(sequelize);

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

export { sequelize, UserModel };
