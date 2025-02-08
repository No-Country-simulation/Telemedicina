const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Crear un administrador (solo ejecutado una vez o por otro admin)
const createAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Verificar que la contraseña no sea undefined
        if (!password) {
            return res.status(400).json({ error: "La contraseña es obligatoria" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = await User.create({
            name,
            email,
            password: hashedPassword,
            role: 'admin'
        });

        res.status(201).json({ message: "Admin creado correctamente", admin: newAdmin });
    } catch (error) {
        console.error("Error al crear admin:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

module.exports = { createAdmin };
