const express = require('express');
const router = express.Router();
const medicoController = require('../controllers/medicoController');
const authMiddleware = require('../middleware/authMiddleware'); // Protegemos rutas

// Obtener todos los médicos (solo administradores pueden ver todos)
router.get('/', authMiddleware.verifyToken, medicoController.getMedicos);

// Obtener un médico por ID
router.get('/:id', authMiddleware.verifyToken, medicoController.getMedicoById);

// Crear un nuevo médico (solo usuarios autenticados pueden hacerlo)
router.post('/', authMiddleware.verifyAdmin, medicoController.createMedico);

// Actualizar un médico
router.put('/:id', authMiddleware.verifyAdmin, medicoController.updateMedico);

// Eliminar un médico
router.delete('/:id', authMiddleware.verifyAdmin, medicoController.deleteMedico);

module.exports = router;
