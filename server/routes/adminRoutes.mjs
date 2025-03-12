import express from 'express';
import pool from '../db_connection/db.mjs';
import verifyToken from '../utils/midelwares/verifyToken.mjs';

const adminRoute = express.Router();

adminRoute.get('/', verifyToken,async (req, res) => {
  console.log(req.user.id);
  
  try {
    
    const [rows] = await pool.query('SELECT * FROM justification');
    
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default adminRoute;
