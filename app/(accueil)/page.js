import React from "react";
import styles from '../../styles/accueil.module.css'
import image_accueil from '../../public/acc_pot.jpg'
import abeille from '../../public/abb1.png'
import Image from "next/image";

export default function Accueil() {
    return (
        <div>
            <div className={`${styles.background}`}>
                <Image className={`${styles.img_acc}`}
                    src={image_accueil}
                    alt={"image temporaire"}
                />
                <div className={`${styles.overlay}`}>
                    <h3> Découvrez la richesse des saveurs naturelles de PEYABEILLE </h3>
                    <p> Commandez notre miel pur et nos produits de la ruche dès maintenant. </p>
                    <button> Passer à la commande</button>
                </div>
            </div>
            <div className={`${styles.container}`}>
                <section className={`${styles.section}`}>
                    <div className={`${styles.flexContainer}`}>
                        <div className={`${styles.imgContainer}`}>
                            <Image
                                className={`${styles.img_acc}`}
                                src={abeille}
                                alt="image temporaire"
                            />
                        </div>
                        <div className={`${styles.textContainer}`}>
                            <h3>Natural and Nutritious</h3>
                            <p>
                                Peyabeille's honey is pure and natural, with no added preservatives or
                                artificial sweeteners. It is sourced from local beehives, ensuring that
                                you receive a high-quality product that is packed with natural
                                nutrients, such as antioxidants, vitamins, and minerals. These nutrients
                                help to boost your immune system and provide sustained energy throughout
                                the day.
                            </p>
                        </div>
                    </div>
                </section>
            <section className={`${styles.section}`}>
                <h3>Versatile and Delicious</h3>
                <p>Peyabeille's honey is a versatile ingredient that can be used in a variety of ways. You can use it as a natural sweetener in your tea or coffee, drizzle it over pancakes or waffles, add it to your smoothies or yogurt, or use it as a glaze for meats and vegetables. With its rich and delicious flavor, Peyabeille's honey is sure to satisfy your taste buds.</p>
            </section>
            <section className={`${styles.section}`}>
                <h3>Sustainable and Ethical</h3>
                <p>Peyabeille is committed to sustainability and ethical practices. They work closely with local beekeepers to ensure that their honey is sourced in a way that supports the health and well-being of bees and the environment. They also support the local economy by sourcing their honey from small, independent beekeepers. By choosing Peyabeille's honey, you can feel good about supporting a company that is committed to making a positive impact on the planet and its people.</p>
            </section>
        </div>

        </div >
    );
}