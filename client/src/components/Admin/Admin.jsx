import React, { useState } from 'react'
import './Admin.css'
import {Button, JustificationPopup, JustificationsTable, Sidebar, Title} from '../'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import HourglassTopRoundedIcon from '@mui/icons-material/HourglassTopRounded';
import SearchIcon from '@mui/icons-material/Search';

function Admin() {
  const [popupInfo, setPopupInfo] = useState({show: false, 
    data:{}
  })

  return (
    <>
       
        <Sidebar userinfo={{username: "Admin_fst", details: "2024/2025"}} links={[{text: "Justifications en attente", Icon: HourglassTopRoundedIcon, highlighted: true}, {text: "Justifications vérifiées", Icon: CheckCircleRoundedIcon, highlighted: false}]}/>
        
        <section className="page-section admin">
          {popupInfo.show && <JustificationPopup popupInfo={popupInfo} setPopupInfo={setPopupInfo}/>}
          <div style={{display: "flex", width: '100%', justifyContent:'end', marginBottom: "47px"}}>
            <Button>Log out</Button>
          </div>

          <Title title={{text: "Justifications en attente", font: 36}} subTitle={"Justifications envoyées (non vérifiées)"}/>
          
          <Search />

          
          
          
          <JustificationsTable setPopupInfo={setPopupInfo} />
          
         

        </section>
    </>
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
export default Admin