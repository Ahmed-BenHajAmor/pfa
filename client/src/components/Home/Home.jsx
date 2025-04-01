import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Homepage = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/signin');
  };

  return (
    <div className="homepage">
      <TopBar onSignIn={handleSignIn} />
      <div className="content">
        <HeroSection />
        <WhyChooseSection />
        <HowItWorksSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

const TopBar = ({ onSignIn }) => (
  <nav className="top-bar">
    <div className="logo">SAGA</div>
    <ul className="nav-links">
      <li><a href="#hero">Accueil</a></li>
      <li><a href="#why-choose">Pourquoi SAGA ?</a></li>
      <li><a href="#how-it-works">Fonctionnement</a></li>
      <li><a href="#features">Fonctionnalités</a></li>
      <li><a href="#testimonials">Témoignages</a></li>
      <li><a href="#faq">FAQ</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <button onClick={onSignIn} className="sign-in-btn">Se Connecter</button>
  </nav>
);

const HeroSection = () => (
  <section id="hero" className="hero-section">
    <div className="hero-content">
      <h1>Bienvenue sur SAGA</h1>
      <p>Système Automatisé de Gestion des Absences</p>
      <p>
        Optimisez la gestion des présences avec notre plateforme intuitive et moderne.
        SAGA est conçu pour simplifier le suivi des absences pour les enseignants,
        les administrateurs et les établissements éducatifs.
      </p>
      <a href="#why-choose" className="cta-btn">Découvrir Nos Avantages</a>
    </div>
    <div className="hero-image">
      <img
        fetchpriority="high"
        decoding="async"
        src="https://scophr.com/wp-content/uploads/2021/09/ca2.png"
        alt="Gestion des absences et congés"
        title="Gestion des absences et congés"
      />
    </div>
  </section>
);

const WhyChooseSection = () => (
  <section id="why-choose" className="why-choose-section">
    <h2>Pourquoi Choisir SAGA ?</h2>
    <div className="why-choose-grid">
      <div className="why-item">
        <h3>Efficacité</h3>
        <p>
          Gagnez du temps grâce à l’automatisation de tâches administratives répétitives.
        </p>
      </div>
      <div className="why-item">
        <h3>Fiabilité</h3>
        <p>
          Profitez d’une plateforme sécurisée et robuste, conçue pour répondre aux besoins des institutions.
        </p>
      </div>
      <div className="why-item">
        <h3>Convivialité</h3>
        <p>
          Une interface intuitive et accessible pour tous, quel que soit le niveau technique.
        </p>
      </div>
      <div className="why-item">
        <h3>Support Technique</h3>
        <p>
          Bénéficiez d’une assistance dédiée pour résoudre rapidement toutes vos questions.
        </p>
      </div>
    </div>
  </section>
);

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => step === 1;
  const isStepSkipped = (step) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const steps = ['Paramétrage', 'Création du groupe', 'Lancement de la campagne'];

  return (
    <section id="how-it-works" className="how-it-works-section">
      <h2>Comment Ça Marche</h2>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optionnel</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              Toutes les étapes sont complétées – vous avez terminé!
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Réinitialiser</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              Étape {activeStep + 1}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Retour
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Passer
                </Button>
              )}
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Terminer' : 'Suivant'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </section>
  );
};

const FeaturesSection = () => (
  <section id="features" className="features-section">
    <h2>Fonctionnalités</h2>
    <div className="features-grid">
      <div className="feature">
        <div className="feature-icon">📊</div>
        <h3>Suivi en Temps Réel</h3>
        <p>Visualisez instantanément les présences et absences grâce aux mises à jour en direct.</p>
      </div>
      <div className="feature">
        <div className="feature-icon">📝</div>
        <h3>Gestion des Justifications</h3>
        <p>Traitez les absences facilement avec un système intégré pour les justificatifs.</p>
      </div>
      <div className="feature">
        <div className="feature-icon">📈</div>
        <h3>Rapports & Analyses</h3>
        <p>Générez des rapports personnalisés pour analyser vos données efficacement.</p>
      </div>
      <div className="feature">
        <div className="feature-icon">🔒</div>
        <h3>Sécurité des Données</h3>
        <p>Vos informations sont protégées par des protocoles de sécurité avancés.</p>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section id="testimonials" className="testimonials-section">
    <h2>Ce Que Disent Nos Utilisateurs</h2>
    <div className="testimonials-grid">
      <div className="testimonial">
        <p>"SAGA a révolutionné notre gestion des absences : c'est rapide, fiable et indispensable."</p>
        <span>- Directeur d’École</span>
      </div>
      <div className="testimonial">
        <p>"L'interface est claire et les mises à jour en temps réel apportent une vraie valeur ajoutée."</p>
        <span>- Enseignant</span>
      </div>
      <div className="testimonial">
        <p>"Le support technique est réactif et toujours à l'écoute. Une solution au top!"</p>
        <span>- Administrateur</span>
      </div>
    </div>
  </section>
);

const FAQSection = () => (
  <section id="faq" className="faq-section">
    <h2>Foire Aux Questions</h2>
    <div className="faq-item">
      <h3>Comment fonctionne SAGA ?</h3>
      <p>
        SAGA est une plateforme automatisée qui suit les absences en temps réel grâce à une interface intuitive.
      </p>
    </div>
    <div className="faq-item">
      <h3>Mes données sont-elles sécurisées ?</h3>
      <p>
        Absolument, nous utilisons un cryptage avancé et des mesures strictes pour protéger vos informations.
      </p>
    </div>
    <div className="faq-item">
      <h3>Puis-je personnaliser les rapports ?</h3>
      <p>
        Oui, SAGA vous permet de créer des rapports flexibles adaptés à vos besoins spécifiques.
      </p>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="contact-section">
    <h2>Contactez-Nous</h2>
    <form className="contact-form">
      <input type="text" placeholder="Votre Nom" required />
      <input type="email" placeholder="Votre Email" required />
      <textarea placeholder="Votre Message" required></textarea>
      <button type="submit" className="submit-btn">Envoyer</button>
    </form>
    <div className="contact-info">
      <p>Email : contact@saga.com</p>
      <p>Téléphone : +33 1 23 45 67 89</p>
      <p>Adresse : 123 Rue de l’Éducation, Paris, France</p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <p>© 2023 SAGA. Tous droits réservés.</p>
  </footer>
);

export default Homepage;
