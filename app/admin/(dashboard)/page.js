import React from "react";
import { cookies } from 'next/headers';
import { getAdminStats } from '../../../server/Api'
import styles from '../../../styles/dashboard.module.css';
import Link from "next/link";

const getToken = () => {
    const nextCookies = cookies(); // Get cookies object
    const token = nextCookies.get('token') // Find cookie
    return token
}

export default async function dashboard() {
    const token = getToken();

    if (token != null) {
        const data = await getAdminStats(token["value"]);

        if (data != 403) {
            return (
                <div className={styles.body}>
                    <h1>Dashboard</h1>
                    <div className={styles.dashboard_container}>
                        <div className={styles.stat}>
                            <h1>{data["ventes"]}</h1>
                            <p>Volume de ventes total </p>
                        </div>
                        <div className={styles.stat}>
                            <h1>{data["commandes"]}</h1>
                            <p>Nombre de commandes total</p>
                        </div>
                        <div className={styles.stat}>
                            <h1> {data["produits"]["plus_populaire"]["produit"]["nom"]}</h1>
                            <p>Produit le plus populaire ({data["produits"]["plus_populaire"]["ventes"]} ventes)</p>
                        </div>
                        <div className={styles.stat}>
                            <h1>{data["produits"]["moins_populaire"]["produit"]["nom"]}</h1>
                            <p>Produit le moins populare ({data["produits"]["moins_populaire"]["ventes"]} ventes)</p>
                        </div>


                    </div>
                    <div className={styles.bouttons}>
    
                        <div className={styles.AllerCommande}>
                            <h3> Dernieres commandes</h3>
                            <Link href="/admin/commandes">
                                <button className={styles.button}> Go!</button>
                            </Link>
                        </div>
    
                        <div className={styles.AllerInventaire}>
                            <h3> Inventaire</h3>
                            <Link href="/admin/inventaire">
                                <button className={styles.button}> Go!</button>
                            </Link>
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
        
    } else {
        return (
            <div>
                <h1>ERREUR: vous devez être connecté pour faire cela.</h1>
            </div>
        )
    }


}