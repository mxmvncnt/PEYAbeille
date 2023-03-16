import React from "react";
import { cookies } from 'next/headers';
import { getAdminStats } from '../../../server/Api'
import styles from '../../../styles/dashboard.module.css';

const getToken = () => {
    const nextCookies = cookies(); // Get cookies object
    const token = nextCookies.get('token') // Find cookie
    return token
}

export default async function dashboard() {
    const token = getToken();

    if (token != null) {
        const data = await getAdminStats(token["value"]);
        return(
            <div>
                <h1>Dashboard</h1>
                <div className={styles.dashboard_container}>
                    <p>Volume de ventes total: {data["ventes"]}</p>
                    <p>Nombre de commandes total: {data["commandes"]}</p>
                    <p>Produit le plus populaire: {data["produits"]["plus_populaire"]["produit"]["nom"]} ({data["produits"]["plus_populaire"]["ventes"]} ventes)</p>
                    <p>Produit le moins populare: {data["produits"]["moins_populaire"]["produit"]["nom"]} ({data["produits"]["moins_populaire"]["ventes"]} ventes)</p>
                </div>
                <div className={styles.bouttons}>
                    <div className={styles.AllerCommande}>
                        <h3> Dernieres commandes</h3>
                        <button className={styles.button}> Go!</button>
                    </div>
                    <div className={styles.AllerInventaire}>
                        <h3> Inventaire</h3>
                        <button className={styles.button}> Go!</button>
                    </div>
                </div>
    
            </div>
        );
    } else {
        return (
            <div>
                <h1>ERREUR: vous n'avez pas les permissions pour faire cela.</h1>
            </div>
        )
    }


}