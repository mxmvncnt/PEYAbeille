import React from "react";
import styles from '../../../styles/inventaire.module.css';


export default function inventaire() {
    return (

        <div>
            <h1> Inventaire</h1>
            <button>Ajouter produit</button>
            <Inventaire/>
        </div>

    );
}

function Inventaire() {
    return (
        <div className={styles.ContainerInventaire}>

            <div className={styles.form}>
                <form>
                    <label>Nom: </label>
                    <input></input> <br />
                    <label>Quantitée disponible: </label>
                    <input type="number" min="0"></input><br />
                    <label>Prix unitaire: </label>
                    <input type="number"></input> $ <br />
                    <label>Description du produit: </label>
                    <textarea></textarea><br />
                </form>
            </div>
            <div className={styles.ContainerImage}>
                <p> Ajouter une image</p>
                <button>Ajouter Image</button>
            </div>
            <div>
            <button className={styles.bttnSupprimer}> Supprimer produit</button>
            <button className={styles.bttnConfirmer}>Confirmer</button>
            </div>
            
        </div>
    )
}