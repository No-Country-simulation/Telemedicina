# Proyecto Backend de Telemedicina 🩺

Este es el backend del sistema de telemedicina que permite a médicos y pacientes gestionar citas médicas en línea. El proyecto está desarrollado con **Node.js**, **Express** y **PostgreSQL**.

## 🚀 Características

- Gestión de usuarios (pacientes, médicos y administradores).
- Creación y administración de citas médicas.
- Relación entre médicos y pacientes.
- Autenticación y autorización de usuarios.
- Base de datos relacional con **PostgreSQL**.
- Código organizado bajo el patrón **Modelo-Vista-Controlador (MVC)**.

---

## 🛠️ Tecnologías Usadas

- **Node.js**: Entorno de ejecución para JavaScript.
- **Express**: Framework web para Node.js.
- **Sequelize**: ORM para manejar la base de datos.
- **PostgreSQL**: Base de datos relacional.
- **Dotenv**: Manejo de variables de entorno.
- **Postman**: Pruebas de las APIs.
- **Nodemon**: Herramienta para reiniciar el servidor en desarrollo.

---

## 📂 Estructura del Proyecto

📁 backend/ ├── 📁 config/ # Configuración de la base de datos ├── 📁 controllers/ # Controladores (lógica de negocio) ├── 📁 models/ # Modelos de la base de datos ├── 📁 routes/ # Definición de rutas ├── 📁 migrations/ # Migraciones de la base de datos ├── 📁 seeders/ # Datos iniciales (si aplica) ├── 📁 utils/ # Funciones auxiliares ├── server.js # Archivo principal del servidor ├── package.json # Configuración del proyecto └── README.md # Documentación del proyecto


---

## 🖥️ Requisitos Previos

- Node.js (versión 18 o superior)
- PostgreSQL (versión 12 o superior)
- Postman (opcional, para pruebas de API)

---

## 🔧 Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/backend-telemedicina.git
   cd backend-telemedicina

2. **Instalar dependencias:**


    npm install

3 . **Configurar variables de entorno: Crea un archivo .env en la raíz del proyecto con los siguientes datos:**

    DB_HOST=localhost
    DB_USER=tu_usuario
    DB_PASSWORD=tu_contraseña
    DB_NAME=nombre_de_la_base_de_datos
    DB_PORT=5432
    PORT=5000

4. **Configurar la base de datos: Si estás usando Sequelize:**
    npx sequelize-cli db:create
    npx sequelize-cli db:migrate

5. **Iniciar el servidor:**
    npm run dev

El servidor estará corriendo en: http://localhost:5000