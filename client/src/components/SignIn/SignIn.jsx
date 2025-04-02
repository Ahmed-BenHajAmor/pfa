import React, { useContext, useState } from 'react'
import './SignIn.css'
import { Title } from '../Title'
import { SigninApiCalls } from '../../apiCalls/signinApi';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../App';

function SignIn() {
  
  const navigate = useNavigate();
  const [validCredentials, setValidCredentials] = useState(true)
  const {setUser} = useContext(Context)
  const handelSignin = (e)=>{

    e.preventDefault();
    SigninApiCalls.signin(e.target.email.value, e.target.password.value, navigate, setValidCredentials, setUser)
    
  }
  return (
    <section className="sign-in">
        <HeaderBar />

        <Title title={{text: "Bienvenue, Connectez-vous à votre compte", font: 36}} subTitle={"C'est un plaisir de vous avoir parmi nous !"} />

        <div className="signin-container">
      <h2 className="signin-title">Connexion à votre espace</h2>
      {!validCredentials && <p className='error'>vérifier les informations d'identification</p>}
      <form onSubmit={handelSignin}>
        <input
          type="email"
          name="email"
          placeholder="Entrez votre e-mail universitaire"
          className="signin-input"
        />
        
        <input
          type="password"
          name="password"
          
          placeholder="Entrez votre mot de passe"
          className="signin-input"
        />
        <button type="submit" className="signin-button">
          Se connecter
        </button>
      </form>
    </div>
    </section>

  )
}


const HeaderBar = ()=>{
    return <header className='signin-header'>
        <h1 style={{fontSize: "64px", fontWeight: 600}}>SAGA</h1>
        <p style={{fontSize: "10px", fontWeight: 600}}>Absences gérées, stress évité</p>
    </header>
}

export default SignIn