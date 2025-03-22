import React, { useEffect } from "react";
import "./EtudiantPopup.css";

function EtudiantPopup({ onClose, studentList }) {
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
            return <tr>
            <td>{student.prenom} {student.nom}</td>
            <td  ><button className='boutton-present'>Présent(e)</button><button className='boutton-absent'>Absent(e)</button></td>
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
