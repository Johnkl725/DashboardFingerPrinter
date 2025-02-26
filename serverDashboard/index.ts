// src/index.ts

import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './src/routes';

dotenv.config();

// Configuración del servidor Express
const app: Express = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Usar las rutas definidas en routes.ts
app.use(routes);

// Ruta principal para verificar si el servidor está funcionando
app.get('/', (req, res) => {
  res.send('Servidor de backend funcionando correctamente');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
