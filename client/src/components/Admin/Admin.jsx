import React, { useState } from 'react'
import './Admin.css'
import {Button, JustificationPopup, JustificationsTable, Sidebar, Title} from '../'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import HourglassTopRoundedIcon from '@mui/icons-material/HourglassTopRounded';
import SearchIcon from '@mui/icons-material/Search';

function Admin() {
  const [popupInfo, setPopupInfo] = useState({show: false, 
    data:{
      cin: "12345678",
      name: "Ahmed Ben Haj Amor",
      section: "GLSI",
      status: 'professor',
      motif: "Rendez-vous important",
      group: 3,
      submissionDate: "12 Mars 2024, 08:00",
      startDateTime: "12 Mars 2024, 08:00",
      endDateTime: "13 Mars 2024, 12:00",
      attachments: "Télécharger"
    }
  })
  const [justificationsArray, setJustificationsArray] = useState([
    {
      cin: "12345678",
      name: "Ahmed Ben Haj Amor",
      section: "GLSI",
      status: 'etudiant',
      motif: "Rendez-vous important",
      group: 3,
      submissionDate: "12 Mars 2024, 08:00",
      startDateTime: "12 Mars 2024, 08:00",
      endDateTime: "13 Mars 2024, 12:00",
      attachments: "Télécharger"
    },
    {
      cin: "12345678",
      name: "Ahmed Ben Haj Amor",
      section: "GLSI",
      status: 'professor',
      motif: "Rendez-vous important",
      group: 3,
      submissionDate: "12 Mars 2024, 08:00",
      startDateTime: "12 Mars 2024, 08:00",
      endDateTime: "13 Mars 2024, 12:00",
      attachments: "Télécharger"
    }
  ])


  return (
    <>
       
        <Sidebar userinfo={{username: "Admin_fst", details: "2024/2025"}} links={[{text: "Justifications en attente", Icon: HourglassTopRoundedIcon, highlighted: true}, {text: "Justifications vérifiées", Icon: CheckCircleRoundedIcon, highlighted: false}]}/>
        
        <section className="admin">
          {popupInfo.show && <JustificationPopup popupInfo={popupInfo} setPopupInfo={setPopupInfo}/>}
          <div style={{display: "flex", width: '100%', justifyContent:'end', marginBottom: "47px"}}>
            <Button>Log out</Button>
          </div>

          <Title title={{text: "Justifications en attente", font: 36}} subTitle={"Justifications envoyées (non vérifiées)"}/>
          
          <Search />

          
          
          {justificationsArray?.length == 0? 
          <div className="empty-justifications-container justifications-container">
            <Title title={{text: "Aucune justification en attente de vérification n'a été trouvée.", font: 24}} subTitle={"Il n'existe aucun justificatif en attente de vérification."}/>
          </div>
          : 
          <div className='justifications-container'>
            <JustificationsTable setPopupInfo={setPopupInfo} justificationsArray={justificationsArray}/>
          </div>
          }
         

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
            <input type="text" placeholder="Recherchez un étudiant ou un professeur par nom ou email" />
        </div>

    </div>
  )
}
export default Admin