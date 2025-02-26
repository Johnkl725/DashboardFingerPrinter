// src/models/database.ts

import { Client } from 'pg';
import dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// Crear el cliente de la base de datos PostgreSQL
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Conectar a la base de datos
client.connect()
  .then(() => console.log('Conexión a la base de datos PostgreSQL exitosa!'))
  .catch((err) => console.error('Error al conectar a la base de datos:', err));

export default client;
