// src/routes.ts
import express, { Request, Response } from 'express';
import client from './models/database';

const router = express.Router();

// Obtener todos los usuarios
router.get('/usuarios', async (req: Request, res: Response) => {
  try {
    const result = await client.query('SELECT * FROM usuarios');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

// Obtener todas las imágenes
router.get('/imagenes', async (req: Request, res: Response) => {
  try {
    const result = await client.query('SELECT * FROM userimg');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error al obtener imágenes:', error);
    res.status(500).json({ error: 'Error al obtener imágenes' });
  }
});

// Obtener todos los hechos
router.get('/hechos', async (req: Request, res: Response) => {
  try {
    const result = await client.query('SELECT * FROM hechos');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error al obtener hechos:', error);
    res.status(500).json({ error: 'Error al obtener hechos' });
  }
});

// Crear un nuevo hecho
router.post('/hechos', async (req: Request, res: Response) => {
  const { id_usuario, estado } = req.body;
  const fecha = new Date();

  try {
    const result = await client.query(
      'INSERT INTO hechos(id_usuario, fecha, estado) VALUES($1, $2, $3) RETURNING *',
      [id_usuario, fecha, estado]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error al crear un hecho:', error);
    res.status(500).json({ error: 'Error al crear un hecho' });
  }
});

// Registrar un nuevo usuario
router.post('/usuarios', async (req: Request, res: Response) => {
  const { id_usuario, nombre, id_huella } = req.body;

  try {
    const result = await client.query(
      'INSERT INTO usuarios(id_usuario, nombre, id_huella) VALUES($1, $2, $3) RETURNING *',
      [id_usuario, nombre, id_huella]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error al registrar un usuario:', error);
    res.status(500).json({ error: 'Error al registrar un usuario' });
  }
});

export default router;
