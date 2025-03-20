import React, { useEffect, useState } from 'react'
import './JustificationsTable.css'
import { Title } from '../Title'
import { AdminApiCalls } from '../../apiCalls/admin'
import { data } from 'react-router'

function JustificationsTable({setPopupInfo}) {
  const tableHead = ["CIN", "Nom", "Statut", "Motif", "details"]
  const [justificationsArray, setJustificationsArray] = useState([])
  useEffect(()=>{
   
    AdminApiCalls.getJustifications(setJustificationsArray);

 
  }, [])
  
  
  if(justificationsArray.length == 0){
    return <div className="empty-justifications-container justifications-container">
    <Title title={{text: "Aucune justification en attente de vérification n'a été trouvée.", font: 24}} subTitle={"Il n'existe aucun justificatif en attente de vérification."}/>
  </div>
  }
  return (
    <div className='justifications-container'>

    <table className='justifications-table'>
        <thead>
            <tr>
                {tableHead.map(str=>{
                    return <th>{str}</th>
                })}
               
            </tr>
        </thead>
        <tbody>
            {justificationsArray.map(justif=>{
                
                return (
                    <tr key={justif.id_justif} className={justif.id_enseignant == null ? 'student-row' : 'professor-row'}>
                        <td>{justif.cin}</td>
                        <td>{justif.nom}</td>
                        <td>{justif.id_etudiant ? 'Etudiant' : 'Enseignant'}</td>
                        <td>{justif.motif}</td>
                        <td> <p onClick={()=>{
                            const {_id, ...data} = justif
                            setPopupInfo(popupInfo => {
                                return {data, show: !popupInfo.show}
                            })
                        }} style={{color: "#007BFF", textDecoration: "underline", cursor: "pointer", width: "fit-content"}}> Voir les détails de la justification</p></td>
                    </tr>
                )
            })}
        </tbody>
    </table>
    </div>
  )
}

export default JustificationsTable