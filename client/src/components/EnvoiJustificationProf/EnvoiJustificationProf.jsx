import React from 'react'
import './EnvoiJustificationProf.css'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { Button, Sidebar } from '..';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import WatchIcon from '@mui/icons-material/Watch';
import DateRangeIcon from '@mui/icons-material/DateRange';

function EnvoiJustificationProf({username, links}) {
  return (
    <>
    <Sidebar userinfo={{username: "MR.Faouzi moussa"}} links={[{text: "Suivie présence", Icon: HowToRegIcon, highlighted: false}, {text: "Justifications vérifiées", Icon: CheckCircleRoundedIcon, highlighted: true}, {text: "Taux de présence", Icon: QueryStatsIcon, highlighted: false}]}/>
    <section className='page-section justification-section'>
      <div className='logout' style={{display: "flex", width: '100%', justifyContent:'end', marginBottom: "47px"}}>
        <Button>Se Deconnecter</Button>
      </div>

      <section className="main">

        <section className='marquerabsence'>

          <section className='Input'>

            <h1>Marquer votre absence</h1>

            <div className='input-fields' >
              <Input text="Date de Debut "/>
              <Input text="Heure de Debut "/>
            </div>

            <div className='input-fields' >
              <Input text="Date de Fin "/>
              <Input text="Heure de Fin "/>
            </div>

            <div style={{width:"96%"}} >
              <Input text="Motif"/>
            </div>

          </section>

          <section className='justification-ajout'>

            <div>
              <AddCircleOutlineIcon></AddCircleOutlineIcon>
              <label htmlFor="">Ajouter une preuve</label>
            </div>
          </section>
        </section>

        <section className='envoyer-button'>
        
          <div></div>
        
          <div>
            <input className='button' type="button" value='Envoyer' name="" id="" />
          </div>
        
        </section>

      </section>

    </section>
    </>
  )
}

function Input({text}){
  return (
    <div>
      <label htmlFor="">{text}<span className='etoile'> *</span></label><br /><input type="text"/>
    </div>
  )
}

export default EnvoiJustificationProf;