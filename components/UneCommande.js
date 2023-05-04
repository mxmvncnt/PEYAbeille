import React from "react";
import styles from '../styles/compte.module.css';

export default function UneCommande(data){
    data=data["data"];

    return (
        <div className={styles.containerCommande}>
            <div className={styles.idCommande}>{data.id}</div>
            <div className={styles.dateCommande}>{data.date}</div>
            <div className={styles.addresseCommande}>{data.adresse}</div>
            <div className={styles.statutCommande}>{data.statut === 'F' ? 'termine' : 'en cours'}</div>
            <div className={styles.totalCommande}>{data.prix_sous_total}</div>
            
        </div>
    )
}