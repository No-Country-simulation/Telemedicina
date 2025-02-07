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

module.exports = verifyToken;
