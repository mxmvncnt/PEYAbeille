'use client'
import React,{useState} from "react";
import styles from '../../../styles/commande.module.css';


export default function commandes() {
    return (

        <div>
            <h1> Commandes</h1>

            <Commande />
            <Commande />

        </div>

    );
}


function Commande() {
    return (
        <div className={styles.commande}>
            <h2> Nom du client (# numero de commande)</h2>
            <div className={styles.bouttons}>
            <button className={styles.bttnCompleter}> Completer </button>
            <button className={styles.bttnAnnuler}> Annuler </button>
            </div>

            <p>Paul Nord <br />1234 rue des mirabels
            <br />514 514 5140 </p>
            <Details/>

        </div>
    )
}

const Details = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>Voir detail</button>
            {toggle && (
                <AfficherDetails/>
            )}
        </div>
    )
}

function AfficherDetails() {
    return(
        <div>
            <h3>test</h3>
        </div>

    )
}



