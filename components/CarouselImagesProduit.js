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

    let numeroImageNavigation = 0;
    let numeroImage = 0

    if (jsonImages != 404) {
        jsonImages = jsonImages["produits"]

        return (
            <div>
                {/* Section Images */}
                <div className={`${styles.carousel} ${styles.page_produit_grid_item_images}`}>
                    {/* Code pris et modifié de: https://css-tricks.com/can-get-pretty-far-making-slider-just-html-css/ */}
                    {/* Remplacer cela par une boucle quand nous avons de vraies images */}

                    <div className={styles.carousel_slider}>
                        {
                            jsonImages.map((urlImage) => (
                                <div className={styles.carousel_slider_item} id="slide_1">
                                    <Suspense fallback={<p>Chargement...</p>}>
                                        <Image
                                            id={`image_${++numeroImage}`}
                                            className={styles.carousel_image}
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

                    {/* Boutons pour aller directement a une image */}
                    <div className={styles.boutons_navigation}>
                        {
                            jsonImages.map((urlImage) => (
                                <a className={styles.navigation_image_item} href={`#image_${++numeroImageNavigation}`}>{numeroImageNavigation}</a>
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
                <div className={styles.carousel_slider}>
                    <div className={styles.carousel_slider_item} id="slide_1">
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