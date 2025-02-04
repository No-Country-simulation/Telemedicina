const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Medico = require('../models/Medico');

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        if (!token) return res.status(401).json({ error: 'Acceso denegado' });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findByPk(decoded.userId);

        if (!user || user.role !== 'medico') {
            return res.status(403).json({ error: 'Solo los médicos pueden realizar esta acción' });
        }

        req.user = { id: user.id, medico_id: await Medico.findOne({ where: { user_id: user.id } })?.id };
        next();
    } catch (error) {
        res.status(401).json({ error: 'Token inválido' });
    }
};

module.exports = authMiddleware;
