import React from "react";
import { cookies } from 'next/headers';
import styles from '../../styles/panier.module.css';
import ItemPanier from "../../components/ItemPanier";

const getItemsPanier = () => {
    const nextCookies = cookies();
    let arrayPanier = nextCookies.get('panier');

    let arrPanierLength;

    try {
        let parsedArrayPanier = JSON.parse(arrayPanier["value"]);
        arrPanierLength = parsedArrayPanier["items_panier"].length
    } catch (error) {
        arrPanierLength = 0;
    }

    if (arrayPanier == undefined || arrPanierLength == 0) {
        return "Aucune donnee";
    } else {
        return arrayPanier;
    }
}

export default async function Panier() {
    const data = getItemsPanier();

    if (data != "Aucune donnee") {
        let dataTotal = data["value"];
        dataTotal = JSON.parse(dataTotal)
        let sousTotal = 0;

        for (let i = 0; i < dataTotal["items_panier"].length; i++) {
            sousTotal += dataTotal["items_panier"][i]["prix_suggere_unite"] * dataTotal["items_panier"][i]["quantite"];
        }

        sousTotal = sousTotal.toFixed(2)
        let taxesTVQ = (sousTotal * 0.09975).toFixed(2);
        let taxesTPS = (sousTotal * 0.05).toFixed(2);
        let taxesTotal = (parseFloat(taxesTPS) + parseFloat(taxesTVQ)).toFixed(2);
        let prixTotal = (parseFloat(sousTotal) + parseFloat(taxesTotal)).toFixed(2);

        let itemsPanierJson = dataTotal["items_panier"]

        return (
            <div className={styles.body}>

                <div className={styles.sections_panier}>

                    <div>
                        <h2 className={styles.titre_section}>Adresse</h2>
                        <div className={styles.infos_commande}>
                            <form action={``} method="GET">

                                <label htmlFor="prenom">Prénom:</label>
                                <input className={styles.input_field} type="text" id="prenom" name="prenom" />

                                <label htmlFor="nom">Nom:</label>
                                <input className={styles.input_field} type="text" id="nom" name="nom" />

                                <label htmlFor="numeroRue">Numéro de rue:</label>
                                <input className={styles.input_field} type="text" id="numeroRue" name="numeroRue" />

                                <label htmlFor="rue">Rue:</label>
                                <input className={styles.input_field} type="text" id="rue" name="rue" />

                                <input type="submit" value="Confirmer" />
                            </form>
                        </div>
                    </div>


                    <div>
                        <h2 className={styles.titre_section}>Items</h2>
                        <div className={styles.carte_items_commande}>
                            <div className={styles.items_commande}>
                                <div className={styles.data_items}>

                                    {itemsPanierJson.map((item) => (
                                        <ItemPanier key={item.item} data={item} />
                                    ))}

                                </div>
                            </div>
                            <div className={styles.infos_total}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className={styles.total_label}><b>Sous-total: </b></td>
                                            <td className={styles.total_prix}>{sousTotal} $</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.total_label}><b>Taxes: </b></td>
                                            <td className={styles.total_prix}>{taxesTotal} $</td>
                                        </tr>
                                        <tr>
                                            <td className={`${styles.total_label} ${styles.details_taxes}`}>TPS: </td>
                                            <td className={styles.total_prix}>{taxesTPS} $</td>
                                        </tr>
                                        <tr>
                                            <td className={`${styles.total_label} ${styles.details_taxes}`}>TVQ: </td>
                                            <td className={styles.total_prix}>{taxesTVQ} $</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.total_label}><b>Total: </b></td>
                                            <td className={styles.total_prix}>{prixTotal} $</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className={styles.body}>
                <div className={styles.sections_panier}>

                    <div>
                        <h2 className={styles.titre_section}>Adresse</h2>
                        <div className={styles.infos_commande}>
                            <form action={``} method="GET">

                                <label htmlFor="prenom">Prénom:</label>
                                <input className={styles.input_field} disabled />

                                <label htmlFor="nom">Nom:</label>
                                <input className={styles.input_field} disabled />

                                <label htmlFor="numeroRue">Numéro de rue:</label>
                                <input className={styles.input_field} disabled />

                                <label htmlFor="rue">Rue:</label>
                                <input className={styles.input_field} disabled />

                                <input value="Confirmer" disabled/>
                            </form>
                        </div>
                    </div>


                    <div>
                        <h2 className={styles.titre_section}>Items</h2>
                        <div className={styles.carte_items_commande}>
                            <div className={styles.items_commande}>
                                <div className={styles.data_items}>

                                    <h2>
                                        Aucun produit dans le panier.
                                    </h2>

                                </div>
                            </div>
                            <div className={styles.infos_total}>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }


}