import express from 'express';
import pool from '../db_connection/db.mjs';
import verifyToken from '../utils/midelwares/verifyToken.mjs';

const usersRoutes = express.Router();

usersRoutes.get('/user', verifyToken, async (req, res) => {
    const userId = req.user.id;
    
    try {
        const [rows] = await pool.query('SELECT * FROM etudiant WHERE id = ?', [userId]);

        if (rows.length === 0) {
            [rows] = await db.query('SELECT * FROM enseignant WHERE id = ?', [userId]);
            return res.status(404).json({ error: 'User not found.' });
        }

        res.json(rows[0]);
    } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
    }
})

export default usersRoutes;
