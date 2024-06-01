const { DataTypes } = require('sequelize');
const sequelize = require('./dbConfig');

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    organization: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = User;
