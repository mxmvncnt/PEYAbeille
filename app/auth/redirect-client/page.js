"use client";

import { useCookies } from "react-cookie";
import { redirect } from "next/navigation";


/**
 * Page de redirection faite pour mettre un cookie sur le navigateur
 */
export default function RedirectClient(token) {

    const [cookies, setCookie] = useCookies(['access_token'])
    setCookie('access_token', token, {sameSite: true})

    redirect('/')
}