import React from "react";
import styles from '../../styles/compte.module.css';
import Informations from "../../components/InformationsCompte";
import UneCommande from "../../components/UneCommande";

export default function Compte() {
    return (
        <div>
            <div className={styles.container}>
                <h1> Mon compte</h1>
            </div>
            <Informations />
            <div className={styles.containerCommande}>
                <h2>Mes commandes</h2>
                <UneCommande/>
            </div>
            
        </div>

    )
}

