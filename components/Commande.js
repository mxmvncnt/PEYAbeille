import React from "react";
import styles from '../styles/commande.module.css';


export default function Commande() {
    return (
        <div className={styles.ContainerCommande}>
        <div className={styles.commande}>
            <h2> Nom du client (# numero de commande)</h2>
            <div className={styles.bouttons}>
                <button className={styles.bttnCompleter}> Completer </button>
                <button className={styles.bttnAnnuler}> Annuler </button>
            </div>
            <p>Paul Nord <br />1234 rue des mirabels
                <br />514 514 5140 </p>
           
        </div>
        <details className={styles.detailCommande}>
                <summary>Voir plus</summary>
                <div>
                    <ul>
                        <li>un produit</li>
                        <li>un autre produit</li>
                        <li>total: 54$</li>
                    </ul>
                </div>
            </details>
        </div>
    );
}