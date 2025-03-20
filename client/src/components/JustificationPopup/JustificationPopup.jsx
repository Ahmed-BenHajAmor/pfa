import React from 'react'
import './JustificationPopup.css'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function JustificationPopup({popupInfo, setPopupInfo}) {
    console.log(popupInfo );
    
    const dataToShow = {
        cin: popupInfo.data.cin,
        nom: popupInfo.data.nom,
        prenom: popupInfo.data.prenom,
        motif: popupInfo.data.motif,
        date_soumission: popupInfo.data.date_soumission,
        date_et_heure_de_debut: popupInfo.data.date_et_heure_de_debut,
        date_et_heure_de_fin: popupInfo.data.date_et_heure_de_fin,
    }
    const keysObject = {
        cin: "cin",
        nom: "nom",
        motif: "motif",
        date_soumission: "date soumission",
        date_et_heure_de_debut: "date et heure de debut",
        date_et_heure_de_fin: "date et heure de fin",
        prenom: "prenom",
    }

  return (
    <section className="justification-popup-container">
        <div className="justification-popup">
        <div className="popup-header">
            <p><b>Les détails de la justification de</b> Ahmed Ben haj amor</p>
            <HighlightOffIcon onClick={()=>{
                setPopupInfo({...popupInfo, show: false})
            }} style={{cursor: "pointer"}} />
        </div>

        <div className="line"></div>

        <table>
            <tbody>

            {Object.entries(dataToShow).map(([key, value])=>{
                return (
                    <tr>
                        <td>{keysObject[key]}</td>
                        <td>{value}</td>
                    </tr>
                )
            })}
            <tr>
                <td>statut</td>
                <td>{popupInfo.data.id_etudiant == null ? 'Enseignant' : "Etudiant"}</td>
            </tr>
            {popupInfo.data.id_etudiant !== null &&
            <>
            <tr>
                <td>section</td>
                <td>{popupInfo.data.nom_section}</td>
            </tr>
            <tr>
                <td>groupe</td>
                <td>{popupInfo.data.groupe}</td>
            </tr>
            </>
            }
            <tr>
                <td>piece jointe</td>
                <td><a href="#">Telecharger</a></td>
            </tr>
            </tbody>
        </table>
        <div className='decision-btns'>

            <button className="accept-button" >Accepter la justification</button>
            <button className="reject-button" >Rejeter la justification</button>
        </div>
    </div>
    </section>
  )
}

export default JustificationPopup