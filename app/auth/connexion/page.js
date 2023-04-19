"use client";

import React, { useState } from 'react';
// import '../../../styles/connexioninscription.module.css';
import styles from '../../../styles/connexioninscription.module.css';

function Connexion() {
    const [isRegister, setIsRegister] = useState(false);

    const toggleForm = () => {
        setIsRegister(!isRegister);
    };

    return (
        <div className={styles.body}>


            <div className={styles.wrap}>
                <div className={`${styles.form_box} ${styles.login} ${isRegister ? 'hide' : ''}`}>
                    <h2>Connexion</h2>

                    <form action={`/api/login`} method="GET">
                        <div className={styles.input_box}>
                            <label htmlFor="courriel">Courriel:</label>
                            <input type="email" id="courriel" name="email" />
                        </div>

                        <div className={styles.input_box}>
                            <label htmlFor="mdp">Mot de passe:</label>
                            <input type="password" id="mdp" name="password" />
                        </div>
                        <button type="submit" className={styles.btn}>
                            Se Connecter
                        </button>
                        <div className={styles.login_register}>
                            <p>
                                Devenir membre?
                                <br />
                                <button type="button" className={styles.register_link} onClick={toggleForm}>
                                    Créer un compte
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
                <div className={`${styles.form_box} ${styles.login} ${isRegister ? 'show' : ''}`}>
                    <h2>Inscription</h2>
                    <form action={`/api/register`} method="GET">

                        <div className={styles.input_box}>
                            <label htmlFor="prenom">Prénom:</label>
                            <input type="text" id="prenom" name="prenom" />
                        </div>

                        <div className={styles.input_box}>
                            <label htmlFor="nom">Nom:</label>
                            <input type="text" id="nom" name="nom" />
                        </div>

                        <div className={styles.input_box}>
                            <label htmlFor="courriel">Courriel:</label>
                            <input type="email" id="courriel" name="email" />
                        </div>

                        <div className={styles.input_box}>
                            <label htmlFor="mdp">Mot de passe:</label>
                            <input type="password" id="mdp" name="password" />
                        </div>

                        <div className={styles.input_box}>
                            <label htmlFor="mdp">Confirmez le mot de passe:</label>
                            <input type="password" id="mdp" name="password" />
                        </div>

                        <div className={styles.remember_forgot}>
                            <label>
                                <input type="checkbox" />
                                Terme & Confidentialite
                            </label>
                        </div>

                        <input type="submit" value="S'enregistrer" className={styles.btn} />

                        <div className={styles.login_register}>
                            <p>
                                Déjà membre ?
                                <button type="button" className={styles.login_link} onClick={toggleForm}>
                                    Se connecter
                                </button>
                            </p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Connexion;