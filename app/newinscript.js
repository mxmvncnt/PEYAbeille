import React, { useState } from 'react';
import './newinscript.css';

function NewInscript() {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="wrap">
      <div className={`form-box login ${isRegister ? 'hide' : ''}`}>
        <h2>Connexion</h2>
        <form>
          <div className="input-box">
            <span className="icon"></span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon"></span>
            <input type="password" required />
            <label>Mot de passe</label>
          </div>
          <button type="submit" className="btn">
            Se Connecter
          </button>
          <div className="login-register">
            <p>
              Devenir membre?
              <br />
              <button type="button" className="register-link" onClick={toggleForm}>
                Créer un compte
              </button>
            </p>
          </div>
        </form>
      </div>
      <div className={`form-box register ${isRegister ? 'show' : ''}`}>
        <h2>Inscription</h2>
        <form>
          <div className="input-box">
            <span className="icon"></span>
            <input type="text" required />
            <label>Nom</label>
          </div>
          <div className="input-box">
            <span className="icon"></span>
            <input type="text" required />
            <label>Prénom</label>
          </div>
          <div className="input-box">
            <span className="icon"></span>
            <input type="email" required />
            <label>Courriel</label>
          </div>
          <div className="input-box">
            <span className="icon"></span>
            <input type="password" required />
            <label>Mot de passe</label>
          </div>
          <div className="input-box">
            <span className="icon"></span>
            <input type="password" required />
            <label>Confirmez le mot de passe</label>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Terme & Confidentialite
            </label>
          </div>
          <button type="submit" className="btn">
            S'enregistrer
          </button>
          <div className="login-register">
            <p>
              Déjà membre ?
              <button type="button" className="login-link" onClick={toggleForm}>
                Se connecter
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewInscript;