import React from 'react'
import './Etudiant.css'
import {Button, Sidebar} from '../'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import QueryStatsIcon from '@mui/icons-material/QueryStats';



function Etudiant() {
    return (
      <>
          <Sidebar userinfo={{username: "Mechergui wassim", details: "LCS2 G2 2024/2025"}} links={[{text: "Taux de présence", Icon: QueryStatsIcon, highlighted: true}, {text: "Justifications vérifiées", Icon: CheckCircleRoundedIcon, highlighted: false}]}/>
          <div className='logout'><Button>Log out</Button></div>
          

      </>
    )
  }
export default Etudiant