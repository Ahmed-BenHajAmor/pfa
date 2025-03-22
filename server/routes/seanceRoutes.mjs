import express from 'express';
import pool from '../db_connection/db.mjs';

const seanceRoutes = express.Router();


seanceRoutes.get('/session', async (req, res) => {
  const {id_enseignant} = req.query
  
  if (!id_enseignant){
    res.sendStatus(500)
  }
  try {
    const [rows] = await pool.query('SELECT * FROM session JOIN matiere ON session.id_mat = matiere.id_mat WHERE id_enseignant = ?',[id_enseignant]);
    
    res.json(rows);
  } catch (error) {
    console.error('Erreur lors de la récupération des séances:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});


export default seanceRoutes;