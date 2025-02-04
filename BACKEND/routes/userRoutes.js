const express = require('express');
const { createUser, getUsers , deleteUser } = require('../controllers/userController');
const router = express.Router();

//CRUD PPARA ADMIN
// Rutas no RESTful para el recurso "users"
router.post('/create', createUser);   // Crear un usuario
router.get('/', getUsers); // Obtener todos los usuarios
// Ruta para eliminar un usuario por su ID
router.delete('/delete/:id', deleteUser);
module.exports = router;
