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
            <div className="indicateur-prix indicateur-prix-different">
                <strike>{prix_regulier}$ </strike>
                <h2>{prix_suggere} $</h2>
            </div>
        );
    } else {
        return (
            <div className="indicateur-prix indicateur-prix-egal">
                <br></br>
                <h2>{prix_suggere} $</h2>
            </div>
        );
    }
}