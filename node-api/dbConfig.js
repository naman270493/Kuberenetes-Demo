const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://myuser:postgres@postgres-headless:5432/mydatabase', {
    dialect: 'postgres',
});

module.exports = sequelize;