"use client";

import styles from '../styles/item_panier.module.css'
import { useRouter } from 'next/navigation';
import { useCookies } from "react-cookie";



export default function Incrementeur(
    data = "Aucune donnee"
) {

    console.log(data)
    const [cookies, setCookie] = useCookies(['panier'])
    const router = useRouter();
    
    function supprimerItem(idItem) {
        let itemsPanier = cookies["panier"]["items_panier"];

        for (let i = 0; i < itemsPanier.length; i++) {
            if (itemsPanier[i].item == idItem) {
                itemsPanier.splice(i, 1);
                setCookie('panier', { "items_panier": itemsPanier }, { sameSite: true, path: "/" });
                router.refresh();
            }
        }
    }

    if (data["data"] == "Aucune donnee") {
        return (
            <div className={styles.container}>
                <h2>Aucune donnée</h2>
            </div>
        );
    }
}