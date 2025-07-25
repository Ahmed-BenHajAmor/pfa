import React, { useEffect, useState } from 'react'
import { AbsenceTable } from '../AbsenceTable'
import { MyGraph } from '../MyGraph'
import { CoherenceChart } from '../CoherenceChart'
import { JustificationImpactChart } from '../JustificationImpactChart'
import { Button } from '../Button'
import { EtudiantApis } from '../../apiCalls/etudiantApiCalls'

function EtudiantBody() {
  const [etudiantStats, setEtudiantStats] = useState({})
  const [etudiantElim, setEtudiantElim] = useState({})
  useEffect(()=>{
    EtudiantApis.getAttendanceStats(setEtudiantStats);
    EtudiantApis.getJustificationImpact(setEtudiantStats);
    EtudiantApis.getConsistency(setEtudiantStats);
    EtudiantApis.getEliminationCount(setEtudiantElim);
  }, [])
  return (
    <section className='page-section etudiant'>
        <div style={{display: "flex", width: '100%', justifyContent:'end', marginBottom: "47px"}}>
          <Button>Se Déconnecter</Button>
        </div>
        <div className='etudiant-stats ' style={{display: "flex" ,flexWrap:'wrap'}}>
          <div style={{flexBasis:'200', flexGrow:'1' ,boxShadow:'0px 2px 6px 0px rgb(211, 211, 214)',borderRadius:'20px',padding:'32px'}}><MyGraph etudiantStats={etudiantStats}/></div>
          <div style={{flexBasis:'200', flexGrow:'1' , boxShadow:'0px 2px 6px 0px rgb(211, 211, 214)',borderRadius:'20px',padding:'32px'}}><CoherenceChart etudiantStats={etudiantStats}/></div>
          <div style={{flexBasis:'200', flexGrow:'1' , boxShadow:'0px 2px 6px 0px rgb(211, 211, 214)',borderRadius:'20px',padding:'32px'}}><JustificationImpactChart etudiantStats={etudiantStats}/></div>
          <div style={{flexBasis:'200', flexGrow:'1' , display: 'flex', justifyContent: 'center', alignItems: 'center'}} ><AbsenceTable etudiantElim={etudiantElim}/></div>
          
          
        </div>
      </section>
  )
}

export default EtudiantBody