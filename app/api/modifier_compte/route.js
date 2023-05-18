import { redirect } from "next/navigation";
import { updateInformations } from "../../../server/Api";

export async function GET(request) {

    const { searchParams } = new URL(request.url);

    const nom = searchParams.get('nom');
    const prenom = searchParams.get('prenom');
    const token = searchParams.get('token');
    const email = searchParams.get('email');
    const password = searchParams.get('password');

    await updateInformations(token, nom, prenom, email, password);

    redirect('/compte')
}