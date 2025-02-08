const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Medico = require('../models/Medico');


const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization'); // Obtiene el header Authorization
    console.log("Header Authorization recibido:", authHeader);

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Token no proporcionado o mal formado" });
    }

    const token = authHeader.split(" ")[1]; // Extrae el token después de "Bearer"
    console.log("Token extraído:", token);

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Usuario autenticado:", decoded); // Debe mostrar los datos del usuario
        req.user = decoded;
        next();
    } catch (error) {
        console.error("Error al verificar el token:", error.message);
        return res.status(403).json({ error: "Token inválido o expirado" });
    }
};
// Nuevo middleware para verificar si el usuario es administrador
const verifyAdmin = async (req, res, next) => {
    try {
        // Verificamos si el usuario está autenticado
        if (!req.user) {
            return res.status(401).json({ error: 'Usuario no autenticado' });
        }

        // Buscamos el usuario en la base de datos
        const user = await User.findByPk(req.user.id);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Verificamos si el usuario tiene el rol de "admin"
        if (user.role !== 'admin') {
            return res.status(403).json({ error: 'Acceso denegado. Solo los administradores pueden realizar esta acción' });
        }

        next(); // Continúa con la ejecución de la siguiente función en la ruta
    } catch (error) {
        return res.status(500).json({ error: 'Error en la verificación del administrador' });
    }
};
module.exports = { verifyToken, verifyAdmin };
