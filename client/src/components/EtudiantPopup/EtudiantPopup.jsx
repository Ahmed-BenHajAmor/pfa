import React, { useEffect } from "react";
import "./EtudiantPopup.css";
import ListeEtudiant from "../ListeEtudiant/ListeEtudiant";

function EtudiantPopup({ onClose }) {
  // ✅ Block scrolling when popup appears
  useEffect(() => {
    document.getElementsByClassName("enseignant-section")[0].style.overflow = "hidden"; // Disable scrolling
    document.getElementsByClassName("Etudiant-popup-container")[0].style.marginTop = `${document.getElementsByClassName("enseignant-section")[0].scrollTop}px`
    
    return () => {
      document.body.style.overflow = "auto"; // Restore scrolling when popup closes
      document.getElementsByClassName("enseignant-section")[0].style.overflow = "auto"; 
    };
  }, []);

  // ✅ Close popup when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("Etudiant-popup-container")) {
      onClose();
    }
  };

  return (
    <section className="Etudiant-popup-container" onClick={handleOverlayClick}>
      <div className="Etudiant-popup">
       

    

        <ListeEtudiant />
      </div>
    </section>
  );
}

export default EtudiantPopup;
