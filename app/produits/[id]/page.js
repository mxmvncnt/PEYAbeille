import React from "react";
import '../../../styles/produit.module.css'
import Link from "next/link";
import Image from "next/image";
import { getInfosProduit } from "../../../server/Api";
import IndicateurPrix from "../../../components/IndicateurPrix";
import styles from '../../../styles/produit.module.css'
import mtl_bg from '../../../public/Montreal-estival.jpg'
import AjouterAuPanier from "../../../components/AjouterAuPanier";

export default async function Produit({ params }) {
    const data = await getInfosProduit(params.id);

    return (
        <div className={styles.page_produit}>

            <div className={styles.page_produit_grid}>

                {/* Section Images */}
                <div className={`${styles.page_produit_grid_item} ${styles.page_produit_grid_item_images}`}>
                    {/* Code pris et modifié de: https://css_tricks.com/can_get_pretty_far_making_slider_just_html_css/ */}
                    {/* Remplacer cela par une boucle quand nous avons de vraies images */}

                    {/* Boutons pour aller directement a une image */}
                    {/* <a href="#image_1">1</a>
                    <a href="#image_2">2</a>
                    <a href="#image_3">3</a>
                    <a href="#image_4">4</a>
                    <a href="#image_5">5</a> */}

                    <div className={styles.page_produit_grid_item_images_slider}>
                        <div className={styles.page_produit_grid_item_images_slider_item} id="slide_1">
                            <Image
                                id={styles.img}
                                src={mtl_bg}
                                alt={"test"}
                            />
                        </div>
                        <div className={styles.page_produit_grid_item_images_slider_item} id="slide_1">
                            <Image
                                id={styles.img}
                                src={mtl_bg}
                                alt={"test"}
                            />
                        </div>
                        <div className={styles.page_produit_grid_item_images_slider_item} id="slide_1">
                            <Image
                                id={styles.img}
                                src={mtl_bg}
                                alt={"test"}
                            />
                        </div>
                        <div className={styles.page_produit_grid_item_images_slider_item} id="slide_1">
                            <Image
                                id={styles.img}
                                src={mtl_bg}
                                alt={"test"}
                            />
                        </div>
                        <div className={styles.page_produit_grid_item_images_slider_item} id="slide_1">
                            <Image
                                id={styles.img}
                                src={mtl_bg}
                                alt={"test"}
                            />
                        </div>
                    </div>
                </div>

                {/* Section Infos Produit */}
                <div className={`${styles.page_produit_grid_item} ${styles.page_produit_grid_item_infos}`}>
                    <h1>{data["NOM"]}</h1>
                    <p>{data["DESCRIPTION"]}</p>
                </div>

                {/* Section ACHETER */}
                <div className={`${styles.page_produit_grid_item} ${styles.page_produit_grid_item_acheter}`}>
                    <div>
                        <IndicateurPrix prix_regulier={data["PRIX_FIXE"]} prix_suggere={data["PRIX_SUGGERE"]} />
                        
                        <AjouterAuPanier item={await data["ID_PRODUIT"]} nom_produit={await data["NOM"]} prix_suggere_unite={await data["PRIX_SUGGERE"]} quantite={1} />
                        
                        <small>En stock: {data["QUANTITE"]}</small>
                    </div>

                </div>

            </div>

        </div>
    );
}