import React from 'react';
import styles from '../styles/MessageAdmin.module.css'

export default function MessageAdmin(){
    return(
        <div className={styles.containerMessage}>
            <div className={styles.message}>
                <div className={styles.nom}>
                    <h2>Nom :</h2>
                    <p> inserer nom</p>
                </div>
                <div className={styles.prenom}>
                    <h2>Prenom: </h2>
                    <p> inserer Prenom</p>
                </div>
                <div className={styles.sujet}>
                    <h2>Sujet :</h2>
                    <p>inserer sujet</p>
                </div>
                <div className={styles.message}>
                    <h2>message :</h2>
                    <p>inserer message</p>
                </div>
                <div className={styles.boutonMailTo}>
                    <button> Mail to</button>
                </div>
                {/* nom, prenom, sujet, email, message */}
                {/* btn rpondre */}
            </div>
        </div>
    )
}
