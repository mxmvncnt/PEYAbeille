import React from "react";
import styles from '../styles/indicateurprix.module.css'

export default function IndicateurPrix({ 
    prix_suggere = 0,
    prix_regulier = 0
 }) {

    let IndicateurPrix;

    // si le prix suggere nest pas le meme que celui fixe/regulier
    if (prix_regulier != prix_suggere) {
        return (
            <div className={`${styles.indicateur_prix} ${styles.indicateur_prix_different}`}>
                <strike className={styles.prix_inline}>{prix_regulier}$ </strike>
                <h2 className={styles.prix_inline}>{prix_suggere} $</h2>
            </div>
        );
    } else {
        return (
            <div className={`${styles.indicateur_prix} ${styles.indicateur_prix_egal}`}>
                <br></br>
                <h2>{prix_suggere} $</h2>
            </div>
        );
    }
}