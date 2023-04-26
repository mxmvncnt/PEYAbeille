import React from "react";
import styles from '../styles/produit.module.css'
import Image from "next/image";
import { Suspense } from "react";
import { getImagesProduit } from "../server/Api";

import img_not_found from '../public/no_img_found.png'
const fs = require('fs');

export default async function CarouselImageProduit(id) {
    id = id["id"];

    let jsonImages = await getImagesProduit(id);

    if (jsonImages != 404) {
        jsonImages = jsonImages["produits"]

        return (
            <div>
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
                        {
                            jsonImages.map((urlImage) => (
                                <div className={styles.page_produit_grid_item_images_slider_item} id="slide_1">
                                    <Suspense fallback={<p>Chargement...</p>}>
                                        <Image
                                            id={styles.img}
                                            key={urlImage["url"]}
                                            src={urlImage["url"]}
                                            width={1000}
                                            height={1000}
                                            alt={"test"}
                                        />
                                    </Suspense>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className={`${styles.page_produit_grid_item} ${styles.page_produit_grid_item_images}`}>
                <div className={styles.page_produit_grid_item_images_slider}>
                    <div className={styles.page_produit_grid_item_images_slider_item} id="slide_1">
                        <Image
                            id={styles.img}
                            src={img_not_found}
                            width={1000}
                            height={1000}
                            alt={"test"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )

}