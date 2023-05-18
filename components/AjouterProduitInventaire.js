"use client"

import React from "react";
import styles from '../styles/produit_inventaire.module.css';
import '../app/global.css'
import { useCookies } from "react-cookie";
import { useRouter } from 'next/navigation';

// import { postModifierProduit } from "../server/Api";

function getToken() {
    // pris de https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
    const [cookies, setCookie] = useCookies(['token']);

    return cookies.token;
}

export default function AjouterProduitInventaire(
    jsonData
) {
    let data = jsonData["jsonData"];

    const router = useRouter();

    let parsedToken = getToken();

    // HandleSubmit pris et modifie de https://nextjs.org/docs/pages/building-your-application/data-fetching/building-forms
    const handleSubmit = async (event) => {
        event.preventDefault();

        var formdata = new FormData();

        formdata.append("token", parsedToken);

        formdata.append("nom", event.target.nom.value);
        formdata.append("description", event.target.description.value);
        formdata.append("prix_suggere", event.target.prix_suggere.value);
        formdata.append("prix_fixe", event.target.prix_fixe.value);
        formdata.append("inventaire", event.target.quantite.value);
        formdata.append("quantite", event.target.quantite.value);
        formdata.append("categorie", 1);

        var requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: formdata,
            mode: "no-cors"
        };

        fetch("http://localhost:4003/api/admin/ajouter_produit", requestOptions)
            .then(response => response.text())
            .then(result => alert("Le produit a été ajouté."))
            .catch(error => console.log('error', error)
        );

        
        event.target.nom.value = "";
        event.target.description.value = "";
        event.target.prix_suggere.value = "";
        event.target.prix_fixe.value = "";
        event.target.quantite.value = "";

        router.refresh();
    };
    return (
        <div>
            <div className={styles.ContainerInventaire}>
                <h2>Ajouter un produit</h2>
                <div className={styles.form}>
                    <form onSubmit={handleSubmit}>

                        <label>Nom: </label>
                        <input id="nom" className="input-field-singlerow"></input>

                        <label>Quantité disponible (unités): </label>
                        <input id="quantite" className="input-field-singlerow" type="number" min="0"></input>

                        <label>Prix original ($): </label>
                        <input id="prix_fixe" className="input-field-singlerow" type="number"></input>

                        <label>Prix suggéré ($): </label>
                        <input id="prix_suggere" className="input-field-singlerow" type="number"></input>

                        <label>Description du produit: </label>
                        <textarea id="description" className="input-field-singlerow"></textarea>

                        <input type="submit" value="Confirmer" className={styles.bttnConfirmer} />
                    </form>
                </div>
            </div>
        </div>
    )

}
