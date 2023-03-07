// import { useState } from "react"
import styles from '../styles/titre_accueil.module.css'

import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

export default function TitreAccueil() {
    return (
        <div className="">
            <ParallaxProvider>
                <Parallax scale={[1, 0.5, 'easeInOutQuad']} translateX={[50, 0]}>
                    <p className={styles.nom_site}>Pey</p>
                </Parallax>
                <Parallax scale={[1, 0.2, 'easeInOutQuad']}>
                    <p className={styles.nom_site}>abeille</p>
                </Parallax>
            </ParallaxProvider>
        </div>
    );
}