// utils/jwtGenerator.js
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    // Define el payload del token (los datos que quieres incluir en el token)
    const payload = {
        id: user.id,
        email: user.email,
        role: user.role,
    };

    // Genera el token con una clave secreta y un tiempo de expiración
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }); // El token expira en 1 hora

    return token;
};

module.exports = generateToken;