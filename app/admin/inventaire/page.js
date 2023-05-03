import React from "react";
import styles from '../../../styles/inventaire.module.css';
import ProduitInventaire from "../../../components/ProduitInventaire";
import { getProduits } from "../../../server/Api";


export default async function inventaire() {
    const data = await getProduits();

    return (
        <div style={{ minHeight: "100vh" }}>
            <h1> Inventaire</h1>
            <button>Ajouter produit</button>

            {data.map((produit) => (
                    <div key={produit["ID_PRODUIT"]} className={styles.produit}>
                        <ProduitInventaire jsonData={produit}/>
                    </div>
                ))}
        </div>
    );
}