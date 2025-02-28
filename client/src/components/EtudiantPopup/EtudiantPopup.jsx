import React, { useEffect } from "react";
import "./EtudiantPopup.css";
import ListeEtudiant from "../ListeEtudiant/ListeEtudiant";

function EtudiantPopup({ onClose }) {
  // ✅ Block scrolling when popup appears
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scrolling
    return () => {
      document.body.style.overflow = "auto"; // Restore scrolling when popup closes
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
      <div className=" blur-overlay">
        <ListeEtudiant />
      </div>
    </section>
  );
}

export default EtudiantPopup;
