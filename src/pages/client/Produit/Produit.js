import React from "react";
import './Style.css'
import { getInfosProduit } from "../../../server/Api";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'

export default function Produit() {
    let [searchParams] = useSearchParams();
    const idProduit = searchParams.get("id");

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const json = await getInfosProduit(idProduit);
            console.log(json)
            setData(json[0]);
        }

        fetchData();
    }, []);

    return (
        <div className="page-produit">


            <div className="page-produit-grid">

                <div className="page-produit-grid-item page-produit-grid-item-images">

                </div>

                <div className="page-produit-grid-item page-produit-grid-item-infos">
                    <h1>{data["NOM"]}</h1>
                    <p>{data["DESCRIPTION"]}</p>
                </div>

                <div className="page-produit-grid-item page-produit-grid-item-acheter">
                    ACHETER
                </div>

            </div>

        </div>
    );
}