import React from "react";
import './Style.css'
import { Link } from "react-router-dom";

export default function Produits() {

    return (
        <div>
            <h1>Produits</h1>
            <div className="grid-produits">
                <div className="produit">
                    <h2 className="titre">
                    </h2>
                    <h3 className="prix">
                    </h3>
                    <Link
                        to="/produit/12">
                        <button className="btn-acheter">Acheter</button>
                    </Link>
                </div>
            </div>
        </div>

    );
}