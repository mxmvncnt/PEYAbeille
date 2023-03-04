import React from "react";
import styles from '../../styles/nous_joindre.module.css';

export default function NousJoindre() {
    return (
        <div className="">

            <div className="page-nousjoindre-grid-carte-image">

                <div className="page-nousjoindre-grid-item">
                    <img class="page-nousjoindre-image" src="https://static.actu.fr/uploads/2021/03/ruche-miel-adobe-stock.jpeg" alt="" />
                </div>

                <div className="page-nousjoindre-grid-item page-nousjoindre-contact">

                    <div className="page-nousjoindre-contact-item adresse">
                        <h2>Pour nous joindre</h2>
                        <p>1234 rue des Hustler Bulgariens</p>
                        <p>(514) 555-8547</p>
                        <p>peyabeille@abeille.com</p>

                    </div>

                    <div className="page-nousjoindre-contact-item">
                        <iframe title="OpenStreetMaps" id="page-nousjoindre-iframe-map" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
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