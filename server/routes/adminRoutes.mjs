import express from 'express';
import pool from '../db_connection/db.mjs';
import verifyToken from '../utils/midelwares/verifyToken.mjs';

const adminRoute = express.Router();

adminRoute.get('/justifications',async (req, res) => {
  
  try {
    
    const [rowsEtudiant] = await pool.query('select * FROM justification JOIN etudiant ON etudiant.id = justification.id_etudiant JOIN section ON section.id_section = etudiant.id_section WHERE etat IS NULL');
    const [rowsEnseignant] = await pool.query('select * FROM justification JOIN enseignant ON enseignant.id = justification.id_enseignant WHERE etat IS NULL');
    const rows = [...rowsEtudiant, ...rowsEnseignant]

    rows.sort((a, b) => new Date(a.date_soumission) - new Date(b.date_soumission));
    
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


adminRoute.patch('/justifications/change-state',async (req, res) => {
  
  const {id_justification, state} = req.body
  
  if(!id_justification || !state){
    res.sendStatus(500)
  }
  try {
    
    const update = await pool.query('UPDATE justification SET etat = ? WHERE id_justif = ?', [state, id_justification]);
    
    res.sendStatus(200)
   
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default adminRoute;
