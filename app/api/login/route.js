// "use client"

import { redirect } from "next/navigation";

export async function GET(request) {

    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    const password = searchParams.get('password');

    let res = await fetch(`http://${process.env.SERVER_HOSTNAME}:${process.env.SERVER_PORT}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "email" : email, "password": password }),
    });

    const data = await res.json();

    if (data["token"] != undefined) {
        redirect(`/auth/redirect-client/?token=${data["token"]}`)
    } else {
        redirect('/auth/connexion');
    }
}

