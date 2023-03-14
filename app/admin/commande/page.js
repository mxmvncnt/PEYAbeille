import React from "react";
import styles from '../../../styles/commande.module.css';

export default function commandes(){
    return(

        <div>
            <h1> Commandes</h1>

            <div className={styles.commande}>
                <h2> Nom du miel (#001)</h2>
                <button className={styles.bttnCompleter}> Completer </button>
                <button className={styles.bttnAnnuler}> Annuler </button>
                <p>Paul Nord <br/>1234 rue des mirabels
                <br/>514 514 5140 </p>
            </div>
            export commande();
            
        </div>

    );
}

 function commande(){
    return(
        <div className={styles.commande}>
        <h2> Nom du miel (#001)</h2>
        <button className={styles.bttnCompleter}> Completer </button>
        <button className={styles.bttnAnnuler}> Annuler </button>
        <p>Paul Nord <br/>1234 rue des mirabels
        <br/>514 514 5140 </p>
    </div>
    )
}