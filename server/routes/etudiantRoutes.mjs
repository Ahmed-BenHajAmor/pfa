import express from 'express';
import verifyToken from '../utils/midelwares/verifyToken.mjs';
import pool from '../db_connection/db.mjs';


const etudiantRoutes = express.Router();

function isDateInRange(checkDate, startDate, endDate) {
    return new Date(checkDate) >= new Date(startDate) && new Date(checkDate) <= new Date(endDate);
}

etudiantRoutes.get('/student-stats/attendance-ratio', verifyToken, async (req, res)=>{
    const {id} = req.user
    if(!id){
        return res.sendStatus(500);
    }
    try{

        const [presence] = await pool.query('SELECT COUNT(*) AS presenceCount FROM presence where id_etudiant = ? AND etat = ?', [id, 'present'])
        const [absences] = await pool.query('SELECT * FROM presence where id_etudiant = ? AND etat = ?', [id, 'absent'])
        const [justifications] = await pool.query('SELECT * FROM justification WHERE id_etudiant = ? AND etat = ?', [id, 'valide'])
        var countAbsenceJustifier = 0
        
        for(let absence of absences){
            for(let justif of justifications){
                if(isDateInRange(absence.date_session, justif.date_et_heure_de_debut, justif.date_et_heure_de_fin)){
                    countAbsenceJustifier++
                }
                
            }
        }
        
        res.status(200).json({
            presence: presence[0].presenceCount,
            absence_non_justifier: absences.length - countAbsenceJustifier,
            absence_justifier: countAbsenceJustifier
        })
    }catch(err){
        console.log(err);
        
        res.status(400).send({msg: 'Internal server error'})
    }
})


etudiantRoutes.get('/student-stats/justification-impact', verifyToken, async (req, res)=>{
    const {id} = req.user
    if(!id){
        return res.sendStatus(500);
    }
    try{

       
        const [justificationsValid] = await pool.query('SELECT COUNT(*) AS valide FROM justification WHERE id_etudiant = ? AND etat = ?', [id, 'valide'])
        const [justificationsRejected] = await pool.query('SELECT COUNT(*) AS rejeter FROM justification WHERE id_etudiant = ? AND etat = ?', [id, 'rejete'])
        const [justificationsEnAttente] = await pool.query('SELECT COUNT(*) AS en_attente FROM justification WHERE id_etudiant = ? AND etat IS NULL', [id])
        
        
        
        res.status(200).json({
           valide: justificationsValid[0].valide,
           rejeter: justificationsRejected[0].rejeter,
           enAttente: justificationsEnAttente[0].en_attente
        })
    }catch(err){
        console.log(err);
        
        res.status(400).send({msg: 'Internal server error'})
    }
})
export default etudiantRoutes;