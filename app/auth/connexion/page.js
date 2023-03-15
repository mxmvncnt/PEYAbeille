import React from "react";
import styles from '../../../styles/connexion.module.css';


export default function Connexion() {
    return (
        <div className={styles.body}>

            <div className={styles.container}>
                <h1>Connexion</h1>
                <form action={`/api/login`} method="GET">
                    <input className={styles.input} type="email" id="courriel" name="email" placeholder="Courriel" />
                    <br></br>
                    <label htmlFor="mdp">Mot de passe:</label>
                    <input type="password" id="mdp" name="password" />
                    <input type="submit" value="Envoyer" />
                </form>
            </div>
        </div>
    );
}