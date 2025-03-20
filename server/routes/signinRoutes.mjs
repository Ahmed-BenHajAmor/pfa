import express from 'express';
import pool from '../db_connection/db.mjs';
import jwt from 'jsonwebtoken';

const signinRoutes = express.Router();

signinRoutes.post('/signin', async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ error: 'Please provide both email and password.' });
    }
  
    try {
      var statut = 'Etudiant'
      var [rows] = await pool.query('SELECT * FROM etudiant JOIN section on etudiant.id_section = section.id_section WHERE email = ?', [email]);
      
      if (rows.length === 0) {
        
        statut = 'Enseignant'
        var [rows] = await pool.query('SELECT * FROM enseignant WHERE email = ?', [email]);
        
        if (rows.length === 0) {
          return res.status(404).json({ error: 'User not found.' });
        }
        
      }
      const user = rows[0];
      
      const passwordMatch = password == user.mdp // await bcrypt.compare(password, user.password);
      
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials.' });
      }
      
      const token = jwt.sign({ id: user.id, email: user.email }, '123', { expiresIn: '1h' });
      
      res.json({ message: 'Sign-in successful', token, user: {...user, statut} });
    } catch (error) {
      
      res.status(500).json({ error: 'Internal server error.' });
    }
  });

export default signinRoutes;
