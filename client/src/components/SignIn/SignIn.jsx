import React from 'react'
import './SignIn.css'
import { Title } from '../Title'

function SignIn() {
  return (
    <section className="sign-in">
        <HeaderBar />

        <Title title={{text: "Bienvenue, Connectez-vous à votre compte", font: 36}} subTitle={"C'est un plaisir de vous avoir parmi nous !"} />

        <div className="signin-container">
      <h2 className="signin-title">Connexion à votre espace</h2>
      <form>
        <input
          type="email"
          placeholder="Entrez votre e-mail universitaire"
          className="signin-input"
        />
        <input
          type="password"
          placeholder="Entrez votre mot de passe"
          className="signin-input"
        />
        <button type="button" className="signin-button">
          Se connecter
        </button>
      </form>
    </div>
    </section>

  )
}


const HeaderBar = ()=>{
    return <header>
        <h1 style={{fontSize: "64px", fontWeight: 600}}>SAGA</h1>
        <p style={{fontSize: "10px", fontWeight: 600}}>Absences gérées, stress évité</p>
    </header>
}

export default SignIn