"use client"

import React from "react";
import styles from '../styles/produit_inventaire.module.css';
import '../app/global.css'
import { useCookies } from "react-cookie";

// import { postModifierProduit } from "../server/Api";

function getToken() {
    // pris de https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
    const [cookies, setCookie] = useCookies(['token']);

    console.log(cookies.token)

    return cookies.token;
}

export default function ProduitInventaire(
    jsonData
) {
    let data = jsonData["jsonData"];

    let parsedToken = getToken();

    // HandleSubmit pris et modifie de https://nextjs.org/docs/pages/building-your-application/data-fetching/building-forms
    const handleSubmit = async (event) => {
        event.preventDefault();

        var formdata = new FormData();

        formdata.append("token", parsedToken);

        formdata.append("id_produit", data["ID_PRODUIT"]);

        formdata.append("nom", event.target.nom.value);
        formdata.append("description", event.target.description.value);
        formdata.append("prix_suggere", event.target.prix_suggere.value);
        formdata.append("prix_fixe", event.target.prix_fixe.value);
        formdata.append("inventaire", data["INVENTAIRE"]);
        formdata.append("quantite", event.target.quantite.value);
        formdata.append("categorie", data["CATEGORIE_ID_CATEGORIE"]);

        var requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: formdata,
            mode: "no-cors"
        };

        fetch("http://localhost:4003/api/admin/modifier_produit", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    };

    if (jsonData != null) {
        return (
            <div>
                <div className={styles.ContainerInventaire}>
                    <details className={styles.contenu}>
                        <summary className={styles.contenu_titre}>

                            {data["NOM"]}

                        </summary>
                        <div className={styles.form}>
                            <form onSubmit={handleSubmit}>

                                <label>Nom: </label>
                                <input id="nom" className="input-field-singlerow" defaultValue={data["NOM"]}></input>

                                <label>Quantité disponible (unités): </label>
                                <input id="quantite" className="input-field-singlerow" type="number" min="0" defaultValue={data["QUANTITE"]}></input>

                                <label>Prix original ($): </label>
                                <input id="prix_fixe" className="input-field-singlerow" type="number" defaultValue={data["PRIX_FIXE"]}></input>

                                <label>Prix suggéré ($): </label>
                                <input id="prix_suggere" className="input-field-singlerow" type="number" defaultValue={data["PRIX_SUGGERE"]}></input>

                                <label>Description du produit: </label>
                                <textarea id="description" className="input-field-singlerow" defaultValue={data["DESCRIPTION"]}></textarea>

                                <input type="submit" value="Confirmer" className={styles.bttnConfirmer} />
                            </form>
                        </div>

                        <form action={`http://localhost:4003/api/admin/upload_images/${data["ID_PRODUIT"]}`} method="post" encType="multipart/form-data">
                            <input type="file" name="images" multiple />
                            {/* <button type="submit" >Envoyer</button> */}
                            <input type="submit" value="Envoyer les images" />
                        </form>

                        <div>
                            <button className={styles.bttnSupprimer}>Supprimer produit</button>
                            {/* <button className={styles.bttnConfirmer}>Confirmer</button> */}
                        </div>
                    </details>

                </div>
            </div>
        )
    }
}
