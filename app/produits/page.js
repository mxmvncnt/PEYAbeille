import React from "react";
import '../../styles/produits.module.css'
import Link from "next/link";
import { getProduits } from "../../server/Api";
import IndicateurPrix from "../../components/IndicateurPrix";
import styles from '../../styles/produits.module.css'
import ImageProduit from "../../components/ImageProduit";

export default async function Produits() {
    const data = await getProduits();

    return (
        <div className={styles.body}>
            <h1>Produits</h1>

            <div className={styles.grid_layout}>
                {data.map((item) => (
                    <div key={item["ID_PRODUIT"]}>
                        <div className={styles.produit}>

                            <ImageProduit id={item["ID_PRODUIT"]} />

                            <h2 className={styles.produit_titre}>
                                {item["NOM"]}
                            </h2>
                            <IndicateurPrix prix_regulier={item["PRIX_FIXE"]} prix_suggere={item["PRIX_SUGGERE"]} />
                            <Link
                                href={`/produits/${item["ID_PRODUIT"]}`}>
                                <button className="btn-acheter">Acheter</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}