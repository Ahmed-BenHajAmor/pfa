import './App.css'
import { Admin, AdminBody, Emploi, EnseignantBody, EtudiantBody, JustificationStats, SignIn } from './components'
import { Enseignant } from './components/Enseignant'
import { Etudiant } from './components/Etudiant'
import { AbsenceTable } from './components/AbsenceTable'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { MyGraph } from './components/MyGraph'
import { ListeEtudiant } from './components/ListeEtudiant'
import { EnvoiJustificationEtud } from './components/EnvoiJustificationEtud'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState({
    statut: 'enseignant'
  })
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />}/>

          <Route path="/" element={user.statut == "etudiant" ? <Etudiant /> : user.statut == "enseignant" ? <Enseignant /> : <Admin />}>
            <Route path="/" element={user.statut == "etudiant" ? <EtudiantBody /> : user.statut == "enseignant" ? <EnseignantBody /> : <AdminBody />}/>
            <Route path="envoyer-justification" element={<EnvoiJustificationEtud />}/>
          </Route>
 
        </Routes>
      
      </BrowserRouter>
    </>
   
   
  )
}

export default App
