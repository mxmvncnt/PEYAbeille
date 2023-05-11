"use client";
import '../app/global.css'
import styles from '../styles/ajouter_au_panier.module.css'
import { useCookies } from "react-cookie";
import Link from 'next/link';


export default function AjouterAuPanier(item) {
    const [cookies, setCookie] = useCookies(['panier'])

    function ajouterItemAuPanier(item) {
        let produitPanierJson = JSON.stringify(item)

        if (cookies["panier"] != undefined) {
            let arrayItems = cookies["panier"]["items_panier"]

            let produitPanier = JSON.parse(produitPanierJson)

            let isItemIncremente;
            
            // Incrementer la quantite si l'item est deja dans le panier/quand il est ajouté plus d'une fois
            for (let i = 0; i < arrayItems.length; i++) {
                if (arrayItems[i]["item"] == produitPanier["item"]) {
                    arrayItems[i]["quantite"]++;
                    setCookie('panier', { "items_panier": arrayItems }, { sameSite: true, path: "/" })
                    isItemIncremente = true;
                    break;
                }
            }

            if (!isItemIncremente) {
                arrayItems.push(produitPanier)
                setCookie('panier', { "items_panier": arrayItems }, { sameSite: true, path: "/" })
                isItemIncremente = false;  
            }

        }
        else {
            let squeletteJson = { "items_panier": [JSON.parse(produitPanierJson)] }
            setCookie('panier', squeletteJson, { sameSite: true, path: "/" })
        }
    }

    return (
        <div className={styles.body}>
            <a href="/panier" onClick={() => ajouterItemAuPanier(item)}>
                <button className='btn-acheter'>Ajouter au panier</button>
            </a>
        </div>
    )
}