import React from 'react'
import './Etudiant.css'
import {AbsenceTable, Button, MyGraph, Sidebar,JustificationStats,CoherenceChart, JustificationImpactChart} from '../'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import QueryStatsIcon from '@mui/icons-material/QueryStats';




function Etudiant() {
    return (
      <>
          <Sidebar userinfo={{username: "Mechergui wassim", details: "LCS2 G2 2024/2025"}} links={[{text: "Taux de présence", Icon: QueryStatsIcon, highlighted: true}, {text: "Justifications vérifiées", Icon: CheckCircleRoundedIcon, highlighted: false}]}/>
          <section className='page-section etudiant'>
            <div style={{display: "flex", width: '100%', justifyContent:'end', marginBottom: "47px"}}>
              <Button>Log out</Button>
            </div>
            <div className='etudiant-stats '>
              <div style={{boxShadow:'0px 2px 6px 0px rgb(211, 211, 214)',borderRadius:'20px',padding:'32px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><MyGraph/></div>
              <div style={{boxShadow:'0px 2px 6px 0px rgb(211, 211, 214)',borderRadius:'20px',padding:'32px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><CoherenceChart/></div>
              <div style={{boxShadow:'0px 2px 6px 0px rgb(211, 211, 214)',borderRadius:'20px',padding:'32px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><JustificationImpactChart/></div>
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} ><AbsenceTable/></div>
              
              
            </div>
          </section>

      </>
    )
  }
export default Etudiant