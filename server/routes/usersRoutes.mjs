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


usersRoutes.get('/user/list-student', verifyToken, async (req, res)=>{
    const {id_section, date_session, id_session} = req.query
    
    if(!id_section){
        return res.sendStatus(500)
    }
    try{
        const [rows1] = await pool.query('SELECT nom, prenom, id FROM etudiant WHERE id_section = ?', [id_section]);
        const [rows2] = await pool.query('SELECT id_etudiant FROM presence WHERE date_session = ? AND id_session = ?', [date_session, id_session]);
        res.status(200).json(rows1.map(s=>{
            let attendanceToken = rows2.some(obj => obj.id_etudiant === s.id);;
            return {...s, attendanceToken}
        }))
    }catch(err){
        
        res.status(500).json({ error: 'Internal server error.' });
    }
})


usersRoutes.post('/user/take-attendance', verifyToken, async (req, res)=>{
    const {id_session, id_etudiant, date_session, etat} = req.body
    console.log(req.body);
    
    
    if(!(id_session && id_etudiant && date_session)){
        return res.sendStatus(500)
    }
    try{
        await pool.query('INSERT INTO presence VALUE (?,?,?,?)', [id_etudiant, etat, id_session, date_session]);
        res.sendStatus(200)
    }catch(err){
        res.status(500).json({ error: 'Internal server error.' });
    }
})
export default usersRoutes;
