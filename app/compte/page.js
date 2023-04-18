import React from "react";
import styles from '../../styles/compte.module.css';
import Informations from "../../components/InformationsCompte";
import UneCommande from "../../components/UneCommande";
import fleurs from '../../public/fleurs.jpg'
import Image from "next/image";

export default function Compte() {
    return (
        <div>
            <div className={styles.container}>
                <Image className= {styles.imageFleurs}
                 src={fleurs}/>
                 <div className={styles.overlay}>
                    <h1> Mon compte</h1>
                    <div className={styles.bouttons}>
                        <button className={styles.btn}>Modifier mes informations </button>
                        &nbsp;
                        <button className={styles.btn}>Mes commandes </button>
                        &nbsp;
                        <button className={styles.btn}>Se déconnecter </button>
                    </div>
                 </div>
                
            </div>
            <Informations />
            <div className={styles.containerCommande}>
                <h2>Mes commandes</h2>
                <UneCommande/>
            </div>
            
        </div>

    )
}

