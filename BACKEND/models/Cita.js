const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Paciente = require('./Paciente');
const Medico = require('./Medico');

const Cita = sequelize.define('Cita', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    paciente_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Paciente,
            key: 'id'
        }
    },
    medico_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Medico,
            key: 'id'
        }
    },
    fecha_hora: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    estado: {
        type: DataTypes.ENUM('pendiente', 'confirmada', 'cancelada'),
        allowNull: false,
        defaultValue: 'pendiente',
    },
    observaciones: {
        type: DataTypes.TEXT,
        allowNull: true,
    }
}, {
    tableName: 'citas',
    timestamps: true,
});

Paciente.hasMany(Cita, { foreignKey: 'paciente_id', onDelete: 'CASCADE' });
Medico.hasMany(Cita, { foreignKey: 'medico_id', onDelete: 'CASCADE' });
Cita.belongsTo(Paciente, { foreignKey: 'paciente_id' });
Cita.belongsTo(Medico, { foreignKey: 'medico_id' });

module.exports = Cita;
