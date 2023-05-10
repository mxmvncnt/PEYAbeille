import React from "react";
import { cookies } from 'next/headers';
import styles from '../../../styles/MessageAdmin.module.css';
import { getMessagesContact } from "../../../server/Api";
import MessageAdmin from "../../../components/MessageAdmin";


const getToken = () => {
    const nextCookies = cookies(); // Get cookies object
    const token = nextCookies.get('token') // Find cookie
    return token
}

export default async function Message() {

    const token = getToken();

    if (token != null) {

        let data = await getMessagesContact(token["value"]);

        if (data != 403) {
            return (
                <div className={styles.body}>
                    <h1>Messages</h1>
                    <div className={styles.container_messages}>
                        {data.map((message) => (
                            <MessageAdmin data={message} />
                        ))}
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

