import React from "react";
import styles from '../../../styles/inventaire.module.css';
import ProduitInventaire from "../../../components/ProduitInventaire";

export default function inventaire() {
    return (
        <div>
            <h1> Inventaire</h1>
            <button>Ajouter produit</button>
            <ProduitInventaire />
        </div>
    );
}