import React from "react";
import '../../styles/produits.module.css'
import Link from "next/link";
import { getProduits } from "../../server/Api";
import IndicateurPrix from "../../components/IndicateurPrix";

export default async function Produits() {
    const data = await getProduits();

    return (
        <div className="page-produits-page-produits">
            <h1>Produits</h1>

            <div className="page-produits-grid-produits">
                {data.map((item) => (
                    <div key={item["ID_PRODUIT"]}>

                        <div className="page-produits-produit">
                            <h2 className="page-produits-titre">
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