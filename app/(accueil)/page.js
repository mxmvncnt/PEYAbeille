"use client";

import React from "react";
import { useEffect } from "react";
import styles from '../../styles/accueil.module.css';
import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import TitreAccueil from "../../components/titreAccueil";


import mtl_temp_img from '../../public/Montreal-estival.jpg'

export default function Accueil() {
    return (
        <div>
            <div className="">
                <div className="">
                    {/* <h1 id={styles.titre_page}>Accueil</h1> */}

                    {/* <div className={`${styles.bloc} ${styles.gauche}`}>
                        <TitreAccueil/>
                    </div> */}
                    <TitreAccueil className={styles.animation_nom_site} />

                    <div className={styles.barriere_titre_sticky}>

                        <ParallaxProvider>
                            <div className={`${styles.bloc} ${styles.gauche}`}>
                                <Parallax speed={0}>
                                    <Image
                                        src={mtl_temp_img}
                                        alt={"image temporaire"}
                                    />
                                </Parallax>

                                <Parallax speed={15}>
                                    <div className={`${styles.bloc_contenu} ${styles.gauche}`}>
                                        <h2>Titre de section</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequuntur, animi, illum dolorum unde
                                            nobis accusantium expedita commodi consequatur culpa dolores. Aliquam ipsam magni non error cumque sapiente!
                                            Dolorum, natus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, expedita accusantium
                                            magnam ex earum quibusdam dolor ipsum ducimus, laudantium consectetur possimus aliquid quaerat veniam sequi
                                            atque numquam pariatur inventore repellat!</p>
                                    </div>
                                </Parallax>
                            </div>
                        </ParallaxProvider>


                        <ParallaxProvider>
                            <div className={`${styles.bloc} ${styles.droite}`}>
                                <Parallax speed={0}>
                                    <Image
                                        src={mtl_temp_img}
                                        alt={"image temporaire"}
                                    />
                                </Parallax>

                                <Parallax speed={15}>
                                    <div className={`${styles.bloc_contenu} ${styles.droite}`}>
                                        <h2>Titre de section</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequuntur, animi, illum dolorum unde
                                            nobis accusantium expedita commodi consequatur culpa dolores. Aliquam ipsam magni non error cumque sapiente!
                                            Dolorum, natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptates, eaque sequi magni
                                            quis qui repellat corrupti debitis enim distinctio odio tempora quisquam eum quia tenetur voluptatum eveniet
                                            ipsum ratione.</p>
                                    </div>
                                </Parallax>
                            </div>
                        </ParallaxProvider>

                        <ParallaxProvider>
                            <div className={`${styles.bloc} ${styles.gauche}`}>
                                <Parallax speed={0}>
                                    <Image
                                        src={mtl_temp_img}
                                        alt={"image temporaire"}
                                    />
                                </Parallax>
                                <Parallax speed={15}>
                                    <div className={`${styles.bloc_contenu} ${styles.gauche}`}>
                                        <h2>Titre de section</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequuntur, animi, illum dolorum unde
                                            nobis accusantium expedita commodi consequatur culpa dolores. Aliquam ipsam magni non error cumque sapiente!
                                            Dolorum, natus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, expedita accusantium
                                            magnam ex earum quibusdam dolor ipsum ducimus, laudantium consectetur possimus aliquid quaerat veniam sequi
                                            atque numquam pariatur inventore repellat!</p>
                                    </div>
                                </Parallax>
                            </div>
                        </ParallaxProvider>

                        <ParallaxProvider>
                            <div className={`${styles.bloc} ${styles.droite}`}>
                                <Parallax speed={0}>
                                    <Image
                                        src={mtl_temp_img}
                                        alt={"image temporaire"}
                                    />
                                </Parallax>
                                <Parallax speed={15}>
                                    <div className={`${styles.bloc_contenu} ${styles.droite}`}>
                                        <h2>Titre de section</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequuntur, animi, illum dolorum unde
                                            nobis accusantium expedita commodi consequatur culpa dolores. Aliquam ipsam magni non error cumque sapiente!
                                            Dolorum, natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptates, eaque sequi magni
                                            quis qui repellat corrupti debitis enim distinctio odio tempora quisquam eum quia tenetur voluptatum eveniet
                                            ipsum ratione.</p>
                                    </div>
                                </Parallax>
                            </div>
                        </ParallaxProvider>
                    </div>
                </div>
            </div>
            <br />
        </div >
    );
}