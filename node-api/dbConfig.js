const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydatabase', 'myuser', 'ZGIxMTIyMzM0NDU1', {
    host: 'postgres-headless',
    dialect: 'postgres',
    port: 5432
});

module.exports = sequelize;