import React, { useCallback, useState } from 'react'
import './EnvoiJustificationEtud.css'
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { Button } from '..';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DateRangeIcon from '@mui/icons-material/DateRange';
import WatchIcon from '@mui/icons-material/Watch';
import { useDropzone } from 'react-dropzone';
import { JustificationApiCalls } from '../../apiCalls/justificationApiCalls';
function EnvoiJustificationEtud({username, links}) {
  const [file,setFile] = useState()
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
        <FileDropZone setFile={setFile}/>
      </section>
      
      
      <button className='button-justification' type="submit" >Envoyer</button>
    
      


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

function FileDropZone(setFile) {
  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0])
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