"use client";
import {redirect} from "next/navigation"
import { useRouter } from 'next/navigation';
import styles from '../styles/compte.module.css';
import React from 'react';
import { useCookies } from 'react-cookie';
import '../app/global.css';

function LogoutButton() {
  const [, , removeCookie] = useCookies(['token']);

  const handleLogout = () => {
    
    removeCookie('token', { path: '/' });
    window.location.href = '/';
  };

  return (
    <button className="btn-acheter" id={styles.btn_logout} onClick={handleLogout}>
      Logout
    </button>
  );
}

export default LogoutButton;