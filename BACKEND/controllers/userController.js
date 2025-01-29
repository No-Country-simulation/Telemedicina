const User = require('../models/User');
const bcrypt = require('bcryptjs');
const createUser = async (req, res) => {
    try {
        console.log('Datos recibidos:', req.body); // Log de entrada
        const { name, email, password, role } = req.body;
         // Encripta la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, password: hashedPassword, role });
        res.status(201).json({message: 'Usuario registrado exitosamente',newUser});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createUser, getUsers };
