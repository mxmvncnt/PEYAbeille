import React from "react";
import styles from '../../styles/accueil.module.css';

export default function Accueil() {
    return (
        <div>
            <div className="">
                <div className="">
                    <h1 id="titre-page">Accueil</h1>
                    <div className={styles.bloc}>
                        <img src="https://www.airtransat.com/getmedia/cafc7e6e-d0ff-497e-9998-e708f41aa191/Montreal-estival.aspx" alt=""/>
                            <div className="bloc-contenu gauche">
                                <h2>Titre de section</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequuntur, animi, illum dolorum unde
                                    nobis accusantium expedita commodi consequatur culpa dolores. Aliquam ipsam magni non error cumque sapiente!
                                    Dolorum, natus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, expedita accusantium
                                    magnam ex earum quibusdam dolor ipsum ducimus, laudantium consectetur possimus aliquid quaerat veniam sequi
                                    atque numquam pariatur inventore repellat!</p>
                            </div>
                    </div>

                    <div className="bloc droite">
                        <img src="https://img-3.journaldesfemmes.fr/k41tBopBSPygyctluCE95P7OvqM=/1500x/smart/4f2ff8c8498c429e9498044add191871/ccmcms-jdf/35283088.jpg" alt=""/>
                            <div className="bloc-contenu droite">
                                <h2>Titre de section</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequuntur, animi, illum dolorum unde
                                    nobis accusantium expedita commodi consequatur culpa dolores. Aliquam ipsam magni non error cumque sapiente!
                                    Dolorum, natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptates, eaque sequi magni
                                    quis qui repellat corrupti debitis enim distinctio odio tempora quisquam eum quia tenetur voluptatum eveniet
                                    ipsum ratione.</p>
                            </div>
                    </div>

                    <div className="bloc gauche">
                        <img src="https://ici.exploratv.ca/upload/site/post/picture/1629/6288097191b1c.1671116233.jpg" alt=""/>
                            <div className="bloc-contenu gauche">
                                <h2>Titre de section</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequuntur, animi, illum dolorum unde
                                    nobis accusantium expedita commodi consequatur culpa dolores. Aliquam ipsam magni non error cumque sapiente!
                                    Dolorum, natus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, expedita accusantium
                                    magnam ex earum quibusdam dolor ipsum ducimus, laudantium consectetur possimus aliquid quaerat veniam sequi
                                    atque numquam pariatur inventore repellat!</p>
                            </div>

                    </div>

                    <div className="bloc droite">
                        <img src="https://static.actu.fr/uploads/2021/03/ruche-miel-adobe-stock.jpeg" alt=""/>
                            <div className="bloc-contenu droite">
                                <h2>Titre de section</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequuntur, animi, illum dolorum unde
                                    nobis accusantium expedita commodi consequatur culpa dolores. Aliquam ipsam magni non error cumque sapiente!
                                    Dolorum, natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptates, eaque sequi magni
                                    quis qui repellat corrupti debitis enim distinctio odio tempora quisquam eum quia tenetur voluptatum eveniet
                                    ipsum ratione.</p>
                            </div>
                    </div>

                </div>
            </div>
            <br />

        </div>
    );
}