import React from "react";
import './Style.css'
import { Link } from "react-router-dom";

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
                    <Link
                        to="/produit/12">
                        <button class="btn-acheter">Acheter</button>
                    </Link>
                </div>
            </div>
        </div>

    );
}