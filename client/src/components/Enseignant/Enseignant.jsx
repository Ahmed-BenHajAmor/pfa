import React, { useState } from 'react'
import './Enseignant.css'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { Sidebar } from '..';
import { Outlet } from 'react-router';





function Enseignant() {
  
  const [sideBarLinksArray, setSideBarLinksArray] = useState([
    {text: "Suivie présence", Icon: HowToRegIcon, highlighted: true, route:'/'}, {text: "Justifications vérifiées", Icon: CheckCircleRoundedIcon, highlighted: false,
     route:'/envoyer-justification'}, {text: "Taux de présence", Icon: QueryStatsIcon, highlighted: false, route:'/'}
    ])
  return (
    <>
      <Sidebar userinfo={{username: "MR.Faouzi moussa"}} links={sideBarLinksArray} setSideBarLinksArray={setSideBarLinksArray}/>
      <Outlet />
    </>
  )
}



export default Enseignant;