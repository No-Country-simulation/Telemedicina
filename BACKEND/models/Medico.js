const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Medico = sequelize.define('Medico', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
            model: User,
            key: 'id'
        }
    },
    especialidad: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numero_colegiado: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'medicos',
    timestamps: true,
});

User.hasOne(Medico, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Medico.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Medico;
