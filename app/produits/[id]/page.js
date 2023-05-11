import React from "react";
import '../../../styles/produit.module.css'
import Link from "next/link";
import Image from "next/image";
import { getInfosProduit } from "../../../server/Api";
import IndicateurPrix from "../../../components/IndicateurPrix";
import styles from '../../../styles/produit.module.css'
import AjouterAuPanier from "../../../components/AjouterAuPanier";
import CarouselImageProduit from "../../../components/CarouselImagesProduit";

export default async function Produit({ params }) {
    const data = await getInfosProduit(params.id);

    return (
        <div className={styles.body}>

            <div className={styles.page_produit_grid}>

                <CarouselImageProduit id={params.id} />

                <div className={styles.page_produit_grid_item}>
                    {/* Section Infos Produit */}
                    <div className={`${styles.page_produit_grid_item_infos}`}>
                        <h1>{data["NOM"]}</h1>
                        <p>{data["DESCRIPTION"]}</p>
                    </div>

                    {/* Section ACHETER */}
                    <div className={`${styles.page_produit_grid_item_acheter}`}>
                        <div>
                            <IndicateurPrix prix_regulier={data["PRIX_FIXE"]} prix_suggere={data["PRIX_SUGGERE"]} />

                            <AjouterAuPanier item={await data["ID_PRODUIT"]} nom_produit={await data["NOM"]} prix_suggere_unite={await data["PRIX_SUGGERE"]} quantite={1} />
                            <p className={styles.indicateur_stock}>En stock: {data["QUANTITE"]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}