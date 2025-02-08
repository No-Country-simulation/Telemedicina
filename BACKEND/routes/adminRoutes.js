const express = require('express');
const router = express.Router();
const { createAdmin } = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware'); 

// Ruta para agregar un administrador (Solo Admin puede crear otro Admin)
router.post('/', authMiddleware, adminMiddleware, createAdmin);

module.exports = router;
