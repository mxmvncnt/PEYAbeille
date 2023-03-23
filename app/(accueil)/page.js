import React from "react";
import styles from '../../styles/page_acceuil.module.css'

export default function Accueil() {
    return (
        <div>
            <div >
                <h3> Découvrez le délice pur de la nature avec le miel Peyabeille </h3>
                <p> Offrez-vous le délice sucré de la nature avec le miel Peyabeille, fabriqué avec les ingrédients les plus fins
                    et d'origine éthique pour vous offrir une expérience la plus naturelle et délicieuse qui soit.</p>
                <button> Passer à la commande</button>
            </div>
            <div className={`${styles.container}`}>
                <section className={`${styles.point}`}>
                    <h3>Natural and Nutritious</h3>
                    <p>Peyabeille's honey is pure and natural, with no added preservatives or artificial sweeteners. It is sourced from local beehives, ensuring that you receive a high-quality product that is packed with natural nutrients, such as antioxidants, vitamins, and minerals. These nutrients help to boost your immune system and provide sustained energy throughout the day.</p>
                </section>
                <section className={`${styles.point}`}>
                    <h3>Versatile and Delicious</h3>
                    <p>Peyabeille's honey is a versatile ingredient that can be used in a variety of ways. You can use it as a natural sweetener in your tea or coffee, drizzle it over pancakes or waffles, add it to your smoothies or yogurt, or use it as a glaze for meats and vegetables. With its rich and delicious flavor, Peyabeille's honey is sure to satisfy your taste buds.</p>
                </section>
                <section className={`${styles.point}`}>
                    <h3>Sustainable and Ethical</h3>
                    <p>Peyabeille is committed to sustainability and ethical practices. They work closely with local beekeepers to ensure that their honey is sourced in a way that supports the health and well-being of bees and the environment. They also support the local economy by sourcing their honey from small, independent beekeepers. By choosing Peyabeille's honey, you can feel good about supporting a company that is committed to making a positive impact on the planet and its people.</p>
                </section>
            </div>

        </div>
    );
}