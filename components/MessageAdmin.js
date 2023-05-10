import React from 'react';
import styles from '../styles/MessageAdmin.module.css'

export default function MessageAdmin(data) {

    // console.log(data)
    const jsonData = data["data"]
    console.log(jsonData)

    return (
        <div className={styles.message}>
            <div className={styles.nom}>
                <h2>Nom :</h2>
                <p>{jsonData.nom}</p>
            </div>
            <div className={styles.prenom}>
                <h2>Prénom: </h2>
                <p>{jsonData.prenom}</p>
            </div>
            <div className={styles.email}>
                <h2>Courriel:</h2>
                <p>{jsonData.email}</p>
            </div>
            <div className={styles.sujet}>
                <h2>Sujet:</h2>
                <p>{jsonData.sujet}</p>
            </div>
            <div className={styles.contenu}>
                <h2>Message:</h2>
                <p>{jsonData.message}</p>
            </div>
            <div className={styles.boutonMailTo}>
                <button>Répondre</button>
            </div>
            {/* nom, prenom, sujet, email, message */}
            {/* btn rpondre */}
        </div>
    )
}
