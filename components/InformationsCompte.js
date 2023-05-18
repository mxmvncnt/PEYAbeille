"use client";
import React from "react";
import styles from '../styles/compte.module.css';
import '../app/global.css';


export default function Informations(props) {
    const handleSubmit = (e) =>{
        e.preventDefault();
        const email = document.getElementById("email").value;
        const confirmEmail = document.getElementById("confirmEmail").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const token = document.getElementById("token").value;



        if (email !== confirmEmail) {
            alert("Les emails ne sont pas les memes");
            return;
        }

        if (password !== confirmPassword) {
            alert("Les mots de passes ne sont pas les memes");
            return;
        }
        e.target.submit();
    }
    return (
        <div className={styles.informations}>
            <h2> Mes informations</h2>
            <div className={styles.form}>
                <form onSubmit={handleSubmit} action="/api/modifier_compte">

                    <div className={styles.infos}>
                        <label htmlFor="nom">Nom: </label> <br />
                        <input className="input-field-singlerow" type="text" id="nom" name="nom"></input><br />
                        <label htmlFor="prenom">Prénom: </label><br />
                        <input className="input-field-singlerow"type="text" id="prenom" name="prenom"></input><br />
                        <input type="hidden" name = "token" id="token" value={props.token}></input>
                    </div>
                    <div className={styles.courriel}>
                        <label htmlFor="email">Adresse courriel: </label> <br />
                        <input className="input-field-singlerow" type="email" id="email" name="email"></input> <br />
                        <label hmtlfor="confirmEmail">Confirmer adresse courriel: </label><br />
                        <input className="input-field-singlerow" type="email" id="confirmEmail" name="confirmEmail"></input><br />
                    </div>
                    <div className={styles.motdepasse}>
                        <label hmtlfor="password">Mot de Passe: </label><br />
                        <input className="input-field-singlerow" type="password" id="password" name="password"></input><br />
                        <label hmtlFor="confirmPassword">Confirmer mot de passe: </label><br />
                        <input className="input-field-singlerow" type="password" id="confirmPassword" name="confirmPassword"></input><br />
                    </div>
                    <input type='submit' value ='Confirmer'className={styles.confirmer}></input>
                </form>


            </div>
        </div>
    )
}