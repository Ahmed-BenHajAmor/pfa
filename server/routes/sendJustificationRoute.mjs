import express from 'express';
import verifyToken from '../utils/midelwares/verifyToken.mjs';
import pool from '../db_connection/db.mjs';
import { v4 } from 'uuid';
import multer from "multer"
import fs from 'fs'

const sendJustificationRoute = express.Router();
const upload = multer({
    dest: 'uploads/', 
    limits: { fileSize: 10 * 1024 * 1024 }, 
  });

sendJustificationRoute.post('/justifications', verifyToken, upload.single('file'), async (req, res)=>{
    console.log(req.body);
    
    const {file} = req
    const {date_et_heure_de_debut, date_et_heure_de_fin, id_enseignant , id_etudiant, motif} = req.body
    if(!(date_et_heure_de_debut && date_et_heure_de_fin && id_enseignant  && id_etudiant && motif && file))
        return res.sendStatus(400);
    try{

        const filePath = file.path;
        const fileData = fs.readFileSync(filePath);
        await pool.query('INSERT INTO justification VALUE (?,?,?,?,?,?,?,?)', [v4(), motif, new Date(), date_et_heure_de_debut, date_et_heure_de_fin, fileData, id_enseignant, id_etudiant, null])
        fs.unlinkSync(filePath);
        res.sendStatus(200)
    }catch(err){
        res.status(500).send(err)
    }
})

export default sendJustificationRoute;
