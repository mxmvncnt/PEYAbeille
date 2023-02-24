import React from "react";
import './Style.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getProduits } from "../../../server/Api";


export default function Produits() {
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
        <div className="page-produits-page-produits">
            <h1>Produits</h1>

            <div className="page-produits-grid-produits">
                {data.map((item) => (
                    <div key={item["ID_PRODUIT"]}>

                        <div className="page-produits-produit">
                            <h2 className="page-produits-titre">
                                {item["NOM"]}
                            </h2>
                            <h3 className="page-produits-prix">
                                {item["PRIX_SUGGERE"] + " $"}
                            </h3>
                            <Link
                                to={`/produit?id=${item["ID_PRODUIT"]}`}>
                                <button className="btn-acheter">Acheter</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}