const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
    host: 'postgres',
    dialect: 'postgres',
    port: 5432
});

module.exports = sequelize;