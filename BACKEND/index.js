const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const patientRoutes = require('./routes/patientRoutes')
const authRoutes = require('./routes/authRoutes');
const medicoRoutes = require('./routes/medicoRoutes');
const adminRoutes = require('./routes/adminRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/medicos', medicoRoutes);
app.use('/api/users', userRoutes);
app.use('/api/patients', patientRoutes)
app.use('/api/auth', authRoutes);
app.use('/api/admins', adminRoutes);

// Sincronizar base de datos y levantar servidor
sequelize.sync({ force: false }) // Cambia a `true` para resetear tablas en desarrollo
    .then(() => {
        console.log('Base de datos conectada');
        app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
    })
    .catch((error) => console.log('Error al conectar la base de datos:', error));
