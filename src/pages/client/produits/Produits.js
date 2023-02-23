import React from "react";
import './Style.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getProduits } from "../../../server/Api";


export default function Produits() {
    const produitsJson = getProduits();

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const json = await getProduits();
            console.log(json)
            setData(json);
        }

        fetchData();
    }, []);

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