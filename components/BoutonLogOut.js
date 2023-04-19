"use client";
import React from "react";
import {useCookies} from 'react-cookie'
import { redirect } from "next/navigation";

export default function LogOut() {
    const [cookie, setCookie, removeCookie] = useCookies();
    const Logout = () =>{
        removeCookie('token', {path:'/'})
        redirect('/')
    }
    
    return(
        <div>
            <button onClick={Logout}>Logout</button>
        </div>
    )
}

