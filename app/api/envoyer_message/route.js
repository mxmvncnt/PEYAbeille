import { redirect } from "next/navigation";
import { postMessageContact } from "../../../server/Api";

export async function GET(request) {

    const { searchParams } = new URL(request.url);

    const nom = searchParams.get('nom');
    const prenom = searchParams.get('prenom');
    const sujet = searchParams.get('sujet');
    const email = searchParams.get('email');
    const message = searchParams.get('message');

    await postMessageContact(nom, prenom, sujet, email, message );

    redirect('/nousjoindre')
}