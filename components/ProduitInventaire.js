import React from "react";
import styles from '../styles/produit_inventaire.module.css';


export default function ProduitInventaire() {
    return (
        <div>
            <div className={styles.ContainerInventaire}>
                <details className={styles.contenu}>
                    <summary className={styles.contenu_titre}>

                        Nom du produit

                    </summary>
                    <div className={styles.form}>
                        <form>
                            <label>Nom: </label>
                            <input className={styles.input_field}></input> <br />
                            <label>Quantitée disponible: </label>
                            <input className={styles.input_field} type="number" min="0"></input><br />
                            <label>Prix unitaire: </label>
                            <input className={styles.input_field} type="number"></input> $ <br />
                            <label>Description du produit: </label>
                            <textarea className={styles.input_field}></textarea><br />
                        </form>
                    </div>
                    <form action={`http://localhost:4003/api/admin/upload_images/${1}`} method="post" encType="multipart/form-data">
                        <input type="file" name="images" multiple />
                        {/* <button type="submit" >Envoyer</button> */}
                        <input type="submit" />
                    </form>
                    <div>
                        <button className={styles.bttnSupprimer}> Supprimer produit</button>
                        <button className={styles.bttnConfirmer}>Confirmer</button>
                    </div>
                </details>

            </div>
        </div>
    )
}