import React from "react";
import styles from '../../styles/nous_joindre.module.css';
import image from '../../public/apicul.jpg';
import Image from "next/image";

export default function NousJoindre() {
    return (
        <div className="">

            <div className={styles.page_nousjoindre_grid_carte_image}>

                <div className={styles.page_nousjoindre_grid_item}>
                    <Image className={`${styles.page_nousjoindre_image}`}
                        src={image}
                        alt={"image temporaire"}
                        
                    />
                </div>

                <div className={`${styles.page_nousjoindre_grid_item} ${styles.page_nousjoindre_contact}`}>

                    <div className={`${styles.page_nousjoindre_contact_item} ${styles.adresse}`}>
                        <h2>Pour nous joindre</h2>
                        <p>1234 rue des Hustler Bulgariens</p>
                        <p>(514) 555-8547</p>
                        <p>peyabeille@abeille.com</p>

                    </div>

                    <div className={styles.page_nousjoindre_contact_item}>
                        <iframe title="OpenStreetMaps" id={styles.page_nousjoindre_iframe_map} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=-74.17625931207037%2C45.328975270124204%2C-73.18748978082037%2C45.746440307251355&amp;layer=mapnik">
                        </iframe>
                        <br />
                        <small>
                            <a href="https://www.openstreetmap.org/#map=11/45.5381/-73.6819">Carte plus grande</a>
                        </small>
                    </div>

                </div>

            </div>

        </div>
    );
}