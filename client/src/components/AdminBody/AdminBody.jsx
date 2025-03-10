import React, { useState } from 'react'

import { Button } from '../Button'
import { Title } from '../Title'
import { JustificationsTable } from '../JustificationsTable'
import SearchIcon from '@mui/icons-material/Search';
import { JustificationPopup } from '../JustificationPopup';

function AdminBody() {
  const [popupInfo, setPopupInfo] = useState({show: false, 
    data:{}
  })
  return (
    <section className="page-section admin">
          {popupInfo.show && <JustificationPopup popupInfo={popupInfo} setPopupInfo={setPopupInfo}/>}
          <div style={{display: "flex", width: '100%', justifyContent:'end', marginBottom: "47px"}}>
            <Button>Log out</Button>
          </div>

          <Title title={{text: "Justifications en attente", font: 36}} subTitle={"Justifications envoyées (non vérifiées)"}/>
          
          <Search />

          
          
          
          <JustificationsTable setPopupInfo={setPopupInfo} />
          
         

        </section>
  )
}
const Search = ()=>{
  return (
    <div className="search-container">
        <select className="status-filter">
            <option value="status">Filtrer par statut</option>
            <option value="student">Étudiant</option>
            <option value="professor">Professeur</option>
        </select>
        <div className="search-bar">
            <SearchIcon />
            <input type="text" placeholder="Recherchez un étudiant ou un professeur par nom" />
        </div>

    </div>
  )
}
export default AdminBody