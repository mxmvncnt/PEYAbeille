"use client";

import styles from '../styles/item_panier.module.css'
import { useRouter } from 'next/navigation';
import { useCookies } from "react-cookie";
import Incrementeur from './Incrementeur';



export default function ItemPanier(
    data = "Aucune donnee"
) {
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
    } else {
        data = data["data"]

        return (
            <div className={styles.item_panier}>
                <h2>{data.nom_produit}</h2>
                <Incrementeur data={data}/>
                {/* <input className={styles.input_quantite} type="number" defaultValue={data.quantite}></input> */}
                <p>{data.prix_suggere_unite * data.quantite}</p>
                <button onClick={() => supprimerItem(data.item)}>Supprimer</button>
            </div>
        );
    }
}