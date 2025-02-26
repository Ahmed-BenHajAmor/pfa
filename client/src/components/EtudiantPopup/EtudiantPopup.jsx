import React, { useEffect } from "react";
import "./EtudiantPopup.css";
import ListeEtudiant from "../ListeEtudiant/ListeEtudiant";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function  EtudiantPopup({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scrolling
    return () => {
      document.body.style.overflow = "auto"; 
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
       

    

        <ListeEtudiant />
      </div>
    </section>
  );
}

export default EtudiantPopup;
