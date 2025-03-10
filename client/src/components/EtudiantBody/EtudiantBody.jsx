import React from 'react'
import { AbsenceTable } from '../AbsenceTable'
import { MyGraph } from '../MyGraph'
import { CoherenceChart } from '../CoherenceChart'
import { JustificationImpactChart } from '../JustificationImpactChart'
import { Button } from '../Button'

function EtudiantBody() {
  return (
    <section className='page-section etudiant'>
        <div style={{display: "flex", width: '100%', justifyContent:'end', marginBottom: "47px"}}>
          <Button>Log out</Button>
        </div>
        <div className='etudiant-stats '>
          <div style={{ boxShadow:'0px 2px 6px 0px rgb(211, 211, 214)',borderRadius:'20px',padding:'32px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><MyGraph/></div>
          <div style={{ boxShadow:'0px 2px 6px 0px rgb(211, 211, 214)',borderRadius:'20px',padding:'32px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><CoherenceChart/></div>
          <div style={{ boxShadow:'0px 2px 6px 0px rgb(211, 211, 214)',borderRadius:'20px',padding:'32px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><JustificationImpactChart/></div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} ><AbsenceTable/></div>
          
          
        </div>
      </section>
  )
}

export default EtudiantBody