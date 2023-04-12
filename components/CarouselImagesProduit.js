import React from "react";
import styles from '../styles/produit.module.css'
import Image from "next/image";

import mtl_bg from '../public/Montreal-estival.jpg'

const fs = require('fs');

export default async function CarouselImageProduit(id) {
    id = id["id"];

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
        </div>
    )
}