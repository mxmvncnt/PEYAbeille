import React from "react";
import styles from '../../../styles/inscription.module.css';

export default function Inscription() {
    return (
        <div className={styles.nom_classe}>
            <h1>Inscription</h1>
            <form action={`/api/register`} method="GET">

                <label htmlFor="prenom">Prénom:</label>
                <input type="text" id="prenom" name="prenom" />

                <label htmlFor="nom">Nom:</label>
                <input type="text" id="nom" name="nom" />

                <label htmlFor="courriel">Courriel:</label>
                <input type="email" id="courriel" name="email" />

                <label htmlFor="mdp">Mot de passe:</label>
                <input type="password" id="mdp" name="password" />

                <input type="submit" value="Envoyer" />
            </form>
        </div>
    );
}