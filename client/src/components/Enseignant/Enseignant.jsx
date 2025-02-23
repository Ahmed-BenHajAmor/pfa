import React, { useState } from 'react'
import './Enseignant.css'
import Emploi from '../emploi/Emploi';
import { Sidebar } from '../Sidebar'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';





function Enseignant() {
  return (
    <>
      <Sidebar userinfo={{username: "MR.Faouzi moussa"}} links={[{text: "Suivie présence", Icon: HowToRegIcon, highlighted: true}, {text: "Justifications vérifiées", Icon: CheckCircleRoundedIcon, highlighted: false}, {text: "Taux de présence", Icon: QueryStatsIcon, highlighted: false}]}/>
      
     <div className={'logout-div'}> <button className={'logout-button'}>Log out</button></div>
     <section className={'emploiDeTemps'}> <Emploi /></section>
    </>
  )
}



export default Enseignant;