import React from "react";
import styles from '../../styles/nous_joindre.module.css';
import image from '../../public/cap12.png';
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
                    <iframe title="OpenStreetMaps" id={styles.page_nousjoindre_iframe_map} width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-73.90743255615236%2C45.795416816359804%2C-73.68083953857423%2C45.904702604307666&amp;layer=mapnik" style={{border: '1px' , 'solid' : 'black' }} ></iframe><br/><small><a href="https://www.openstreetmap.org/#map=13/45.8501/-73.7941">View Larger Map</a></small>
                    </div>
                    

                </div>

            </div>

        </div>
    );
}