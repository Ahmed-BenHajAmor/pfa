import React, { useState } from 'react'
import './Admin.css'
import {Button, Sidebar, Title} from '../'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import HourglassTopRoundedIcon from '@mui/icons-material/HourglassTopRounded';
import SearchIcon from '@mui/icons-material/Search';

function Admin() {
  return (
    <>
       
        <Sidebar userinfo={{username: "Admin_fst", details: "2024/2025"}} links={[{text: "Justifications en attente", Icon: HourglassTopRoundedIcon, highlighted: true}, {text: "Justifications vérifiées", Icon: CheckCircleRoundedIcon, highlighted: false}]}/>
        
        <section className="admin">

          <div style={{display: "flex", width: '100%', justifyContent:'end', marginBottom: "47px"}}>
            <Button>Log out</Button>
          </div>

          <Title title={{text: "Justifications en attente", font: 36}} subTitle={"Justifications envoyées (non vérifiées)"}/>
          
          <Search />

          
          <div className="justifications-container">
            <Title title={{text: "Aucune justification en attente de vérification n'a été trouvée.", font: 24}} subTitle={"Il n'existe aucun justificatif en attente de vérification."}/>
          </div>

        </section>
    </>
  )
}


const Search = ()=>{
  return (
    <div class="search-container">
        <select class="status-filter">
            <option value="status">Filtrer par statut</option>
            <option value="student">Étudiant</option>
            <option value="professor">Professeur</option>
        </select>
        <div class="search-bar">
            <SearchIcon />
            <input type="text" placeholder="Recherchez un étudiant ou un professeur par nom ou email" />
        </div>

    </div>
  )
}
export default Admin