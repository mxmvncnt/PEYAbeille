import React from "react";
import styles from '../styles/compte.module.css';


export default function Informations() {
    return (
        <div className={styles.informations}>
            <h2> Mes informations</h2>
            <div className={styles.form}>
                <form className={styles.courriel}>
                    {/* mettre comme valeu par defaut l'adresse existante */}
                    <label>Adresse courriel: </label> <br />
                    <input className={styles.input}></input> <br />
                    <label >Confirmer adresse courriel: </label><br />
                    <input className={styles.input}></input><br />
                </form>
                <form className={styles.motdepasse}>
                    <label>Mot de Passe: </label><br />
                    <input className={styles.input} type="password"></input><br />
                    <label>Confirmer mot de passe: </label><br />
                    <input className={styles.input} type="password"></input><br />
                </form>
                <button className={styles.confirmer}>Confirmer</button>
            </div>
        </div>
    )
}