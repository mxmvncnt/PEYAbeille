import React from "react";
import styles from '../../../styles/dashboard.module.css';



export default function dashboard(){
    return(
        <div>
            <h1>Dashboard</h1>
            <div className={styles.dashboard_container}>
                <p>Volume de ventes total : </p>
                <p>Nombre de commandes total :</p>
                <p>Produit le plus populaire : </p>
                <p>Produit le moins populare : </p>
            </div>
            <div className={styles.bouttons}>
                <div className={styles.AllerCommande}>
                    <h3> Dernieres commandes</h3>
                    <button className={styles.button}> Go!</button>
                </div>
                <div className={styles.AllerInventaire}>
                    <h3> Inventaire</h3>
                    <button className={styles.button}> Go!</button>
                </div>
            </div>

        </div>
    
    );
}