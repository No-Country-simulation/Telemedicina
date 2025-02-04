const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Paciente = require('../models/Paciente');

// 🔹 Método para que un paciente se registre solo
const registerPaciente = async (req, res) => {
    try {
        const { name, email, password, fecha_nacimiento, direccion, telefono } = req.body;

        // Verificar si el usuario ya existe
        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
            return res.status(400).json({ error: 'El email ya está registrado' });
        }

        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear usuario
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role: 'paciente',
        });

        // Crear paciente asociado al usuario
        const paciente = await Paciente.create({
            user_id: user.id,
            fecha_nacimiento,
            direccion,
            telefono,
        });

        res.status(201).json({ message: 'Paciente registrado correctamente', paciente });
    } catch (error) {
        console.error('Error al registrar paciente:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// 🔹 Método para que un médico registre un paciente
const registerPacienteByMedico = async (req, res) => {
    try {
        const { medico_id } = req.user; // ID del médico autenticado
        const { name, email, fecha_nacimiento, direccion, telefono } = req.body;

        // Verificar si el usuario ya existe
        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
            return res.status(400).json({ error: 'El email ya está registrado' });
        }

        // Generar una contraseña temporal
        const tempPassword = Math.random().toString(36).slice(-8);
        const hashedPassword = await bcrypt.hash(tempPassword, 10);

        // Crear usuario como paciente
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role: 'paciente',
        });

        // Crear paciente asociado al usuario
        const paciente = await Paciente.create({
            user_id: user.id,
            fecha_nacimiento,
            direccion,
            telefono,
        });

        res.status(201).json({ message: 'Paciente registrado por el médico', paciente, tempPassword });
    } catch (error) {
        console.error('Error al registrar paciente por médico:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = { registerPaciente, registerPacienteByMedico };
