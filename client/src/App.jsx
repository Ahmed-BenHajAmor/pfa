import './App.css'
import { Admin, AdminBody, Emploi, EnseignantBody, EtudiantBody, JustificationStats, SignIn } from './components'
import { Enseignant } from './components/Enseignant'
import { Etudiant } from './components/Etudiant'
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom"
import { EnvoiJustificationEtud } from './components/EnvoiJustificationEtud'
import { createContext, useEffect, useState } from 'react'
import { UsersApiCalls } from './apiCalls/userApiCalls'


export const Context = createContext();

function App() {
 
  return (
    <>
      
      <BrowserRouter>
       
        <RoutesContainer />
      </BrowserRouter>
      
    </>
   
   
  )
}

const RoutesContainer = ()=>{
  const [user, setUser] = useState({})
  const navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem('token')){

      
      UsersApiCalls.getUser(setUser)
    }
    else
      navigate('/signin')
  }, [])
  
  return (
    <Context.Provider value={{ user, setUser}}>
      <Routes>
      <Route path="/signin" element={<SignIn />}/>

      <Route path="/" element={user.statut == "Etudiant" ? <Etudiant /> : user.statut == "Enseignant" ? <Enseignant /> :user.statut == "Admin" &&  <Admin />}>
        <Route path="/" element={user.statut == "Etudiant" ? <EtudiantBody /> : user.statut == "Enseignant" ? <EnseignantBody /> :user.statut == "Admin" && <AdminBody />}/>
        {user.statut != "admin" && <Route path="envoyer-justification" element={<EnvoiJustificationEtud />}/>}
      </Route>

    </Routes>
  </Context.Provider>
  )
}

export default App
