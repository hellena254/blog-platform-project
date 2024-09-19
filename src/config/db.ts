import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('hellena_db', 'hellena', 'weneverknowtillwetry', {
  host: 'localhost',
  dialect: 'mysql',
});

export { sequelize };
