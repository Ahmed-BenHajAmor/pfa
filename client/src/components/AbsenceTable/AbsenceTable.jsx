import React from 'react';
import './AbsenceTable.css'

const AbsenceTable = () => {
  // Table data
  const tableData = [
    { matiere: 'Algorithme', etat: 'Éliminé pour absence (3/3)' },
    { matiere: '2CN', etat: 'Absence partielle (1/3)' },
    { matiere: 'Anglais', etat: 'Aucune absence (0/3)' },
    { matiere: 'Math', etat: 'Proche du seuil (2/3)' },
  ];

  const getStatusClass = (etat) => {
    if (etat.includes('Éliminé')) return 'eliminated';
    if (etat.includes('Absence partielle')) return 'partial';
    if (etat.includes('Aucune absence')) return 'none';
    if (etat.includes('Proche du seuil')) return 'near-threshold';
    return '';
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
        {tableData.map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
            <td>{row.matiere}</td>
            <td className={`status ${getStatusClass(row.etat)}`}>{row.etat}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AbsenceTable;