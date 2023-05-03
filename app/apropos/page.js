"use client";

import React from "react";
import { useEffect } from "react";
import styles from '../../styles/apropos.module.css';
import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import TitreAccueil from "../../components/titreAccueil";
import aprop1 from '../../public/aprop1.jpg'
import aprop2 from '../../public/aprop2.jpg'
import aprop3 from '../../public/aprop3.jpg'
import aprop4 from '../../public/aprop4.jpg'


import mtl_temp_img from '../../public/Montreal-estival.jpg'

export default function APropos() {
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
                                        src={aprop4}
                                        alt={"image temporaire"}
                                    />
                                </Parallax>

                                <Parallax speed={15}>
                                    <div className={`${styles.bloc_contenu} ${styles.gauche}`}>
                                        <h2>Qui sommes-nous?</h2>
                                        <p>PEYABEILLE est une entreprise spécialisée dans la vente de miel de qualité supérieure. Nous sommes fiers de proposer à nos clients une large gamme de miels artisanaux, récoltés avec soin dans les ruches les plus saines et les plus naturelles. Nous sommes une entreprise familiale passionnée par l'apiculture et l'amour de la nature. Nous sommes engagés à préserver l'environnement et à soutenir les producteurs locaux. Notre objectif est de fournir des produits de qualité exceptionnelle à nos clients tout en préservant la tradition de l'apiculture. Commandez dès maintenant notre miel artisanal et savourez la pureté et la richesse de nos produits.
                                        </p>
                                    </div>
                                </Parallax>
                            </div>
                        </ParallaxProvider>


                        <ParallaxProvider>
                            <div className={`${styles.bloc} ${styles.droite}`}>
                                <Parallax speed={0}>
                                    <Image
                                        src={aprop3}
                                        alt={"image temporaire"}
                                    />
                                </Parallax>

                                <Parallax speed={15}>
                                    <div className={`${styles.bloc_contenu} ${styles.droite}`}>
                                    <h2>Physionomie & Anatomie de l’abeille</h2>
                                        <p>Les abeilles sont de la familles des Apidés puisqu'elles appartiennent à une famille d'insectes pourvus de 4 ailes membraneuses.
                                            L'apparence de l'abeille dépend selon l'espèce. Elles sont reconnaissables grâce à des bandes noires et jaunes ou brunes et orangé.Leur corps est composé de 3 parties: la tête, le thorax et l'abdomen. Ce dernier composant de leur corps est divisé en plusieurs parties. L'abdomen est responsable de la production de la cire, de la régulation thermique de la ruche et du stockage du miel et du pollen. Leur thorax habite 6 pattes, deux paires d'ailes et des glandes cirières qui sécrètent de la cire pour la construction des ruches. La tête quant à elle, comporte des antennes sensorielles pour recevoir de l’information. La tête comporte aussi des pièces buccales qui forment l’appareil buccal de l’insecte adapté pour la collecte et le transport du nectar et du pollen.
                                        </p>
                                    </div>
                                </Parallax>
                            </div>
                        </ParallaxProvider>

                        <ParallaxProvider>
                            <div className={`${styles.bloc} ${styles.gauche}`}>
                                <Parallax speed={0}>
                                    <Image
                                        src={aprop1}
                                        alt={"image temporaire"}
                                    />
                                </Parallax>
                                <Parallax speed={15}>
                                    <div className={`${styles.bloc_contenu} ${styles.gauche}`}>
                                    <h2>Bienfait pour la santé</h2>
                                        <p>Le miel est constitué de vitamines, de minéraux et d’antioxydants qui contribuent à un système immunitaire plus farouche. Tous ces nutriments trouvés dans le miel font de lui un nectar excellent pour le maintien d’une bonne santé.
                                            Le miel apaise les maux de gorge et la toux grâces à ses propriétés antioxydantes et antibactériennes qui réduisent l’inflammation. Le miel comporte aussi des propriétés prébiotiques qui contribuent à nourrir les bonnes bactéries de l’intestin afin de favoriser une meilleure digestion.
                                            Aussi, puisque le miel est un glucide complexe et non un sucre raffiné, il est absorbé plus lentement par l’organisme. Alors, le miel peut aider à contrôler le taux du sucre dans le sang pour une glycémie stable.
                                        </p>
                                    </div>
                                </Parallax>
                            </div>
                        </ParallaxProvider>

                        <ParallaxProvider>
                            <div className={`${styles.bloc} ${styles.droite}`}>
                                <Parallax speed={0}>
                                    <Image
                                        src={aprop2}
                                        alt={"image temporaire"}
                                    />
                                </Parallax>
                                <Parallax speed={15}>
                                    <div className={`${styles.bloc_contenu} ${styles.droite}`}>
                                    <h2>Bienfait pour l’environnement </h2>
                                        <p>Les abeilles jouent un rôle crucial dans l'écosystème et ont de nombreux bienfaits sur l'environnement. En tant que pollinisateurs, elles assurent la reproduction de nombreuses plantes, ce qui favorise la biodiversité et la production de fruits, légumes et noix. Les abeilles contribuent également à la pollinisation des plantes qui servent de nourriture pour les animaux sauvages. En outre, leur production de miel et de cire est importante pour l'industrie alimentaire et cosmétique. Les abeilles sont donc essentielles pour l'équilibre écologique et leur protection est cruciale pour notre environnement et notre survie.</p>
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