const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('medico', 'paciente','admin'),
        allowNull: false,
    },
}, {
    tableName: 'users', // Nombre explícito de la tabla en la base de datos
    timestamps: true, // Incluye createdAt y updatedAt
});

module.exports = User;
