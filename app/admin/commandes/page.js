import React from "react";
import styles from '../../../styles/commande.module.css';
import Commande from "../../../components/Commande";


export default function Commandes() {
    return (

        <div className={styles.body}>
            <h1> Commandes</h1>

            <Commande />
            <Commande />

        </div>

    );
}

