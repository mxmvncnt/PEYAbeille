import * as dotenv from 'dotenv'
dotenv.config();

const hostname = process.env.SERVER_HOSTNAME;
const port = process.env.SERVER_PORT;
const url = `http://${hostname}:${port}`

export async function getProduits() {
    let response = await fetch(url + "/api/produits", {cache: "no-cache"});
    let jsonData = await response.json();
    return jsonData;
}

export async function getInfosProduit(idProduit) {
    let response = await fetch(url + "/api/produit/" + idProduit, {cache: "no-cache"});
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
    let response = await fetch(url + '/api/admin/infos_ventes/' + token, {cache: "no-cache"});
    let jsonData = await response.json();
    return jsonData;
}