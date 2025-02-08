const Usuario = require('../models/User');
const Medico = require('../models/Medico')
// Crear un nuevo médico
const createMedico = async (req, res) => {
    try {
        const { usuario_id, especialidad, numero_colegiado, telefono } = req.body;

        // Verificar si el usuario existe
        const usuario = await Usuario.findByPk(usuario_id);
        if (!usuario) {
            return res.status(404).json({ error: "El usuario no existe" });
        }

        // Verificar que el usuario tenga el rol correcto
        if (usuario.role !== "medico") {
            return res.status(400).json({ error: "El usuario debe tener el rol de 'medico'" });
        }

        // Verificar que el usuario no esté ya registrado como médico
        const medicoExistente = await Medico.findOne({ where: { usuario_id } });
        if (medicoExistente) {
            return res.status(400).json({ error: "Este usuario ya está registrado como médico" });
        }

        // Crear el médico
        const nuevoMedico = await Medico.create({
            usuario_id,
            especialidad,
            numero_colegiado,
            telefono
        });

        res.status(201).json(nuevoMedico);
    } catch (error) {
        console.error("Error al crear médico:", error);
        res.status(500).json({ error: "Error al crear médico", detalle: error.message });
    }
};

// Obtener todos los médicos
const getMedicos = async (req, res) => {
    try {
        const medicos = await Medico.findAll({
            include: {
                model: Usuario,
                attributes: ['id', 'nombre', 'email'] // Solo algunos datos del usuario
            }
        });
        res.status(200).json(medicos);
    } catch (error) {
        console.error("Error al obtener médicos:", error);
        res.status(500).json({ error: "Error al obtener médicos" });
    }
};

// Obtener un médico por ID
const getMedicoById = async (req, res) => {
    try {
        const { id } = req.params;
        const medico = await Medico.findByPk(id, {
            include: {
                model: Usuario,
                attributes: ['id', 'nombre', 'email']
            }
        });

        if (!medico) {
            return res.status(404).json({ error: "Médico no encontrado" });
        }

        res.status(200).json(medico);
    } catch (error) {
        console.error("Error al obtener médico:", error);
        res.status(500).json({ error: "Error al obtener médico" });
    }
};

// Actualizar datos de un médico
const updateMedico = async (req, res) => {
    try {
        const { id } = req.params;
        const { especialidad, numero_colegiado, telefono } = req.body;

        const medico = await Medico.findByPk(id);
        if (!medico) {
            return res.status(404).json({ error: "Médico no encontrado" });
        }

        await medico.update({ especialidad, numero_colegiado, telefono });

        res.status(200).json({ message: "Médico actualizado correctamente", medico });
    } catch (error) {
        console.error("Error al actualizar médico:", error);
        res.status(500).json({ error: "Error al actualizar médico" });
    }
};

// Eliminar un médico
const deleteMedico = async (req, res) => {
    try {
        const { id } = req.params;
        const medico = await Medico.findByPk(id);

        if (!medico) {
            return res.status(404).json({ error: "Médico no encontrado" });
        }

        await medico.destroy();
        res.status(200).json({ message: "Médico eliminado correctamente" });
    } catch (error) {
        console.error("Error al eliminar médico:", error);
        res.status(500).json({ error: "Error al eliminar médico" });
    }
};

module.exports = {
    createMedico,
    getMedicos,
    getMedicoById,
    updateMedico,
    deleteMedico
};
