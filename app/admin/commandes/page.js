import React from "react";
import { cookies } from 'next/headers';
import styles from '../../../styles/commande.module.css';
import Commande from "../../../components/Commande";
import { getCommandesAdmin } from "../../../server/Api";


const getToken = () => {
    const nextCookies = cookies(); // Get cookies object
    const token = nextCookies.get('token') // Find cookie
    return token
}

export default async function Commandes() {

    const token = getToken();

    console.log(token)
    if (token != null) {

        let data = await getCommandesAdmin(token["value"]);

        if (data != 403) {
            return (
                <div style={{minHeight:"100vh"}}>
                    {data["commandes"].map((commande) => (
                        <Commande data={commande} key={commande.id}/>
                    ))}
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

