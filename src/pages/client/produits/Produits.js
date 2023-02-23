import React from "react";
import './Style.css'
import OracleDB from "oracledb";

export default function Produits() {
    return (
        <div>
            <h1>Produits</h1>
            <div class="grid-produits">
                <div class="produit">
                    <h2 class="titre">
                    </h2>
                    <h3 class="prix">
                    </h3>
                    <a href="/produit/<%= item.ID_PRODUIT %>">
                        <button class="btn-acheter">Acheter</button>
                    </a>
                </div>
            </div>
        </div>

    );
}