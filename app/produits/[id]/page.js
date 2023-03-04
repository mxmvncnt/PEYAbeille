import React from "react";
import '../../../styles/produit.module.css'
import Link from "next/link";
import { getInfosProduit } from "../../../server/Api";
import IndicateurPrix from "../../../components/IndicateurPrix";

export default async function Produit({params}) {
    // let [searchParams] = useSearchParams();
    // const idProduit = searchParams.get("id");

    const data = await getInfosProduit(params.id);

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
                        <div className="page-produit-grid-item-images-slider-item" id="slide-1"><img src="https://www.airtransat.com/getmedia/cafc7e6e-d0ff-497e-9998-e708f41aa191/Montreal-estival.aspx" alt=""/></div>
                        <div className="page-produit-grid-item-images-slider-item" id="slide-2"><img src="https://www.airtransat.com/getmedia/cafc7e6e-d0ff-497e-9998-e708f41aa191/Montreal-estival.aspx" alt=""/></div>
                        <div className="page-produit-grid-item-images-slider-item" id="slide-3"><img src="https://www.airtransat.com/getmedia/cafc7e6e-d0ff-497e-9998-e708f41aa191/Montreal-estival.aspx" alt=""/></div>
                        <div className="page-produit-grid-item-images-slider-item" id="slide-4"><img src="https://www.airtransat.com/getmedia/cafc7e6e-d0ff-497e-9998-e708f41aa191/Montreal-estival.aspx" alt=""/></div>
                        <div className="page-produit-grid-item-images-slider-item" id="slide-5"><img src="https://www.airtransat.com/getmedia/cafc7e6e-d0ff-497e-9998-e708f41aa191/Montreal-estival.aspx" alt=""/></div>
                    </div>
                </div>

                {/* Section Infos Produit */}
                <div className="page-produit-grid-item page-produit-grid-item-infos">
                    <h1>{data["NOM"]}</h1>
                    <p>{data["DESCRIPTION"]}</p>
                </div>

                {/* Section ACHETER */}
                <div className="page-produit-grid-item page-produit-grid-item-acheter">
                    <div>
                        <IndicateurPrix prix_regulier={data["PRIX_FIXE"]} prix_suggere={data["PRIX_SUGGERE"]} />
                        <a>
                            <button className="btn-acheter">ACHETER</button>
                        </a>
                        <small>En stock: {data["QUANTITE"]}</small>
                    </div>

                </div>

            </div>

        </div>
    );
}