import React from "react";
import '../../styles/produits.module.css'
import Link from "next/link";
import { getProduits } from "../../server/Api";
import IndicateurPrix from "../../components/IndicateurPrix";
import styles from '../../styles/produits.module.css'
import ImageProduit from "../../components/ImageProduit";


export default async function Produits({searchParams}) {
    const sort = parseInt(searchParams["sort"])

    const data = await getProduits(sort);

    return (
        <div className={styles.body}>
            <h1>Produits</h1>

            <form>
                <label>Trier les produits:</label>
                <select name="sort" id="sort">
                    <option value="0" selected={sort == NaN ? false : true}>Par défaut</option>
                    <option value="1" selected={sort == 1 ? true : false}>Prix croissant ($ -{'>'} $$$)</option>
                    <option value="2" selected={sort == 2 ? true : false}>Prix décroissant ($$$ -{'>'} $)</option>
                    <option value="3" selected={sort == 3 ? true : false}>Ordre alphabétique (A -{'>'} Z)</option>
                    <option value="4" selected={sort == 4 ? true : false}>Ordre alphabétique inverse (Z -{'>'} A)</option>
                </select>
                <input type="submit" value="Submit" />
            </form>

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