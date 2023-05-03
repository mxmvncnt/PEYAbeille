"use client";
import {redirect} from "next/navigation"
import { useRouter } from 'next/navigation';
import styles from '../styles/compte.module.css';
import React from 'react';
import { useCookies } from 'react-cookie';

function LogoutButton() {
  const [, , removeCookie] = useCookies(['token']);

  const handleLogout = () => {
    // Remove the "token" cookie and redirect to the home page
    removeCookie('token', { path: '/' });
    window.location.href = '/';
  };

  return (
    <button className={styles.btn} onClick={handleLogout}>
      Logout
    </button>
  );
}

export default LogoutButton;