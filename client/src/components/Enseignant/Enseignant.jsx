import React, { useState } from 'react'
import './Enseignant.css'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { Button, Emploi, EtudiantPopup, Sidebar, Title } from '..';





function Enseignant() {
  const [showPopup, setShowPopup] = useState(false);
  
  return (
    <>
      <Sidebar userinfo={{username: "MR.Faouzi moussa"}} links={[{text: "Suivie présence", Icon: HowToRegIcon, highlighted: true}, {text: "Justifications vérifiées", Icon: CheckCircleRoundedIcon, highlighted: false}, {text: "Taux de présence", Icon: QueryStatsIcon, highlighted: false}]}/>
      <section className="page-section enseignant-section">

      <div style={{display: "flex", width: '100%', justifyContent:'end', marginBottom: "47px"}}>
            <Button>Log out</Button>
      </div>
      <Title title={{text: "Votre emploi de temps", font: 36}} subTitle={"Gerer vos séances"}/>
      <section className='emploi-de-temps'> <Emploi setShowPopup={setShowPopup} /></section>
      {showPopup && (
              <EtudiantPopup
                onClose={() => setShowPopup(false)}
              />
            )}
      </section>
    </>
  )
}



export default Enseignant;