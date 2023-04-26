import React from "react";
import styles from '../styles/produit_inventaire.module.css';
import '../app/global.css'


export default function ProduitInventaire(
    jsonData
) {
    let data = jsonData["jsonData"];

    if (jsonData != null) {
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
                                <input className="input-field-singlerow" defaultValue={data["NOM"]}></input>

                                <label>Quantité disponible (unités): </label>
                                <input className="input-field-singlerow" type="number" min="0" defaultValue={data["QUANTITE"]}></input>

                                <label>Prix original ($): </label>
                                <input className="input-field-singlerow" type="number" defaultValue={data["PRIX_FIXE"]}></input>

                                <label>Prix suggéré ($): </label>
                                <input className="input-field-singlerow" type="number" defaultValue={data["PRIX_SUGGERE"]}></input>

                                <label>Description du produit: </label>
                                <textarea className="input-field-singlerow" defaultValue={data["DESCRIPTION"]}></textarea>

                            </form>
                        </div>

                        <form action={`http://localhost:4003/api/admin/upload_images/${data["ID_PRODUIT"]}`} method="post" encType="multipart/form-data">
                            <input type="file" name="images" multiple />
                            {/* <button type="submit" >Envoyer</button> */}
                            <input type="submit" value="Envoyer les images" />
                        </form>

                        <div>
                            <button className={styles.bttnSupprimer}>Supprimer produit</button>
                            <button className={styles.bttnConfirmer}>Confirmer</button>
                        </div>
                    </details>

                </div>
            </div>
        )
    }

}