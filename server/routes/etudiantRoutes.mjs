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

etudiantRoutes.get('/student-stats/month-consistency', verifyToken, async (req, res) => {
    const { id } = req.user;
    if (!id) {
        return res.sendStatus(500);
    }
    try {
        const today = new Date(); 
   
        

        const findScore = (week)=>{
            
            var res = 0
            for(const el of week){
                
                if(el.etat == "present") {
                    
                    res++
                }
            }
            return (res / week.length)*100
        }

        const main = async (today)=>{
            
            const previousMonth = today.getMonth() == 0 ? 11 : today.getMonth() - 1; 
            const year = today.getMonth() == 0 ? today.getFullYear() - 1 : today.getFullYear();

            const firstDayOfAllWeeksOfThisMonth = [
                new Date(Date.UTC(year, previousMonth, 1)),  
                new Date(Date.UTC(year, previousMonth, 8)),  
                new Date(Date.UTC(year, previousMonth, 15)), 
                new Date(Date.UTC(year, previousMonth, 22))  
            ];

        

            const firstDayOfAllWeeksOfThisMonthFormatted = firstDayOfAllWeeksOfThisMonth.map(date => 
                date.toISOString().split('T')[0]
            );
            const lastDayOfMonthFormatted = new Date(Date.UTC(year, previousMonth + 1, 0)).toISOString().split('T')[0];
            
            const [firstWeek] = await pool.query(
                'SELECT * FROM presence WHERE id_etudiant = ? AND date_session BETWEEN ? AND ?',
                [id, firstDayOfAllWeeksOfThisMonthFormatted[0], firstDayOfAllWeeksOfThisMonthFormatted[1]]
            );
            const [secondWeek] = await pool.query(
                'SELECT * FROM presence WHERE id_etudiant = ? AND date_session BETWEEN ? AND ?',
                [id, firstDayOfAllWeeksOfThisMonthFormatted[1], firstDayOfAllWeeksOfThisMonthFormatted[2]]
            );
            const [thirdWeek] = await pool.query(
                'SELECT * FROM presence WHERE id_etudiant = ? AND date_session BETWEEN ? AND ?',
                [id, firstDayOfAllWeeksOfThisMonthFormatted[2], firstDayOfAllWeeksOfThisMonthFormatted[3]]
            );
            const [fourthWeek] = await pool.query(
                'SELECT * FROM presence WHERE id_etudiant = ? AND date_session BETWEEN ? AND ?',
                [id, firstDayOfAllWeeksOfThisMonthFormatted[3], lastDayOfMonthFormatted]
            );

            const formatDate = (date) => {
                const d = new Date(date);
                const offset = d.getTimezoneOffset(); // Offset in minutes (e.g., -60 for UTC+1)
                const adjustedDate = new Date(d.getTime() - offset * 60 * 1000);
                return adjustedDate.toISOString().split('T')[0];
            };

            const firstWeekFormatted = firstWeek.map(row => ({
                ...row,
                date_session: formatDate(row.date_session)
            }));
            const secondWeekFormatted = secondWeek.map(row => ({
                ...row,
                date_session: formatDate(row.date_session)
            }));
            const thirdWeekFormatted = thirdWeek.map(row => ({
                ...row,
                date_session: formatDate(row.date_session)
            }));
            const fourthWeekFormatted = fourthWeek.map(row => ({
                ...row,
                date_session: formatDate(row.date_session)
            }));

       
         
            return {
                firstWeekScore: findScore(firstWeekFormatted),
                secondWeekScore: findScore(secondWeekFormatted),
                thirdWeekScore: findScore(thirdWeekFormatted),
                fourthWeekScore: findScore(fourthWeekFormatted) ,
            }
        }
        
        
        res.status(200).json({
            thisMonth: {
                ...await main(today)
            },
            previousMonth: {
                ...await main(new Date(today.getMonth() == 0 ? today.getFullYear() - 1 : today.getFullYear(), today.getMonth() == 0 ? 11 : today.getMonth() - 1, today.getDay()))
            }
            

            // previousMonthFirstWeekScore: findScore(firstWeekFormatted),
            // previousMonthSecondWeekScore: findScore(secondWeekFormatted),
            // previousMonthThirdWeekScore: findScore(thirdWeekFormatted),
            // previousMonthFourthWeekScore: findScore(fourthWeekFormatted) 

        });
    } catch (err) {
        console.log(err);
        res.status(400).send({ msg: 'Internal server error' });
    }
});

etudiantRoutes.get('/student-stats/elimination-count', verifyToken, async (req, res)=>{
    const {id} = req.user
    if(!id){
        return res.sendStatus(500);
    }
    try{

       
        const [nb_absence_mat] = await pool.query('select matiere.nom as nom_mat , COUNT(*) as nb_absence from presence join session on presence.id_session = session.id_session join matiere on session.id_mat = matiere.id_mat where id_etudiant =? and etat = ? group by matiere.nom', [id, 'absent'])
        const [mat_zero_absence] =await pool.query('select nom as nom_mat ,"0" as nb_absence from matiere where id_mat not in (select session.id_mat from session join presence on presence.id_session=session.id_session  WHERE presence.id_etudiant = ? and presence.etat="absent")',[id])
        const totale=nb_absence_mat.concat(mat_zero_absence)

        res.status(200).json(totale);
   
    
    }catch(err){
        console.log(err);
        
        res.status(400).send({msg: 'Internal server error'})
    }
})
export default etudiantRoutes;