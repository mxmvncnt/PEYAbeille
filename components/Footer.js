// import { useState } from "react"
import styles from '../styles/footer.module.css'
import { Link } from "react-router-dom"



export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-categorie footer-liens">
                <h3>Liens</h3>
                <a href="example.com">
                    <div>Instagram</div>
                </a>
                <a href="example.com">
                    <div>Facebook</div>
                </a>
            </div>
            <div className="footer-categorie footer-politiques">
                <h3>Politiques</h3>
                <a href="example.com">
                    <div>Conditions d'utilisation</div>
                </a>
            </div>
            <div className="footer-categorie footer-contact">
                <h3>Contact</h3>
                <form action="">
                    <label>Courriel</label>
                    <input type="text"/>
                </form>
            </div>
        </div>
    );
}