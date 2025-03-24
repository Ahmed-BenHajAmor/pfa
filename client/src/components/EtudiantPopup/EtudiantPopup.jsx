import React, { useEffect } from "react";
import "./EtudiantPopup.css";
import { UsersApiCalls } from "../../apiCalls/userApiCalls";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
function EtudiantPopup({ onClose, studentList, popupInfo, setStudentList }) {
  
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
       

    <p style={{display: "flex", justifySelf:"right", fontSize: '14px', marginBottom: '10px', fontWeight: '600', alignItems: 'center'}}><ReportProblemIcon style={{fontSize: '20px', marginRight: '10px'}} />double click pour sélectioner</p>

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
              <button disabled={student.attendanceToken} onDoubleClick={()=>UsersApiCalls.takeAttendance(student.id, popupInfo.id_session, popupInfo.date_session, 'present', setStudentList)} className={`boutton-present ${student.etat == 'absent' ? 'outline' : student.etat == 'present' ? "not-outlined" : ""}`}>Présent(e)</button>
              <button disabled={student.attendanceToken} onDoubleClick={()=>UsersApiCalls.takeAttendance(student.id, popupInfo.id_session, popupInfo.date_session, 'absent', setStudentList)} className={`boutton-absent ${student.etat == 'present' ? 'outline' : student.etat == 'absent' ? "not-outlined" : ""}`}>Absent(e)</button>
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
