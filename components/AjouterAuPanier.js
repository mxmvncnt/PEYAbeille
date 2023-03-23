"use client";

import styles from '../styles/ajouter_au_panier.module.css'
import { useCookies } from "react-cookie";
import Link from 'next/link';


export default function AjouterAuPanier(item) {
    const [cookies, setCookie] = useCookies(['panier'])

    function ajouterItemAuPanier(item) {
        let produitPanierJson = JSON.stringify(item)
    
        console.log("ARRAY ITEMS")
        console.log(cookies["panier"])
    
        if (cookies["panier"] != undefined && cookies["panier"]["items_panier"] != undefined) {
            let arrayItems = cookies["panier"]["items_panier"]
            arrayItems.push(JSON.parse(produitPanierJson))
            setCookie('panier', arrayItems, { sameSite: true, path: "/" })
        }
        else {
            let squeletteJson = { "items_panier": [JSON.parse(produitPanierJson)] }
            setCookie('panier', squeletteJson, { sameSite: true, path: "/" })
        }
    }

    return (
        <div>
            <Link href="/panier" onClick={()=>ajouterItemAuPanier(item)}>
                <button>Ajouter au panier</button>
            </Link>
        </div>
    )
}