import React from "react";
import '../../../styles/produit.module.css'
import Link from "next/link";
import { getInfosProduit } from "../../../server/Api";
import IndicateurPrix from "../../../components/IndicateurPrix";
import styles from '../../../styles/produit.module.css'

export default async function Produit({params}) {
    // let [searchParams] = useSearchParams();
    // const idProduit = searchParams.get("id");

    const data = await getInfosProduit(params.id);

    return (
        <div className={styles.page_produit_grid_item_images_slider}>

            <div className="page_produit_grid">

                {/* Section Images */}
                <div className="page_produit_grid_item page_produit_grid_item_images">
                    {/* Code pris et modifié de: https://css_tricks.com/can_get_pretty_far_making_slider_just_html_css/ */}
                    {/* Remplacer cela par une boucle quand nous avons de vraies images */}

                    {/* Boutons pour aller directement a une image */}
                    {/* <a href="#image_1">1</a>
                    <a href="#image_2">2</a>
                    <a href="#image_3">3</a>
                    <a href="#image_4">4</a>
                    <a href="#image_5">5</a> */}

                    <div className="page_produit_grid_item_images_slider">
                        <div className="page_produit_grid_item_images_slider_item" id="slide_1"><img src="https://www.airtransat.com/getmedia/cafc7e6e_d0ff_497e_9998_e708f41aa191/Montreal_estival.aspx" alt=""/></div>
                        <div className="page_produit_grid_item_images_slider_item" id="slide_2"><img src="https://www.airtransat.com/getmedia/cafc7e6e_d0ff_497e_9998_e708f41aa191/Montreal_estival.aspx" alt=""/></div>
                        <div className="page_produit_grid_item_images_slider_item" id="slide_3"><img src="https://www.airtransat.com/getmedia/cafc7e6e_d0ff_497e_9998_e708f41aa191/Montreal_estival.aspx" alt=""/></div>
                        <div className="page_produit_grid_item_images_slider_item" id="slide_4"><img src="https://www.airtransat.com/getmedia/cafc7e6e_d0ff_497e_9998_e708f41aa191/Montreal_estival.aspx" alt=""/></div>
                        <div className="page_produit_grid_item_images_slider_item" id="slide_5"><img src="https://www.airtransat.com/getmedia/cafc7e6e_d0ff_497e_9998_e708f41aa191/Montreal_estival.aspx" alt=""/></div>
                    </div>
                </div>

                {/* Section Infos Produit */}
                <div className="page_produit_grid_item page_produit_grid_item_infos">
                    <h1>{data["NOM"]}</h1>
                    <p>{data["DESCRIPTION"]}</p>
                </div>

                {/* Section ACHETER */}
                <div className="page_produit_grid_item page_produit_grid_item_acheter">
                    <div>
                        <IndicateurPrix prix_regulier={data["PRIX_FIXE"]} prix_suggere={data["PRIX_SUGGERE"]} />
                        <a>
                            <button className="btn_acheter">ACHETER</button>
                        </a>
                        <small>En stock: {data["QUANTITE"]}</small>
                    </div>

                </div>

            </div>

        </div>
    );
}