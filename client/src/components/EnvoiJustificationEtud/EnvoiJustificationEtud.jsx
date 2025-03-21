import React, { useCallback } from 'react'
import './EnvoiJustificationEtud.css'
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { Button } from '..';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DateRangeIcon from '@mui/icons-material/DateRange';
import WatchIcon from '@mui/icons-material/Watch';
import { useDropzone } from 'react-dropzone';
function EnvoiJustificationEtud({username, links}) {
  return (
    <>
    <section className='page-section justification-section'>
      <div style={{display: "flex", width: '100%', justifyContent:'end', marginBottom: "47px"}}>
        <Button>log out</Button>
      </div>

      <section className='marquer-absence'>

        <section className='marquer-absence-input'>

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
        <FileDropZone />
      </section>
      
      <section className='envoyer-button'>
      
        <div></div>
      
        <div>
          <input className='button' type="button" value='Envoyer' name="" id="" />
        </div>
      
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

function FileDropZone() {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      <section className='justification-ajout'>
        <AddCircleOutlineIcon></AddCircleOutlineIcon>
        <label htmlFor="">
        {isDragActive ? (
          "déposer le fichier"
        ) : "Ajouter la piece jointe"}
        </label>
      </section>
      
    </div>
  );
}
export default EnvoiJustificationEtud;