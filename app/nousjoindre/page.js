import React from "react";
import styles from "../../styles/nous_joindre.module.css";
import image from "../../public/cap12.png";
import Image from "next/image";
import '../global.css'

export default function NousJoindre() {
    return (
        <div className={styles.page_nousjoindre_container}>
            <div className={`${styles.page_nousjoindre_grid_item} ${styles.page_nousjoindre_image}`}>

            </div>

            <div className={`${styles.page_nousjoindre_contact}`}>
                <div className={`${styles.page_nousjoindre_grid_item} ${styles.contact_form}`}>
                    <h2>Nous contacter</h2>
                    <form action="#" method="POST">
                        <label htmlFor="nom"> Nom et Prénom:</label>
                        <input type="text" id="nom" name="nom" required />
                        <label htmlFor="titre"> Sujet:</label>
                        <input type="text" id="titre" name="titre" required />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                        <button className='btn-acheter' type="submit">Envoyer</button>
                    </form>
                </div>

                <div className={`${styles.page_nousjoindre_contact_item} ${styles.adresse}`}>
                    <h2>Address</h2>
                    <p>1234 rue des Hustler Bulgariens</p>
                    <p>(514) 555-8547</p>
                    <p>peyabeille@abeille.com</p>

                    <div className={styles.page_nousjoindre_contact_item}>
                    <iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-73.90520095825197%2C45.795416816359804%2C-73.67860794067384%2C45.904702604307666&amp;layer=mapnik&amp;marker=45.85008655163701%2C-73.79190444946289"></iframe><br/><small><a href="https://www.openstreetmap.org/?mlat=45.8501&amp;mlon=-73.7919#map=13/45.8501/-73.7919">View Larger Map</a></small>
                    </div>
                </div>
            </div>
        </div>
    );
}