import { useState } from "react"
import "./HeaderBar.css"
import { Link } from "react-router-dom"
import Logo from './Titans_logo.png'

export default function HeaderBar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <nav className="navigation">

            <button
                className="hamburger"
                onClick={() => { setIsNavExpanded(!isNavExpanded) }}>
                ☰
            </button>

            <Link to="/" id="logo">
                <img src={Logo} height="30px" alt="Logo Titans" />
            </Link>

            <div
                className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>

                <ul>
                    <li>
                        <Link
                            onClick={() => { setIsNavExpanded(!isNavExpanded) }}
                            to="/">
                            Accueil
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}