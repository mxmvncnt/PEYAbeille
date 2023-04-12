import React from "react";
import styles from '../styles/produits.module.css'
import Image from "next/image";
import img_not_found from '../public/no_img_found.png'

const fs = require('fs');

export default async function ImageProduit(id) {
    id = id["id"];
    
    let fichierImage = `/home/maxime/Documents/GitHub/peyabeille/server/file_upload/id_produit/${id}/0.png`;

    if (fs.existsSync(fichierImage)) 
    {
        return <Image className={styles.thumbnail} width={1000} height={1000} src={fichierImage} alt="Aucune image n'à été trouvée pour ce produit" />
    } 
    else 
    {
        return <Image className={styles.thumbnail} src={img_not_found} alt="Aucune image n'à été trouvée pour ce produit" />
    }
}