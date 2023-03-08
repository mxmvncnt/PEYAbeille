// import { useState } from "react"
import styles from '../styles/footer.module.css'



export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={`${styles.footer_categorie} ${styles.footer_liens}`}>
                <h3>Liens</h3>
                <a href="example.com">
                    <div>Instagram</div>
                </a>
                <a href="example.com">
                    <div>Facebook</div>
                </a>
            </div>
            <div className={`${styles.footer_categorie} ${styles.footer_liens}`}>
                <h3>Politiques</h3>
                <a href="example.com">
                    <div>Conditions d'utilisation</div>
                </a>
            </div>
            <div className={`${styles.footer_categorie} ${styles.footer_liens}`}>
                <h3>Contact</h3>
                <form action="">
                    <label>Courriel</label>
                    <input type="text"/>
                </form>
            </div>
        </div>
    );
}