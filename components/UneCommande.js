import React from "react";
import styles from '../styles/compte.module.css';

export default function UneCommande(){
    return (
        <div className={styles.containerCommande}>
            <table className={styles.table}>
                <tr>
                    <th> Numero de commande </th>
                    <th> Date de commande</th>
                    <th> Statut</th>
                    <th> Total </th>
                </tr>
                <tr>
                    <td> #178 </td>
                    <td> 25 juillet 2022</td>
                    <td> Complétée</td>
                    <td>114$ </td>
                </tr>
                <tr>
                    <td className={styles.liste} colSpan={4}>
                    <ol>
                        <li>une eleemt</li>
                        <li>un autre</li>
                        <li>un autre</li>
                    </ol>
                    </td>

                </tr>
            </table>
        </div>
    )
}