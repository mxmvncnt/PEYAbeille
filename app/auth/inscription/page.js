import React from "react";
import styles from '../../../styles/inscription.module.css';
import '../../global.css'

export default function Inscription() {
    return (
        <div className={styles.body}>
            <div className={styles.card}>
                <h1>Inscription</h1>
                <form action={`/api/register`} method="GET">

                    <div className={styles.card_item}>
                        <label htmlFor="prenom">Prénom:</label>
                        <input className="input-field-singlerow" type="text" id="prenom" name="prenom" />
                    </div>

                    <div className={styles.card_item}>
                        <label htmlFor="nom">Nom:</label>
                        <input className="input-field-singlerow" type="text" id="nom" name="nom" />
                    </div>

                    <div className={styles.card_item}>
                        <label htmlFor="courriel">Courriel:</label>
                        <input className="input-field-singlerow" type="email" id="courriel" name="email" />
                    </div>

                    <div className={styles.card_item}>
                        <label htmlFor="mdp">Mot de passe:</label>
                        <input className="input-field-singlerow" type="password" id="mdp" name="password" />
                    </div>

                    <div className={styles.card_item}>
                        <button type="submit" className={styles.btn_fullwidth}>
                            S'inscrire
                        </button>
                    </div>
                </form>
                <div className={styles.card_footer}>
                    <small>
                        <a href="/auth/connexion">Déjà membre PEYABEILLE?</a>
                    </small>
                </div>

            </div>
        </div>
    );
}