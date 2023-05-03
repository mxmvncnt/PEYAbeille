"use client";

import React from 'react';
import { useState, useEffect } from "react";
import styles from '../styles/headerbar.module.css';
import Link from 'next/link';
import { useCookies } from "react-cookie";
import { MdShoppingCart } from 'react-icons/md';
import Logo from "../public/logo1.png";
import Image from "next/image";
import MenuDropdown from './MenuDropdown';
import { debug } from 'util';
//import {getNom} from '../server/Api';
const hostname = 'localhost';
const port = '4003';
const url = 'http://' + hostname + ':' + port;

let BtnCompte = () => {


    const [cookies, setCookie] = useCookies(['token'])
    const [statusConnexion, setStatusConnexion] = useState()
    const [montrerMenu, setMontrerMenu] = useState(false)
    const [nom, setNom] = useState('')
    

    useEffect(() => {
        const verifierSession = async (token) => {
            let response = await fetch(url + '/api/verifier_session/' + token, { cache: "no-cache" });

            setStatusConnexion(response.status);
        }
        const getNom = async(token) => {
            let response = await fetch(url + '/api/nom/' + token, { cache: "no-cache" });
            let data = await response.json();
            if (data != null || data != undefined) {
                setNom(data.rows[0].NOM);
            }
            
        }

        verifierSession(cookies.token);
        getNom(cookies.token);
    }, []);



     const toggleMontrerMenu = () => {
        setMontrerMenu(!montrerMenu)
     }
    // si la session est valide, l'utilisateur est connecté
    if (statusConnexion === 200) {
        // return <Link
        //     href="/compte"
        //     id={styles.lien_monCompte}>
        //     Mon compte
        // </Link>  
        return <div className={styles.monCompteWrapper}>
            <a id={styles.lien_monCompte} onClick={toggleMontrerMenu}>Mon compte </a>
            <MenuDropdown show={montrerMenu} nom ={nom} />
            </div>
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

            <Link
                href="/"
                id={styles.navigation_bar_logo}
                onClick={() => {
                    setIsNavExpanded(false)
                }}>
                <Image
                    className={styles.navigation_bar_logo_img}
                    src={Logo}
                    href="/"
                    alt={"Logo Peyabeille"}
                    height="30"
                    width="30" />
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

                <Link
                    href="/panier"
                    id={styles.panier}>
                    <MdShoppingCart id={styles.icone_panier}/> Panier
                </Link>

                <BtnCompte />

            </div>

        </div>
    );
}