"use client"

import styles from "../styles/passer_commande.module.css"
import { useCookies } from "react-cookie";
import { redirect } from "next/navigation";
import '../app/global.css'
import Link from 'next/link';

function getToken() {
    // pris de https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
    const [cookies, setCookie] = useCookies(['token']);

    return cookies.token;
}

export default function PasserCommande(items) {

    items = items["items"];

    // adresse = adresse["adresse"]

    let parsedToken = getToken();

    // HandleSubmit pris et modifie de https://nextjs.org/docs/pages/building-your-application/data-fetching/building-forms
    const handleSubmit = async () => {

        let jsonData = {
            "token": parsedToken,
            "items": JSON.stringify(items),
            "adresse": "33 rue des pottiers"
        }

        var requestOptions = {
            // mode: "no-cors",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData)
        };

        fetch("http://localhost:4003/api/passer_commande", requestOptions)
            .then(response => response.json())
            .then(json => {
                alert('Commande enregistrée. Consultez votre profil pour voir le contenu.');
            })
            .catch(error => console.log('error', error)
            );

        // redirect('/commande')
    };

    return (
        <div className={styles.body}>
            <button className="btn-acheter" onClick={handleSubmit}>Commander</button>
        </div>
    )
}