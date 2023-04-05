import React from "react";
import '../../styles/produits.module.css'
import Link from "next/link";
import { getProduits } from "../../server/Api";
import IndicateurPrix from "../../components/IndicateurPrix";
import styles from '../../styles/produits.module.css'
import Image from "next/image";
import img_not_found from '../../public/no_img_found.png'

export default async function Produits() {
    const data = await getProduits();

    return (
        <div className={styles.page_produits_page_produits}>
            <h1>Produits</h1>

            <div className={styles.page_produits_grid_produits}>
                {data.map((item) => (
                    <div key={item["ID_PRODUIT"]}>
                        <div className={styles.page_produits_produit}>
                            <Image className={styles.thumbnail} src={img_not_found} alt="Aucune image n'à été trouvée pour ce produit" />
                            <h2 className={styles.page_produits_titre}>
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