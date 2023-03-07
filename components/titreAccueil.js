// import { useState } from "react"
import styles from '../styles/titre_accueil.module.css'

import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

export default function TitreAccueil() {
    return (
        <div className={styles.container}>
            <ParallaxProvider>
                <Parallax scale={[1.5, 0.4, 'easeInOutQuad']} translateX={[50, -20]}>
                    <p className={`${styles.nom_site} ${styles.partie_droite}`}>Pey</p>
                </Parallax>
                <Parallax scale={[1, 0.4, 'easeInOutQuad']} translateX={[70, -57]}>
                    <p className={`${styles.nom_site} ${styles.partie_gauche}`}>abeille</p>
                </Parallax>
            </ParallaxProvider>
        </div>
    );
}