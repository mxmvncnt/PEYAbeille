import React from "react";
import styles from '../../../styles/inventaire.module.css';
import ProduitInventaire from "../../../components/ProduitInventaire";

export default function inventaire() {
    return (
        <div style={{ minHeight: "100vh" }}>
            <h1> Inventaire</h1>
            <button>Ajouter produit</button>

            <div className={styles.produit}>
                <ProduitInventaire />
            </div>
            
            <div className={styles.produit}>
                <ProduitInventaire />
            </div>
        </div>
    );
}