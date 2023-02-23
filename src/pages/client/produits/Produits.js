import React from "react";
import './Style.css'
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { getProduits } from "../../../server/Api";

export default function Produits() {
    console.log(getProduits())

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