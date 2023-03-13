import { redirect } from "next/navigation";

export async function GET(request) {

    const { searchParams } = new URL(request.url);

    const nom = searchParams.get('nom');
    const prenom = searchParams.get('prenom');
    const email = searchParams.get('email');
    const password = searchParams.get('password');

    let res = await fetch(`http://${process.env.SERVER_HOSTNAME}:${process.env.SERVER_PORT}/api/register`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "nom" : nom, "prenom" : prenom, "email" : email, "password": password }),
    });

    const data = await res.json();

    if (data["token"] != undefined) {
        redirect(`/auth/redirect-client/?token=${data["token"]}`)
    } else {
        redirect('/auth/inscription');
    }
}

