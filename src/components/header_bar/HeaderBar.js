// import { useState } from "react"
import "./HeaderBar.css"
import { Link } from "react-router-dom"



export default function HeaderBar() {
    return (
        <div className="navigation-bar">
            <Link
                to="/">
                PEYABEILLE
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