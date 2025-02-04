const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Paciente = sequelize.define('Paciente', {
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
    fecha_nacimiento: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'pacientes',
    timestamps: true,
});

User.hasOne(Paciente, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Paciente.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Paciente;
