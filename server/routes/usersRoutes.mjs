import express from 'express';
import pool from '../db_connection/db.mjs';
import verifyToken from '../utils/midelwares/verifyToken.mjs';

const usersRoutes = express.Router();

usersRoutes.get('/user', verifyToken, async (req, res) => {
    
    const {id: userId, email: userEmail} = req.user;
    
    try {
        var statut = 'Etudiant'
        var [rows] = await pool.query('SELECT * FROM etudiant JOIN section on etudiant.id_section = section.id_section WHERE id = ? and email = ?', [userId, userEmail]);
        
        if (rows.length === 0) {
            
            statut = 'Enseignant'
            var [rows] = await pool.query('SELECT * FROM enseignant WHERE id = ? and email = ?', [userId, userEmail]);
            
            if(rows.length === 0)
                return res.status(404).json({ error: 'User not found.' });
        }

        res.json({...rows[0], statut});
    } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
    }
})

export default usersRoutes;
