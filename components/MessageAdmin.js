import React from 'react';
import styles from '../styles/MessageAdmin.module.css'

export default function MessageAdmin(data) {

    const jsonData = data["data"]

    return (
        <div className={styles.message}>
            <div className={styles.nom}>
                <h3 className={styles.inline_child}>Nom: </h3>
                <p className={styles.inline_child} id={styles.inline_child_content}>{jsonData.nom}</p>
            </div>
            <div className={styles.prenom}>
                <h3 className={styles.inline_child}>Prénom: </h3>
                <p className={styles.inline_child} id={styles.inline_child_content}>{jsonData.prenom}</p>
            </div>
            <div className={styles.email}>
                <h3>Courriel: </h3>
                <p>{jsonData.email}</p>
            </div>
            <div className={styles.sujet}>
                <h3>Sujet: </h3>
                <p>{jsonData.sujet}</p>
            </div>
            <div className={styles.contenu}>
                <h3>Message: </h3>
                <p>{jsonData.message}</p>
            </div>
            <div className={styles.boutonMailTo}>
                <a href={`mailto:${jsonData.email}?subject=Re: ${jsonData.sujet}&body=${jsonData.message}`}>
                    <button>Répondre</button>
                </a>

            </div>
            {/* nom, prenom, sujet, email, message */}
            {/* btn rpondre */}
        </div>
    )
}
