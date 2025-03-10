import React, { useState } from 'react'
import './Etudiant.css'
import {AbsenceTable, Button, MyGraph, Sidebar,JustificationStats,CoherenceChart, JustificationImpactChart, EtudiantBody} from '../'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { Outlet } from 'react-router';




function Etudiant() {
  const [sideBarLinksArray, setSideBarLinksArray] = useState([
    {text: "Taux de présence", Icon: QueryStatsIcon, highlighted: true, route: '/'}, 
    {text: "Justifications vérifiées", Icon: CheckCircleRoundedIcon, highlighted: false, route: '/envoyer-justification'}
  ])
    return (
      <>
          <Sidebar userinfo={{username: "Mechergui wassim", details: "LCS2 G2 2024/2025"}} links={sideBarLinksArray} setSideBarLinksArray={setSideBarLinksArray}/>
          <Outlet />

      </>
    )
  }
export default Etudiant