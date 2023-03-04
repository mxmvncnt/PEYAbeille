// import { useState } from "react"
import styles from '../styles/headerbar.module.css'
import { Link } from "react-router-dom"
import { useState } from "react"



export default function HeaderBar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <div className="navigation-bar">

            <button
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }}>☰</button>

            {/* LOGO A LA PLACE DU TEXTE "PEYABEILLE"*/}
            <Link
                to="/"
                id="navigation-bar-logo"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }}>
                PEYABEILLE
            </Link>

            {/* inspiré de: https://blog.logrocket.com/create-responsive-navbar-react-css/ */}
            <div className={isNavExpanded ? "navigation-bar-menu expanded" : "navigation-bar-menu"}>
                <Link
                    to="/"
                    onClick={() => {
                        setIsNavExpanded(!isNavExpanded)
                    }}>
                    Accueil
                </Link>
                <Link
                    to="/produits"
                    onClick={() => {
                        setIsNavExpanded(!isNavExpanded)
                    }}>
                    Produits
                </Link>
                <Link
                    to="/apropos"
                    onClick={() => {
                        setIsNavExpanded(!isNavExpanded)
                    }}>
                    À Propos
                </Link>
                <Link
                    to="/nousjoindre"
                    onClick={() => {
                        setIsNavExpanded(!isNavExpanded)
                    }}>
                    Nous joindre
                </Link>
            </div>
        </div>
    );
}