import React from "react";
import styles from '../styles/produits.module.css'
import Image from "next/image";
import { Suspense } from "react";
import img_not_found from '../public/no_img_found.png'
import { getImageProduit } from "../server/Api";

const fs = require('fs');

export default async function ImageProduit(id) {
    id = id["id"];

    let urlImage = await getImageProduit(id);

    if (urlImage != 404) {
        return (
            <Suspense fallback={<p>Chargement...</p>}>
                <Image 
                    className={styles.thumbnail} 
                    width={1000} 
                    height={1000} 
                    src={urlImage} 
                    alt="Aucune image n'à été trouvée pour ce produit" />
            </Suspense>
        )
    }
    else {
        return <Image className={styles.thumbnail} src={img_not_found} alt="Aucune image n'à été trouvée pour ce produit" />
    }
}