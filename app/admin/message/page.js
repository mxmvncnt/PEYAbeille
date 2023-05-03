import React from "react";
import { cookies } from 'next/headers';
import styles from '../../../styles/MessageAdmin.module.css';
import Commande from "../../../components/Commande";
import { getCommandesAdmin } from "../../../server/Api";
import MessageAdmin from "../../../components/MessageAdmin";


const getToken = () => {
    const nextCookies = cookies(); // Get cookies object
    const token = nextCookies.get('token') // Find cookie
    return token
}

export default async function Message() {

    const token = getToken();

    console.log(token)
    if (token != null) {

        let data = await getCommandesAdmin(token["value"]);

        if (data != 403) {
            return (
                <div className={styles.page}>
                    <h1>Messages</h1>
                    <MessageAdmin/>
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

