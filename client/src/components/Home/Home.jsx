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
      <div >

        <HeroSection />
        <WhyChooseSection />
        <HowItWorksSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <CallToActionSection />
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
      <p>Optimisez la gestion des présences avec notre plateforme intuitive et moderne. SAGA est conçu pour simplifier le suivi des absences pour les enseignants, les administrateurs et les établissements éducatifs, offrant une solution efficace, transparente et adaptée à vos besoins.</p>
      <a href="#why-choose" className="cta-btn">Découvrir Nos Avantages</a>
    </div>
    <div className="hero-image">
        <img fetchpriority="high" decoding="async" src="https://scophr.com/wp-content/uploads/2021/09/ca2.png" alt="FLUIDIFIEZ LA GESTION DES ABSENCES ET DES CONGES GRACE AU SIRH" title="FLUIDIFIEZ LA GESTION DES ABSENCES ET DES CONGÉS GRACE AU SIRH" srcset="https://scophr.com/wp-content/uploads/2021/09/ca2.png 1023w, https://scophr.com/wp-content/uploads/2021/09/ca2-980x667.png 980w, https://scophr.com/wp-content/uploads/2021/09/ca2-480x327.png 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) 1023px, 100vw" class="wp-image-1942" />
    </div>
  </section>
);

const WhyChooseSection = () => (
  <section id="why-choose" className="why-choose-section">
    <h2>Pourquoi Choisir SAGA ?</h2>
    <div className="why-choose-grid">
      <div className="why-item">
        <h3>Efficacité</h3>
        <p>Gagnez un temps précieux grâce à des processus automatisés qui éliminent les tâches administratives répétitives et chronophages.</p>
      </div>
      <div className="why-item">
        <h3>Fiabilité</h3>
        <p>Reposez-vous sur une plateforme sécurisée et robuste, pensée pour répondre aux exigences strictes des institutions éducatives.</p>
      </div>
      <div className="why-item">
        <h3>Convivialité</h3>
        <p>Une interface intuitive et accessible, conçue pour être utilisée facilement par tous les membres de votre équipe, quel que soit leur niveau technique.</p>
      </div>
      <div className="why-item">
        <h3>Support Technique</h3>
        <p>Profitez d’une assistance dédiée, disponible pour répondre à vos questions et résoudre vos problèmes rapidement.</p>
      </div>
    </div>
  </section>
);

const HowItWorksSection = () => {
    
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
  
    const isStepOptional = (step) => {
      return step === 1;
    };
  
    const isStepSkipped = (step) => {
      return skipped.has(step);
    };
  
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
        // You probably want to guard against something like this,
        // it should never occur unless someone's actively trying to break something.
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
    const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

    return (
        <section id="why-choose" className="why-choose-section">
        <h2>Pourquoi Choisir SAGA ?</h2>
    
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                  labelProps.optional = (
                      <Typography variant="caption">Optional</Typography>
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
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
                >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </section>
    );

}

const FeaturesSection = () => (
  <section id="features" className="features-section">
    <h2>Fonctionnalités</h2>
    <div className="features-grid">
      <div className="feature">
        <div className="feature-icon">📊</div>
        <h3>Suivi en Temps Réel</h3>
        <p>Obtenez une vue d’ensemble instantanée des présences et absences avec des mises à jour en direct.</p>
      </div>
      <div className="feature">
        <div className="feature-icon">📝</div>
        <h3>Gestion des Justifications</h3>
        <p>Simplifiez le traitement des justifications d’absence grâce à un système intégré et facile à utiliser.</p>
      </div>
      <div className="feature">
        <div className="feature-icon">📈</div>
        <h3>Rapports & Analyses</h3>
        <p>Créez des rapports personnalisés pour analyser les données et prendre des décisions éclairées.</p>
      </div>
      <div className="feature">
        <div className="feature-icon">🔒</div>
        <h3>Sécurité des Données</h3>
        <p>Assurez la confidentialité de vos informations grâce à des protocoles de sécurité avancés.</p>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section id="testimonials" className="testimonials-section">
    <h2>Ce Que Disent Nos Utilisateurs</h2>
    <div className="testimonials-grid">
      <div className="testimonial">
        <p>"SAGA a révolutionné la façon dont nous gérons les absences. C’est rapide, efficace et indispensable !"</p>
        <span>- Directeur d’École</span>
      </div>
      <div className="testimonial">
        <p>"Une interface claire et des fonctionnalités pratiques. Les mises à jour en temps réel sont un vrai plus."</p>
        <span>- Enseignant</span>
      </div>
      <div className="testimonial">
        <p>"Le support technique est exceptionnel. Ils répondent rapidement et résolvent tous les problèmes."</p>
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
      <p>SAGA est une plateforme automatisée qui permet de suivre les absences en temps réel grâce à une interface simple et intuitive, adaptée aux besoins des établissements scolaires.</p>
    </div>
    <div className="faq-item">
      <h3>Mes données sont-elles sécurisées ?</h3>
      <p>Oui, nous utilisons des protocoles de cryptage avancés et des mesures de sécurité strictes pour protéger toutes vos données.</p>
    </div>
    <div className="faq-item">
      <h3>Puis-je personnaliser les rapports ?</h3>
      <p>Oui, SAGA propose des outils flexibles pour personnaliser vos rapports selon vos besoins spécifiques.</p>
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

const CallToActionSection = () => (
  <section id="cta" className="cta-section">
    <h2>Prêt à Commencer ?</h2>
    <p>Rejoignez des milliers d’utilisateurs satisfaits qui optimisent leur gestion des absences avec SAGA. Essayez dès aujourd’hui et découvrez une nouvelle façon de travailler.</p>
    <a href="#contact" className="cta-btn">Inscrivez-Vous Maintenant</a>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <p>© 2023 SAGA. Tous droits réservés.</p>
  </footer>
);

export default Homepage;