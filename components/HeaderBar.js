"use client";

import React from 'react';
import { useState, useEffect } from "react";
import styles from '../styles/headerbar.module.css';
import Link from 'next/link';
import { useCookies } from "react-cookie";

const hostname = 'localhost';
const port = '4003';
const url = 'http://' + hostname + ':' + port;

let BtnCompte = () => {

    const [cookies, setCookie] = useCookies(['token'])
    const [statusConnexion, setStatusConnexion] = useState()

    useEffect(() => {
        const verifierSession = async (token) => {
            let response = await fetch(url + '/api/verifier_session/' + token, {
                method: 'GET',
                cache: "no-cache"
            });

            setStatusConnexion(response.status);
        }

        verifierSession(cookies.token);
    }, []);


    console.log(statusConnexion)

    // si la session est valide, l'utilisateur est connecté
    if (statusConnexion === 200) {
        return <Link
            href="/compte"
            id={styles.lien_monCompte}>
            Mon compte
        </Link>
    } else {
        return <div>
            <Link
                href="/auth/connexion"
                id={styles.lien_connexion}
                onClick={() => {
                    setIsNavExpanded(false)
                }}>
                Connexion
            </Link>
            <Link
                href="/auth/inscription"
                id={styles.lien_inscription}>
                Inscription
            </Link>
        </div>
    }
}

export default function HeaderBar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <div className={styles.navigation_bar}>

            <button
                className={styles.hamburger}
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }}>☰</button>

            {/* LOGO A LA PLACE DU TEXTE "PEYABEILLE"*/}
            <Link
                href="/"
                id={styles.navigation_bar_logo}
                onClick={() => {
                    setIsNavExpanded(false)
                }}>
                PEYABEILLE
            </Link>

            {/* inspiré de: https://blog.logrocket.com/create_responsive_navbar_react_css/ */}
            <div className={isNavExpanded ? `${styles.navigation_bar_menu} ${styles.expanded}` : styles.navigation_bar_menu}>
                <Link
                    href="/"
                    onClick={() => {
                        setIsNavExpanded(false)
                    }}>
                    Accueil
                </Link>
                <Link
                    href="/produits"
                    onClick={() => {
                        setIsNavExpanded(false)
                    }}>
                    Produits
                </Link>
                <Link
                    href="/apropos"
                    onClick={() => {
                        setIsNavExpanded(false)
                    }}>
                    À Propos
                </Link>
                <Link
                    href="/nousjoindre"
                    onClick={() => {
                        setIsNavExpanded(false)
                    }}>
                    Nous joindre
                </Link>

                <BtnCompte />

            </div>

        </div>
    );
}