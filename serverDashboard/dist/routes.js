"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes.ts
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./models/database"));
const router = express_1.default.Router();
// Obtener todos los usuarios
router.get('/usuarios', async (req, res) => {
    try {
        const result = await database_1.default.query('SELECT * FROM usuarios');
        res.status(200).json(result.rows);
    }
    catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
});
// Obtener todas las imágenes
router.get('/imagenes', async (req, res) => {
    try {
        const result = await database_1.default.query('SELECT * FROM userimg');
        res.status(200).json(result.rows);
    }
    catch (error) {
        console.error('Error al obtener imágenes:', error);
        res.status(500).json({ error: 'Error al obtener imágenes' });
    }
});
// Obtener todos los hechos
router.get('/hechos', async (req, res) => {
    try {
        const result = await database_1.default.query('SELECT * FROM hechos');
        res.status(200).json(result.rows);
    }
    catch (error) {
        console.error('Error al obtener hechos:', error);
        res.status(500).json({ error: 'Error al obtener hechos' });
    }
});
// Crear un nuevo hecho
router.post('/hechos', async (req, res) => {
    const { id_usuario, estado } = req.body;
    const fecha = new Date();
    try {
        const result = await database_1.default.query('INSERT INTO hechos(id_usuario, fecha, estado) VALUES($1, $2, $3) RETURNING *', [id_usuario, fecha, estado]);
        res.status(201).json(result.rows[0]);
    }
    catch (error) {
        console.error('Error al crear un hecho:', error);
        res.status(500).json({ error: 'Error al crear un hecho' });
    }
});
// Registrar un nuevo usuario
router.post('/usuarios', async (req, res) => {
    const { id_usuario, nombre, id_huella } = req.body;
    try {
        const result = await database_1.default.query('INSERT INTO usuarios(id_usuario, nombre, id_huella) VALUES($1, $2, $3) RETURNING *', [id_usuario, nombre, id_huella]);
        res.status(201).json(result.rows[0]);
    }
    catch (error) {
        console.error('Error al registrar un usuario:', error);
        res.status(500).json({ error: 'Error al registrar un usuario' });
    }
});
exports.default = router;
