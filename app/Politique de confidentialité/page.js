import React from "react";
import styles from "../../styles/politiques.module.css";
import '../global.css';

export default function Compte() {
    return (
        <div className={styles.container}>
            <div >
                <h1>Politique de confidentialité</h1>
                <div>
                    <h3>Introduction</h3>
                    <p> Devant le développement des nouveaux outils de communication,
                        il est nécessaire de porter une attention particulière à la protection de la vie privée.
                        C’est pourquoi, nous nous engageons à respecter la confidentialité des renseignements personnels que nous collectons.
                    </p>
                </div>
                <div>
                    <h3>
                        Collecte des renseignements personnels
                    </h3>
                    <p>
                        Prénom
                        Les renseignements personnels que nous collectons sont recueillis au travers de formulaires et grâce à l’interactivité établie entre vous et notre site Web. Nous utilisons également, comme indiqué dans la section suivante, des fichiers témoins et/ou journaux pour réunir des informations vous concernant.

                    </p>
                </div>
               

            </div>


        </div>

    )
}
