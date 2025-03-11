import express from 'express';
import pool from '../db_connection/db.mjs';

const adminRoute = express.Router();

adminRoute.get('/', async (req, res) => {
  try {
    console.log("in");
    
    const [rows] = await pool.query('SELECT * FROM justification');
    console.log(rows);
    
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default adminRoute;
