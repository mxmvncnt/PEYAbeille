"use client";

import { useRouter } from 'next/navigation';
import styles from '../styles/item_panier.module.css'

export default function ItemPanier(
    data = "Aucune donnee"
) {
    const router = useRouter();
    router.refresh();

    // console.log(data)
    if (data["data"] == "Aucune donnee") {
        return (
            <div className={styles.container}>
                <h2>Aucune donnée</h2>
            </div>
        );
    } else {
        data = data["data"]

        return (
            <div key={data.item} className={styles.item_panier}>
                <h2 key={data.nom_produit}>{data.nom_produit}</h2>
                <input key={data.quantite} className={styles.input_quantite} type="number" defaultValue={data.quantite}></input>
                <p key={data.prix_suggere_unite}>{data.prix_suggere_unite * data.quantite}</p>
            </div>
        );
    }
}