import { useState } from "react"
import "./HeaderBar.css"
import { Link } from "react-router-dom"



export default function HeaderBar() {
    return (
        <div class="navigation-bar">
            <Link
                to="/">
                Cartes
            </Link>
            <Link
                to="/">
                Accueil
            </Link>
            <Link
                to="/produits">
                Produits
            </Link>
            <Link
                to="/apropos">
                À Propos
            </Link>
            <Link
                to="/nousjoindre">
                Nous joindre
            </Link>
        </div>
    );
}