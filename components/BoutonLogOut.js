"use client";
import React from "react"
import {useCookies} from 'react-cookie'
import {redirect} from "next/navigation"
import { useRouter } from 'next/navigation';
import styles from '../styles/compte.module.css';

function LogOut() {
    const [cookie, setCookie, removeCookie] = useCookies();
    const router = useRouter();

    const logout = async () => {
        try {
            removeCookie('token', { path: '/' });
            router.push('/')
            

        } catch (error) {
            console.error('Erreur de suppresion de cookies:', error)
        }
    }

    return (
        <div>
            <button className={styles.btn}
                onClick={logout}>
                Se déconnecter</button>
        </div>
    )
}



export default LogOut;
