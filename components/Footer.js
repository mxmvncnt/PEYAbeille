// import { useState } from "react"
import styles from '../styles/footer.module.css'



export default function Footer() {
    return (

        <div className={styles.footer}>
            <div className={`${styles.footer_categorie}`}>
                <h3>PEYABEILLE</h3>
                <ul className={`${styles.footer_ul} ${styles.footer_liens}`}>
                    <li className={`${styles.footer_li}`}> <a href="/"> <div>Acceuil</div> </a> </li>
                    <li className={`${styles.footer_li}`}> <a href="/apropos">À propos</a></li>
                    <li className={`${styles.footer_li}`}>  <a href="/produits">Produits</a></li>
                    <li className={`${styles.footer_li}`}> <a href="/produits">Nous joindre</a></li>
                </ul>
            </div>
            <div className={`${styles.footer_categorie}`}>
                <h3>Produits</h3>
                <ul className={`${styles.footer_ul} ${styles.footer_liens}`}>
                    <li className={`${styles.footer_li}`}><a href="/produits">Miels</a></li>
                </ul>
            </div>
            <div className={`${styles.footer_categorie}`}>
                <h3>Politiques</h3>
                <ul className={`${styles.footer_ul}`}>
                    <li className={`${styles.footer_li}`}><a href="/politiques">Conditions d'utilisation</a></li>
                    <li className={`${styles.footer_li}`}><a href="example.com">Politique de confidentialité</a></li>
                </ul>
            </div>
            <div className={`${styles.footer_categorie}`}>
                <h3>Contact</h3>
                <ul className={`${styles.footer_ul} ${styles.footer_liens}`}>
                    <li className={`${styles.footer_li}`}> <label> Montreal, Canada </label></li>
                    <li className={`${styles.footer_li}`}> <label> info@peyabeille.com </label></li>
                    <li className={`${styles.footer_li}`}> <label> 123-456-7891 </label></li>
                </ul>
            </div>
            <h7> Copy right © 2023 All rights Reserved</h7>
        </div>
       
    );
}