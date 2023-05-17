import React from "react";
import { cookies } from 'next/headers';
import styles from '../../../styles/inventaire.module.css';
import ProduitInventaire from "../../../components/ProduitInventaire";
import { getProduits, verifierSessionAdmin } from "../../../server/Api";


const getToken = () => {
    const nextCookies = cookies(); // Get cookies object
    const token = nextCookies.get('token') // Find cookie
    return token
}

export default async function inventaire() {
    const data = await getProduits();

    const tokenData = getToken();

    if (tokenData != null) {
        let token = tokenData["value"]

        if (await verifierSessionAdmin(token)) {
            return (
                <div style={{ minHeight: "100vh" }}>
                    <h1> Inventaire</h1>
                    <button>Ajouter produit</button>

                    {data.map((produit) => (
                        <div key={produit["ID_PRODUIT"]} className={styles.produit}>
                            <ProduitInventaire jsonData={produit} />
                        </div>
                    ))}
                </div>
            );
        }

        else {
            return (
                <div>
                    <h1>ERREUR: Vous n'avez pas la permission de voir cela.</h1>
                </div>
            )
        }
    } 
    
    else {
        return (
            <div>
                <h1>ERREUR: vous devez être connecté pour faire cela.</h1>
            </div>
        )
    }
}