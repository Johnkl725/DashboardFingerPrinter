"use strict";
// src/models/database.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
// Cargar las variables de entorno desde el archivo .env
dotenv_1.default.config();
// Crear el cliente de la base de datos PostgreSQL
const client = new pg_1.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});
// Conectar a la base de datos
client.connect()
    .then(() => console.log('Conexión a la base de datos PostgreSQL exitosa!'))
    .catch((err) => console.error('Error al conectar a la base de datos:', err));
exports.default = client;
