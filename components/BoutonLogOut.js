"use client";
import React from "react";
import {useCookies} from 'react-cookies'

function LogOut() {
    const [cookie, setCookie, removeCookie] = useCookies();
    const Logout = () =>{
        removeCookie('token', {path:'/'})
    }
    return(
        <div>
            <button onClick={Logout}>Logout</button>
        </div>
    )
}

export default LogOut();