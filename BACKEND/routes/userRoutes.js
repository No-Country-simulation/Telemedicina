const express = require('express');
const { createUser, getUsers , deleteUser,getUserById,updateUser } = require('../controllers/userController');
const router = express.Router();

//CRUD PPARA ADMIN

// Ruta para crear un usuario
router.post('/created', createUser);

// Ruta para obtener todos los usuarios
router.get('/', getUsers);

// Ruta para obtener un usuario por ID
router.get('/:id', getUserById);

// Ruta para actualizar un usuario
router.put('/:id', updateUser);

// Ruta para eliminar un usuario
router.delete('/:id', deleteUser);
module.exports = router;
