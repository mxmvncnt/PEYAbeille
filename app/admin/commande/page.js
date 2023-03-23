import React from "react";
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
            <details>
                <summary>Voir plus</summary>
                <Details />
            </details>

        </div>
    )
}

// const Details = () => {
//     const [toggle, setToggle] = useState(false)
//     return (
//         <div>
//             <button onClick={() => setToggle(!toggle)}>Voir detail</button>
//             {toggle && (
//                 <AfficherDetails/>
//             )}
//         </div>
//     )
// }

function Details() {
    return(
        <div className={styles.detailCommande}>
            <ul>
                <li>un produit</li>
                <li>un autre produit</li>
                <li>total: 54$</li>
            </ul>
        </div>

    )
}



