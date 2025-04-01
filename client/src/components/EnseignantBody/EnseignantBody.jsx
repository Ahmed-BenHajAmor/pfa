import React, { useContext, useEffect, useState } from 'react'

import { Button } from '../Button'
import { Emploi } from '../Emploi'
import { Title } from '../Title'
import { useNavigate } from 'react-router'
import { Context } from '../../App'
import { EnseignantApi } from '../../apiCalls/enseignantApi'
import { ShowSidebar } from '../ShowSidebar'

function EnseignantBody() {
  const [emploiData, setEmploiData] = useState([])
  const {user} = useContext(Context)
  useEffect(()=>{
    EnseignantApi.getSessions(user.id, setEmploiData)
  }, [])
  
  return (
    <section className="page-section enseignant-section">

    <div style={{display: "flex", width: '100%', justifyContent:'end', marginBottom: "47px"}}>
          <Button>Se Déconnecter</Button>
    </div>
    <Title title={{text: "Votre emploi de temps", font: 36}} subTitle={"Gerer vos séances"}/>
    <section className='emploi-de-temps'> <Emploi emploiData={emploiData} /></section>
    </section>
  )
}

export default EnseignantBody