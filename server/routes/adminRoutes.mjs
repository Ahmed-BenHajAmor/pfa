import express from 'express';
import pool from '../db_connection/db.mjs';
import verifyToken from '../utils/midelwares/verifyToken.mjs';

const adminRoute = express.Router();

adminRoute.get('/justifications', verifyToken,async (req, res) => {
  
  try {
    
    const [rowsEtudiant] = await pool.query('select * FROM justification JOIN etudiant ON etudiant.id = justification.id_etudiant JOIN section ON section.id_section = etudiant.id_section');
    const [rowsEnseignant] = await pool.query('select * FROM justification JOIN enseignant ON enseignant.id = justification.id_enseignant');
    const rows = [...rowsEtudiant, ...rowsEnseignant]

    rows.sort((a, b) => new Date(a.date_soumission) - new Date(b.date_soumission));
    
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default adminRoute;
