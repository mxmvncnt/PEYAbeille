"use client";

import styles from '../styles/incrementeur.module.css'
import { useRouter } from 'next/navigation';
import { useCookies } from "react-cookie";

export default function ItemPanier(
    data = "Aucune donnee"
) {
    const quantite = data["data"]["quantite"]
    const id_produit = data["data"]["item"]

    const [cookies, setCookie] = useCookies(['panier'])
    const router = useRouter();

    const ajouter = () => {
        let itemsPanier = cookies["panier"]["items_panier"];
    
        for (let i = 0; i < itemsPanier.length; i++) {
            if (itemsPanier[i].item == id_produit) {
                // itemsPanier.splice(i, 1);
                itemsPanier[i].quantite++;
                setCookie('panier', { "items_panier": itemsPanier }, { sameSite: true, path: "/" });
                router.refresh();
            }
        }
    }
    
    const retirer = () => {
        let itemsPanier = cookies["panier"]["items_panier"];

        // Supprimer l'item du panier si la quantite tombe a 0
        if (quantite == parseInt(1)) {
            for (let i = 0; i < itemsPanier.length; i++) {
                if (itemsPanier[i].item == id_produit) {
                    itemsPanier.splice(i, 1);
                    setCookie('panier', { "items_panier": itemsPanier }, { sameSite: true, path: "/" });
                    router.refresh();
                }
            }
        }
    
        for (let i = 0; i < itemsPanier.length; i++) {
            if (itemsPanier[i].item == id_produit) {
                // itemsPanier.splice(i, 1);
                itemsPanier[i].quantite--;
                setCookie('panier', { "items_panier": itemsPanier }, { sameSite: true, path: "/" });
                router.refresh();
            }
        }
    }

    return (
        <div className={styles.container}>
            <button id={styles.btn_retirer} className={styles.bouton_increment} onClick={retirer}>-</button>
            <span className={styles.quantite}>{quantite}</span>
            <button id={styles.btn_ajouter} className={styles.bouton_increment} onClick={ajouter}>+</button>
        </div>
    );
    // }
}