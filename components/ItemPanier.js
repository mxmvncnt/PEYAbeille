"use client";

import styles from '../styles/item_panier.module.css'

export default function ItemPanier(
    data = "Aucune donnée"
) {
    if (data === "Aucune donnée") {
        return (
            <div className={styles.container}>
                <h2>Aucune donnée</h2>
            </div>
        );
    } else {
        data = data["data"]["items_panier"];
        return (
            <div>
                {data.map((item) => (
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