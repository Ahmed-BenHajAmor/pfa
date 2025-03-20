import React, { useContext, useState } from 'react'
import './Enseignant.css'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { Sidebar } from '..';
import { Outlet } from 'react-router';
import { Context } from '../../App';





function Enseignant() {
  const {user} = useContext(Context)
  const [sideBarLinksArray, setSideBarLinksArray] = useState([
    {text: "Suivie présence", Icon: HowToRegIcon, highlighted: true, route:'/'}, {text: "Justifications vérifiées", Icon: CheckCircleRoundedIcon, highlighted: false,
     route:'/envoyer-justification'}
    ])
  return (
    <>
      <Sidebar userinfo={{username: `${user?.prenom} ${user?.nom}`}} links={sideBarLinksArray} setSideBarLinksArray={setSideBarLinksArray}/>
      <Outlet />
    </>
  )
}



export default Enseignant;