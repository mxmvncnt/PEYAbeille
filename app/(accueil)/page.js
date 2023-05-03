import React from "react";
import styles from '../../styles/accueil.module.css'
import image_accueil from '../../public/acc_pot.jpg'
import Link from 'next/link'
import abeille from '../../public/abb02.png'
import abeille2 from '../../public/abb8.PNG'
import abeille3 from '../../public/abb11.png'
import Image from "next/image";

export default function Accueil() {
    return (
        <div>
            <div className={`${styles.background}`}>
                <Image className={`${styles.img_acc1}`}
                    src={image_accueil}
                    alt={"image temporaire"}
                />
                <div className={`${styles.overlay}`}>
                    <h3> Découvrez la richesse des saveurs naturelles de PEYABEILLE </h3>
                    <p> Commandez notre miel pur et nos produits de la ruche dès maintenant. </p>
                    <Link href="/produits" > <button> Passer à la commande</button></Link>
                </div>
            </div>
            <div className={`${styles.container}`}>
                <div className={`${styles.section}`}>
                    <div className={`${styles.flexContainer}`}>
                        <div className={`${styles.imgContainer}`}>
                            <Image
                                className={`${styles.img_acc}`}
                                src={abeille}
                                alt="image temporaire"
                            />
                        </div>
                        <div className={`${styles.textContainer}`}>
                            <h3>Naturel et Nutritif</h3>
                            <p>
                                Le miel de Peyabeille est pur et naturel, sans conservateurs ajoutés ni édulcorants artificiels. Il provient de ruches locales, garantissant ainsi un produit de haute qualité, riche en nutriments naturels tels que des antioxydants, des vitamines et des minéraux. Ces nutriments aident à renforcer votre système immunitaire et à fournir une énergie durable tout au long de la journée.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.section}`}>
                    <div className={`${styles.flexContainer}`}>
                        <div className={`${styles.imgContainer}`}>
                            <Image
                                className={`${styles.img_acc}`}
                                src={abeille2}
                                alt="image temporaire"
                            />
                        </div>
                        <div className={`${styles.textContainer}`} >
                            <h3>Polyvalent et Délicieux</h3>
                            <p>Le miel de Peyabeille est un ingrédient polyvalent qui peut être utilisé de plusieurs façons. Vous pouvez l'utiliser comme édulcorant naturel dans votre thé ou café, le verser sur des pancakes ou gaufres, l'ajouter à vos smoothies ou yaourts, ou l'utiliser comme glaçage pour les viandes et les légumes. Avec sa saveur riche et délicieuse, le miel de Peyabeille est sûr de satisfaire vos papilles gustatives.</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.section}`}>
                    <div className={`${styles.flexContainer}`} >
                        <div className={`${styles.imgContainer}`}>
                            <Image
                                className={`${styles.img_acc}`}
                                src={abeille3}
                                alt="image temporaire"
                            />
                        </div>
                        <div className={`${styles.textContainer}`}>
                            <h3>Durable et Éthique </h3>
                            <p>Peyabeille s'engage en faveur de pratiques durables et éthiques. Ils collaborent étroitement avec les apiculteurs locaux pour garantir que leur miel est sourcé d'une manière qui soutient la santé et le bien-être des abeilles et de l'environnement. Ils soutiennent également l'économie locale en se fournissant auprès de petits apiculteurs indépendants. En choisissant le miel de Peyabeille, vous pouvez vous sentir bien en soutenant une entreprise engagée à avoir un impact positif sur la planète et ses habitants.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}