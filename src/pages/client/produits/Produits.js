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

            {data.map((item) => (
                <div key={item["ID_PRODUIT"]}>
                    <div className="grid-produits">
                        <div className="produit">
                            <h2 className="titre">
                                {item["NOM"]}
                            </h2>
                            <h3 className="prix">
                                {item["PRIX_SUGGERE"] + " $"}
                            </h3>
                            <Link
                                to={`produit/${item["ID_PRODUIT"]}`}>
                                <button className="btn-acheter">Acheter</button>
                            </Link>
                        </div>
                    </div>
                </div>

            ))}
        </div>

    );
}