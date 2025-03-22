import express from 'express';
import pool from '../db_connection/db.mjs';

const seanceRoutes = express.Router();

// Route pour récupérer les séances
seanceRoutes.get('/session', async (req, res) => {
  const {id_enseignant} = req.query
  if (!id_enseignant){
    res.sendStatus(500)
  }
  try {
    const [rows] = await pool.query(`
     SELECT * from session join matiere on session.id_mat = matiere.id_mat where id_enseignant=?;`,[id_enseignant]);
  
    res.json(rows);
  } catch (error) {
    console.error('Erreur lors de la récupération des séances:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Route de test
seanceRoutes.get('/api/test', (req, res) => {
  res.json({ message: 'Routeur fonctionne' });
});

export default seanceRoutes;