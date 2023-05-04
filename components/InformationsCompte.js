import React from "react";
import styles from '../styles/compte.module.css';
import '../app/global.css';

export default function Informations() {
    return (
        <div className={styles.informations}>
            <h2> Mes informations</h2>
            <div className={styles.form}>
                <div className={styles.infos}>
                    <form>
                        <label>Nom: </label> <br />
                        <input className="input-field-singlerow"></input><br />
                        <label>Prénom: </label><br />
                        <input className="input-field-singlerow"></input><br />
                    </form>
                </div>
                <div className={styles.courriel}>
                    <form>
                        {/* mettre comme valeu par defaut l'adresse existante */}
                        <label>Adresse courriel: </label> <br />
                        <input className="input-field-singlerow"></input> <br />
                        <label >Confirmer adresse courriel: </label><br />
                        <input className="input-field-singlerow"></input><br />
                    </form>
                </div>
                <div className={styles.motdepasse}>
                    <form>
                        <label>Mot de Passe: </label><br />
                        <input className="input-field-singlerow" type="password"></input><br />
                        <label>Confirmer mot de passe: </label><br />
                        <input className="input-field-singlerow" type="password"></input><br />
                    </form>
                </div>
                <button className={styles.confirmer}>Confirmer</button>
            </div>
        </div>
    )
}