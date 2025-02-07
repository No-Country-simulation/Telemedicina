const express = require('express');
const { registerPaciente, registerPacienteByMedico } = require('../controllers/pacienteController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// 🔹 Ruta para que un paciente se registre
router.post('/register', registerPaciente);

// 🔹 Ruta para que un médico registre un paciente (requiere autenticación)
router.post('/registro/medico', authMiddleware, registerPacienteByMedico);

module.exports = router;
