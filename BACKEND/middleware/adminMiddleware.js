const Usuario = require('../models/User');

const adminMiddleware = async (req, res, next) => {
    try {
        const usuario = await Usuario.findByPk(req.user.id);
        if (!usuario || usuario.rol !== 'admin') {
            return res.status(403).json({ error: 'Acceso denegado. Solo los administradores pueden realizar esta acción' });
        }
        next();
    } catch (error) {
        res.status(500).json({ error: 'Error en la autenticación' });
    }
};

module.exports = adminMiddleware;
