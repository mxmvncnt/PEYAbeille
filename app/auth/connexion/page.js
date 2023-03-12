import React from "react";
import styles from '../../../styles/connexion.module.css';

export default function Connexion() {
    return (
        <div className={styles.nom_classe}>
            <h1>Connexion</h1>
            <form action={`/api/login`} method="POST">
                <label for="courriel">Courriel:</label>
                <input type="email" id="courriel" name="email"/>
                <label for="mdp">Mot de passe:</label>
                <input type="password" id="mdp" name="password"/>
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    );
}