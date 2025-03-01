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
// Obtener un usuario por ID
const getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el usuario', error });
    }
};
// Actualizar un usuario por ID
const updateUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const user = await User.findByPk(req.params.id);

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Actualizar usuario
        user.name = name || user.name;
        user.email = email || user.email;
        user.password = password || user.password;
        user.role = role || user.role;

        await user.save();
        res.json({ message: 'Usuario actualizado exitosamente', user });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el usuario', error });
    }
};
// Método para eliminar un usuario
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params; // Obtén el ID del usuario desde los parámetros de la URL

        // Busca al usuario por su ID
        const user = await User.findByPk(id);

        // Si el usuario no existe
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Elimina el usuario
        await user.destroy();

        // Respuesta exitosa
        res.status(200).json({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = { createUser, getUsers, deleteUser , getUserById , updateUser};
