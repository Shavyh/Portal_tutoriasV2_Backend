const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const mysql = require('mysql2');

// Configurar el servidor Express
const app = express();
const port = 5000; // El puerto del backend
dotenv.config();

// Habilitar CORS
app.use(cors());
app.use(express.json());

// Configura la conexión con la base de datos MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos: ', err);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});

// Ruta de prueba para verificar la conexión
app.get('/api/usuario', (req, res) => {
    db.query('SELECT * FROM db_portaltutorias.usuario', (err, results) => {
        if (err) {
        return res.status(500).json({ message: 'Error al obtener usuarios' });
        }
        res.json(results);
    });
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});