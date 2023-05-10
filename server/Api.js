import * as dotenv from 'dotenv'
dotenv.config();

const hostname = process.env.SERVER_HOSTNAME;
const port = process.env.SERVER_PORT;
const url = `http://${hostname}:${port}`

export async function verifierSession(token) {
    let response = await fetch(url + '/api/verifier_session/' + token, {cache: "no-cache"});

    let jsonData = await response.json();
    return jsonData;
}

export async function getProduits(typeTri) {
    let response = await fetch(url + "/api/produits/" + typeTri, { cache: "no-cache" });
    let jsonData = await response.json();
    return jsonData;
}

export async function getInfosProduit(idProduit) {
    let response = await fetch(url + "/api/produit/" + idProduit, { cache: "no-cache" });
    let jsonData = await response.json();
    return jsonData[0];
}

export async function login(email, password) {
    let response = await fetch(url + '/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    let jsonData = await response.json();
    return jsonData[0];
}

export async function register(nom, prenom, email, password) {
    let response = await fetch(url + '/api/register', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nom, prenom, email, password }),
    });
    let jsonData = await response.json();
    return jsonData[0];
}

export async function getAdminStats(token) {
    let response = await fetch(url + '/api/admin/infos_ventes/' + token, { cache: "no-cache" });
    let jsonData = await response.json();

    if (response.status == 403) {
        return 403;
    }

    return jsonData;
}

export async function getCommandesAdmin(token) {
    let response = await fetch(url + '/api/admin/commandes/' + token, { cache: "no-cache" });
    let jsonData = await response.json();

    if (response.status == 403) {
        return 403;
    }

    return jsonData;
}

export async function getImageProduit(id) {
    let response = await fetch(url + '/api/admin/get_image_produit/' + id, { cache: "no-cache" });
    let jsonData = await response.json();
    
    if (response.status == 404) {
        return 404;
    }

    return jsonData;
}

export async function getImagesProduit(id) {
    let response = await fetch(url + '/api/admin/get_images_produit/' + id, { cache: "no-cache" });
    let jsonData = await response.json();
    
    if (response.status == 404) {
        return 404;
    }

    return jsonData;
}
export async function getCommandeCompte(token){
    let response = await fetch(url + '/api/compte/commande/' + token,{ cache: "no-cache" });
    let jsonData = await response.json();

    if (response.status == 404) {
        return 404;
    }

    return jsonData;
}

export async function postMessageContact(nom, prenom, sujet, email, message) {
    let response = await fetch(url + '/api/nousjoindre/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nom, prenom, sujet, email, message }),
    });
    let jsonData = await response.json();
    return jsonData[0];
}