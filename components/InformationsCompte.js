import React from "react";
import styles from '../styles/compte.module.css';


export default function Informations() {
    return (
        <div className={styles.informations}>
            <h2> Mes informations</h2>
            <div className={styles.form}>
                <div className={styles.infos}>
                    <form>
                        <label>Nom: </label> <br />
                        <input className={styles.input}></input><br />
                        <label>Prénom: </label><br />
                        <input className={styles.input}></input><br />
                    </form>
                </div>
                <div className={styles.courriel}>
                    <form>
                        {/* mettre comme valeu par defaut l'adresse existante */}
                        <label>Adresse courriel: </label> <br />
                        <input className={styles.input}></input> <br />
                        <label >Confirmer adresse courriel: </label><br />
                        <input className={styles.input}></input><br />
                    </form>
                </div>
                <div className={styles.motdepasse}>
                    <form>
                        <label>Mot de Passe: </label><br />
                        <input className={styles.input} type="password"></input><br />
                        <label>Confirmer mot de passe: </label><br />
                        <input className={styles.input} type="password"></input><br />
                    </form>
                </div>
                <br></br>
                <div className={styles.addresse}>
                    <form >
                        <label> Adresse: </label><br/>
                        <input className={styles.input}></input><br/>
                        <label> Ville </label><br/>
                        <input className={styles.input}></input><br/>
                        <label>Code postal: </label> <br/>
                        <input className={styles.input}></input> <br/>
                        <label>Province</label><br/>
                        <select>
                            <option>Alberta</option>
                            <option>Colombie-Britannique</option>
                            <option>Manitoba</option>
                            <option>Nouveau Brunswick</option>
                            <option>Terre Neuve et Labrador</option>
                            <option>Territoire du Nord-Ouest</option>
                            <option>Nouvelle Ecosse</option>
                            <option>Nunavut</option>
                            <option> Ontario</option>
                            <option>Ile du Prince Édouard</option>
                            <option>Quebec</option>
                            <option>Saskatchewan</option>
                            <option>Yukon</option>
                        </select>
                    </form>
                </div>
                <button className={styles.confirmer}>Confirmer</button>
            </div>
        </div>
    )
}