import React from "react";
import styles from '../styles/commande.module.css';


export default function Commande(data) {

    data = data["data"]
    console.log(data)

    return (
        <div className={styles.ContainerCommande}>
            <div className={styles.commande}>
                <h2>(# {data.id}) {data.client.nom}, {data.client.prenom}</h2>
                <div className={styles.bouttons}>
                    <button className={styles.bttnCompleter} disabled={data.statut == 'F' ? false : true}> Completer </button>
                    <button className={styles.bttnAnnuler} disabled={data.statut == 'F' ? false : true}> Annuler </button>
                </div>
                <p>{data.client.nom}, {data.client.prenom} <br />{data.adresse}</p>

            </div>
            <details className={styles.detailCommande}>
                <summary>Voir plus</summary>
                <div>
                    <ul>
                        {data.items.map((item) => (
                            <div>
                                <li key={item.id}>{item.quantite} x {item.nom}</li>
                            </div>
                        ))}
                    </ul>
                </div>
            </details>
        </div>
    );
}