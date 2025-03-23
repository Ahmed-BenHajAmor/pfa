import React, { useEffect } from "react";
import "./EtudiantPopup.css";
import { UsersApiCalls } from "../../apiCalls/userApiCalls";

function EtudiantPopup({ onClose, studentList, popupInfo }) {
  useEffect(() => {
    document.getElementsByClassName("enseignant-section")[0].style.overflow = "hidden"; // Disable scrolling
    document.getElementsByClassName("Etudiant-popup-container")[0].style.marginTop = `${document.getElementsByClassName("enseignant-section")[0].scrollTop}px`
    
    return () => {
      document.body.style.overflow = "auto"; // Restore scrolling when popup closes
      document.getElementsByClassName("enseignant-section")[0].style.overflow = "auto"; 
    };
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("Etudiant-popup-container")) {
      onClose();
    }
  };

  return (
    <section className="Etudiant-popup-container" onClick={handleOverlayClick}>
      <div className="Etudiant-popup">
       

    

      <section className='table-etudiant'>
     <table>
          <thead>
            <tr>
              <th style={{width:"432px"}}>Nom</th>
              <th style={{width:"235px"}}>Etat</th>
            </tr>
          </thead>
      <tbody>
        {
          studentList.map(student=>{
            return <tr key={student.id}>
            <td>{student.prenom} {student.nom}</td>
            <td  >
              <button onClick={()=>UsersApiCalls.takeAttendance(student.id, popupInfo.id_session, popupInfo.date_session, 'present')} className='boutton-present'>Présent(e)</button>
              <button onClick={()=>UsersApiCalls.takeAttendance(student.id, popupInfo.id_session, popupInfo.date_session, 'absent')} className='boutton-absent'>Absent(e)</button>
            </td>
          </tr>
          })
        }  
        </tbody>  
  </table>
    </section>
      </div>
    </section>
  );
}

export default EtudiantPopup;
