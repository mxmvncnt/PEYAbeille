"use client";

import React from 'react';
import styles from '../styles/headerbar.module.css';
import Link from 'next/link';
// import { Link } from "next/link";
import { useState } from "react";

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
            </div>
        </div>
    );
}