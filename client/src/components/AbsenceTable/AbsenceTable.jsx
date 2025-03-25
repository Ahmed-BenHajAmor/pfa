import React from 'react';
import './AbsenceTable.css';

const AbsenceTable = ({etudiantElim}) => {

   
const absenceData = Array.isArray(etudiantElim) ? etudiantElim : [];
 
const getStatus = (etat) => {
  if (etat == 0) return 'Aucune absence';
  if (etat == 1) return 'Absence partielle';
  if (etat == 2) return 'Proche du seuil';
  if (etat >= 3) return 'Éliminé pour absence';
};
const getStatusClass = (etat) => {
  if (etat >= 3) return ' status eliminated';
  if (etat == 1) return 'status partial';
  if (etat == 0) return 'status none';
  if (etat == 2) return 'status near-threshold';
 
};


  return (
    
    <table className="attendance-table">
      <thead>
        <tr>
          <th>Matière</th>
          <th>État</th>
        </tr>
      </thead>
      <tbody>
      {absenceData.map((item, index) => {
        
        
        return <tr key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
        <td>{item.nom_mat }</td>
        <td className={`${getStatusClass(item.nb_absence)}`}>
          {getStatus(item.nb_absence)} ({item.nb_absence > 3 ? 3 :item.nb_absence}/3)</td>
      </tr>
      })
      }
      </tbody>
    </table>
  );
};

export default AbsenceTable;