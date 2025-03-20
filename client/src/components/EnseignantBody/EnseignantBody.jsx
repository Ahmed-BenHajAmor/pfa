import React from 'react'

import { Button } from '../Button'
import { Emploi } from '../Emploi'
import { Title } from '../Title'
import { SigninApiCalls } from '../../apiCalls/signinApi'

function EnseignantBody() {
  
  return (
    <section className="page-section enseignant-section">

    <div style={{display: "flex", width: '100%', justifyContent:'end', marginBottom: "47px"}}>
          <Button onClick={SigninApiCalls.logout()}>Log out</Button>
    </div>
    <Title title={{text: "Votre emploi de temps", font: 36}} subTitle={"Gerer vos séances"}/>
    <section className='emploi-de-temps'> <Emploi  /></section>
    </section>
  )
}

export default EnseignantBody