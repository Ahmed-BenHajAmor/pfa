import React from 'react';

const AbsenceTable = () => {
  // Table data
  const tableData = [
    { matiere: 'Algorithme', etat: 'Éliminé pour absence (3/3)' },
    { matiere: '2CN', etat: 'Absence partielle (1/3)' },
    { matiere: 'Anglais', etat: 'Aucune absence (0/3)' },
    { matiere: 'Math', etat: 'Proche du seuil (2/3)' },
  ];

  return (
    <div style={{ margin: '20px' }}>
      <h2>Tableau des Absences</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Matière</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>État</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => {
            // Définir la couleur de fond en fonction de l'état
            let backgroundColor = 'transparent';
            if (row.etat === 'Éliminé pour absence (3/3)') {
              backgroundColor = '#FF6B6B'; // Rouge clair
            } else if (row.etat === 'Proche du seuil (2/3)') {
              backgroundColor = '#9F6411'; // Couleur spécifique pour "Proche du seuil"
            }

            return (
              <tr
                key={index}
                style={{
                  border: '1px solid #ddd',
                  backgroundColor: backgroundColor, // Appliquer la couleur de fond
                  color: backgroundColor !== 'transparent' ? 'black' : '#000', // Changer la couleur du texte si nécessaire
                }}
              >
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>{row.matiere}</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>{row.etat}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AbsenceTable;