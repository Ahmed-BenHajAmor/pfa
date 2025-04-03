import React, { useCallback, useContext, useState } from 'react'
import './EnvoiJustificationEtud.css'
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { Button } from '..';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DateRangeIcon from '@mui/icons-material/DateRange';
import WatchIcon from '@mui/icons-material/Watch';
import { useDropzone } from 'react-dropzone';
import { JustificationApiCalls } from '../../apiCalls/justificationApiCalls';
import { Context } from '../../App';
import DoneIcon from '@mui/icons-material/Done';
function EnvoiJustificationEtud({username, links}) {
  const {user} = useContext(Context)
  
  const [file,setFile] = useState(null)
  
  const [showMsg,setShowMsg] = useState({missingField: false, justifSent: false})
  return (
    <>
    <section className='page-section justification-section'>
      <div style={{display: "flex", width: '100%', justifyContent:'end', marginBottom: "47px"}}>
        <Button>Se Déconnecter</Button>
      </div>
    <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={(e)=>{
      e.preventDefault()
      const { dd, hd, df, hf, motif } = e.target
      const justifData = {
        date_et_heure_de_debut: new Date(`${dd.value}T${hd.value}`),
        date_et_heure_de_fin: new Date(`${df.value}T${hf.value}`),
        id_enseignant: user.statut == "Enseignant" ? user.id : null,
        id_etudiant: user.statut == "Etudiant" ? user.id : null,
        motif: motif.value,

      }
      if(!(dd.value && hd.value && df.value && hf.value && motif.value) || justifData.date_et_heure_de_debut > justifData.date_et_heure_de_fin || !file){
        setShowMsg(obj=> {
          return {justifSent: false, missingField: true}
        })
        return
      }
      JustificationApiCalls.sendJustification({...justifData, file: file}, setShowMsg, setFile, e)
      
      
      
      
      
    }}>

      <div className='marquer-absence'>

        <div className='marquer-absence-input'>

          <h1>Marquer votre absence</h1>

          <div className='input-fields' >
            <Input text="Date de Debut " name="dd"/>
            <Input text="Heure de Debut " type="time" name="hd"/>
          </div>

          <div className='input-fields' >
            <Input text="Date de Fin " name="df"/>
            <Input text="Heure de Fin" type="time" name="hf"/>
          </div>

          <div style={{width:"96%"}} >
            <Input text="Motif" type="text" name="motif"/>
          </div>

        </div>
        <FileDropZone sty setFile={setFile} file={file}/>
      </div>
      {showMsg.missingField && <p style={{marginLeft: '50px'}} className='error'>Vérifier les informations introduites</p>}
      {showMsg.justifSent && <p style={{color: 'green', marginLeft: '50px'}} className='error'>jutification envoyer</p>}
      
      <button className='button-justification' type="submit" >Envoyer</button>
    </form>
    
      


    </section>

    </>
  )
}

function Input({text, type = 'date', name}){
  return (
    <div>
      <label htmlFor="">{text}<span className='etoile'> *</span></label><br /><input name={name} type={type}/>
    </div>
  )
}

function FileDropZone({setFile, file}) {
  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0])
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      <section className='justification-ajout'>
        {!file ? <AddCircleOutlineIcon/> : <DoneIcon style={{color: 'green'}} />}
        
        <label>
        {isDragActive ? (
          "déposer le fichier"
        ) : file ? <p style={{color: 'green'}}>Fichier importé avec succès</p> : "Ajouter la piece jointe"}
        </label>
      </section>
      
    </div>
  );
}
export default EnvoiJustificationEtud;