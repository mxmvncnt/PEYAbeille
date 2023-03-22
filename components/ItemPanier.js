"use client";

import styles from '../styles/item_panier.module.css'

export default function ItemPanier(
    data = "Aucune donnee"
) {
    if (data["data"] == "Aucune donnee") {
        return (
            <div className={styles.container}>
                <h2>Aucune donnée</h2>
            </div>
        );
    } else {
        let dataJson = data["data"]["value"];

        dataJson = JSON.parse(dataJson)
        dataJson = dataJson["items_panier"]

        return (
            <div>
                {dataJson.map((item) => (
                    <div className={styles.item_panier}>
                        <h2 key={item.nom_produit}>{item.nom_produit}</h2>
                        <input className={styles.input_quantite} key={item.quantite} type="number" defaultValue={item.quantite}></input>
                        <p key={item.prix_suggere_unite}>{item.prix_suggere_unite * item.quantite}</p>
                    </div>
                ))}
            </div>
        );
    }
}