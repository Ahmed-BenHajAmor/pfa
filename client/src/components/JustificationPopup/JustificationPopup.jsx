import React from 'react'
import './JustificationPopup.css'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { AdminApiCalls } from '../../apiCalls/admin';

function downloadPieceJointe(e, jsonData) {
    const bufferData = jsonData.data.piece_jointe.data;

    const uint8Array = new Uint8Array(bufferData);

    let mimeType = getMimeType(bufferData);
    
    const blob = new Blob([uint8Array], { type: mimeType });

    const url = window.URL.createObjectURL(blob);

    e.target.href = url;
    const fileExtension = getFileExtension(mimeType);
    e.target.download = `piece_jointe${fileExtension}`; 

    setTimeout(() => window.URL.revokeObjectURL(url), 100);
}

function getMimeType(bufferData) {
    const magicNumbers = bufferData.slice(0, 4); 

    if (magicNumbers[0] === 137 && magicNumbers[1] === 80 && magicNumbers[2] === 78 && magicNumbers[3] === 71) {
        return "image/png"; // PNG
    } else if (magicNumbers[0] === 255 && magicNumbers[1] === 216) {
        return "image/jpeg"; // JPEG
    } else if (magicNumbers[0] === 37 && magicNumbers[1] === 80 && magicNumbers[2] === 68 && magicNumbers[3] === 70) {
        return "application/pdf"; // PDF
    } else {
        return "application/octet-stream";
    }
}

function getFileExtension(mimeType) {
    switch (mimeType) {
        case "image/png":
            return ".png";
        case "image/jpeg":
            return ".jpg";
        case "application/pdf":
            return ".pdf";
        default:
            return "";
    }
}
function JustificationPopup({popupInfo, setPopupInfo}) {
    console.log(popupInfo);
    
     
    
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
                <td><a href='#' onClick={(e)=>downloadPieceJointe(e,popupInfo)}>Telecharger</a></td>
            </tr>
            </tbody>
        </table>
        <div className='decision-btns'>

            <button onClick={()=>AdminApiCalls.handelJustificationVerification(popupInfo.data.id_justif, "valide", setPopupInfo)} className="accept-button" >Accepter la justification</button>
            <button onClick={()=>AdminApiCalls.handelJustificationVerification(popupInfo.data.id_justif, "rejete", setPopupInfo)} className="reject-button" >Rejeter la justification</button>
        </div>
    </div>
    </section>
  )
}

export default JustificationPopup