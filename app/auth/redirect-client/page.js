"use client";

import { useCookies } from "react-cookie";
import { redirect } from "next/navigation";


/**
 * Page de redirection faite pour mettre un cookie sur le navigateur
 */
export default function RedirectClient(params) {   

    const [cookies, setCookie] = useCookies(['token'])
    setCookie('token', params["searchParams"]["token"], {sameSite: true, path: "/"})

    // TODO: Rediriger vers la page de profil ou mieux la page precedente.
    redirect('/')
}