import React from "react";
import styles from '../../styles/compte.module.css';
import Informations from "../../components/InformationsCompte";
import UneCommande from "../../components/UneCommande";
import fleurs from '../../public/fleurs.jpg'
import Image from "next/image";
import BoutonLogOut from "../../components/BoutonLogOut";
import '../global.css';
import { getCommandeCompte } from "../../server/Api";
import { cookies } from "next/headers";


const getToken = () => {
    const nextCookies = cookies(); // Get cookies object
    const token = nextCookies.get('token') // Find cookie
    return token
}

export default async function Compte() {
    const token = getToken();

    if(token != null){
         let data = await getCommandeCompte(token["value"]);
         console.log(data)
            return (
                <div>
                    <div className={styles.container}>
                        <Image className= {styles.imageFleurs}
                         src={fleurs}/>
                         <div className={styles.overlay}>
                            <h1> Mon compte</h1>
                            <div className={styles.bouttons}>
                                <button className="btn-acheter" id={styles.btn}>Modifier mes informations </button>
                                &nbsp;
                                <button className="btn-acheter" id={styles.btn}>Mes commandes </button>
                                &nbsp;
                                <BoutonLogOut/>
                            </div>
                         </div>

                    </div>
                    <Informations token={token["value"]}/>
                    <div className={styles.containerCommandes}>
                        <h2>Mes commandes</h2>
                        <div className={styles.containerCommande}>
                            <div className={styles.idCommande}>ID de la commande{data.id}</div>
                            <div className={styles.dateCommande}>Date de la commande</div>
                            <div className={styles.addresseCommande}>Addresse commande</div>
                            <div className={styles.statutCommande}>Statut de la commande</div>
                            <div className={styles.totalCommande}>Total de la commande</div>
                        </div>
                        {data["commandes"].map((commande) => (
                            <UneCommande data={commande} key={commande.id} />
                        ))}

                    </div>

                </div>
            )
    }else {
        return (
            <div>
                <h1>ERREUR: vous devez être connecté pour faire cela.</h1>
            </div>
        )
    }
}

