import React, { useRef, useState } from 'react'

import { Button } from '../Button'
import { Title } from '../Title'
import { JustificationsTable } from '../JustificationsTable'
import SearchIcon from '@mui/icons-material/Search';
import { JustificationPopup } from '../JustificationPopup';
import { useNavigate } from 'react-router';

function AdminBody() {
  const [popupInfo, setPopupInfo] = useState({show: false, 
    data:{}
  })
  const [justificationsArray, setJustificationsArray] = useState({all: [], filtered: []})
  
  
  return (
    <section className="page-section admin">
          {popupInfo.show && <JustificationPopup popupInfo={popupInfo} setPopupInfo={setPopupInfo}/>}
          <div style={{display: "flex", width: '100%', justifyContent:'end', marginBottom: "47px"}}>
            <Button>Se Déconnecter</Button>
          </div>

          <Title title={{text: "Justifications en attente", font: 36}} subTitle={"Justifications envoyées (non vérifiées)"}/>
          
          <Search  setJustificationsArray={setJustificationsArray}/>

          
          
          
          <JustificationsTable popupInfo={popupInfo} setPopupInfo={setPopupInfo} justificationsArray={justificationsArray} setJustificationsArray={setJustificationsArray}/>
          
         

        </section>
  )
}
const Search = ({setJustificationsArray})=>{
  const filterInput = useRef(null)
  const search =  useRef(null)

  function handelFilter(e){
    
    console.log(filterInput);
    console.log(search);
    
    if(filterInput.current.value == "professor"){
      var filter = 'id_enseignant'
    }else if(filterInput.current.value == "student"){
      var filter = 'id_etudiant'
    }else{
      return setJustificationsArray(prev=>{
        return {...prev, filtered: prev.all.filter(justif => {
          if(search == "") return true;
          return justif.nom.toLowerCase().startsWith(search.current.value.toLowerCase())
        })}
      }
    )}
    
    setJustificationsArray(prev=>{
      
      return {...prev, filtered :prev.all.filter(justif => justif[filter] !== null).filter(justif => {
        if(search == "") return true;
        return justif.nom.toLowerCase().startsWith(search.current.value.toLowerCase())
      })}
    })
    
    
    
  }



 
  
  return (
    <div className="search-container">
        <select ref={filterInput} onChange={handelFilter} className="status-filter">
            <option value="status">Filtrer par statut</option>
            <option value="student">Étudiant</option>
            <option value="professor">Professeur</option>
        </select>
        <div className="search-bar">
            <SearchIcon />
            <input ref={search} onChange={handelFilter} type="text" placeholder="Recherchez un étudiant ou un professeur par nom" />
        </div>

    </div>
  )
}
export default AdminBody