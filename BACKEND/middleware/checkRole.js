// middlewares/checkRole.js
const checkRole = (role) => {
    return (req, res, next) => {
        // Verifica si el rol del usuario coincide con el rol requerido
        if (req.user.role !== role) {
            return res.status(403).json({ error: `Acceso denegado. Se requiere rol de ${role}.` });
        }
        next();
    };
};

module.exports = checkRole;