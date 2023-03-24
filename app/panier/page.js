import React from "react";
import { cookies } from 'next/headers';
import styles from '../../styles/panier.module.css';
import ItemPanier from "../../components/ItemPanier";

const getItemsPanier = () => {
    const nextCookies = cookies();
    let arrayPanier = nextCookies.get('panier');

    if (arrayPanier == undefined) {
        return "Aucune donnee";
    } else {
        return arrayPanier;
    }
}

export default async function Panier() {

    const data = getItemsPanier();

    return (
        <div className={styles.body}>
            {/* <h1>Panier</h1> */}

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
                                <ItemPanier data={data} />
                            </div>
                        </div>
                        <div className={styles.infos_total}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><b>Sous-total: </b></td>
                                        <td>30,00 $</td>
                                    </tr>
                                    <tr>
                                        <td><b>Taxes: </b></td>
                                        <td>7,49 $</td>
                                    </tr>
                                    <tr>
                                        <td>TPS: </td>
                                        <td>2,50 $</td>
                                    </tr>
                                    <tr>
                                        <td>TVQ: </td>
                                        <td>4,99 $</td>
                                    </tr>
                                    <tr>
                                        <td><b>Taxes: </b></td>
                                        <td>57,49 $</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
}