import React from 'react'
import './JustificationsTable.css'

function JustificationsTable({justificationsArray}) {
  return (
    <table className='justifications-table'>
        <thead>
            <tr>
                <th>CIN</th>
                <th>Nom</th>
                <th>Statut</th>
                <th>Motif</th>
                <th>details</th>
            </tr>
        </thead>
        <tbody>
            {justificationsArray.map(justif=>{
                return (
                    <tr className={justif.status.toLowerCase() == "etudiant" ? 'student-row' : 'professor-row'}>
                        <td>{justif.cin}</td>
                        <td>{justif.name}</td>
                        <td>{justif.status}</td>
                        <td>{justif.motif}</td>
                        <td> <p style={{color: "#007BFF", textDecoration: "underline", cursor: "pointer", width: "fit-content"}}> Voir les détails de la justification</p></td>
                    </tr>
                )
            })}
        </tbody>
    </table>
  )
}

export default JustificationsTable