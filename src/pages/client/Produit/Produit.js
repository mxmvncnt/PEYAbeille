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

                {/* Section Images */}
                <div className="page-produit-grid-item page-produit-grid-item-images">
                    {/* Code pris et modifié de: https://css-tricks.com/can-get-pretty-far-making-slider-just-html-css/ */}
                    {/* Remplacer cela par une boucle quand nous avons de vraies images */}

                    {/* Boutons pour aller directement a une image */}
                    {/* <a href="#image-1">1</a>
                    <a href="#image-2">2</a>
                    <a href="#image-3">3</a>
                    <a href="#image-4">4</a>
                    <a href="#image-5">5</a> */}

                    <div className="page-produit-grid-item-images-slider">
                        <div className="page-produit-grid-item-images-slider-item" id="slide-1">image 1</div>
                        <div className="page-produit-grid-item-images-slider-item" id="slide-2">image 2</div>
                        <div className="page-produit-grid-item-images-slider-item" id="slide-3">image 3</div>
                        <div className="page-produit-grid-item-images-slider-item" id="slide-4">image 4</div>
                        <div className="page-produit-grid-item-images-slider-item" id="slide-5">image 5</div>
                    </div>
                </div>

                {/* Section Infos Produit */}
                <div className="page-produit-grid-item page-produit-grid-item-infos">
                    <h1>{data["NOM"]}</h1>
                    <p>{data["DESCRIPTION"]}</p>
                </div>

                {/* Section ACHETER */}
                <div className="page-produit-grid-item page-produit-grid-item-acheter">
                    ACHETER
                </div>

            </div>

        </div>
    );
}