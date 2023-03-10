import * as dotenv from 'dotenv'
dotenv.config();

const hostname = process.env.SERVER_HOSTNAME;
const port = process.env.SERVER_PORT;
const url = `http://${hostname}:${port}`

export async function getProduits() {
    let response = await fetch(url + "/api/produits");
    let jsonData = await response.json();
    return jsonData;
}

export async function getInfosProduit(idProduit) {
    let response = await fetch(url + "/api/produit/" + idProduit);
    let jsonData = await response.json();
    return jsonData[0];
}

export async function login(email, password) {
    let response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    let jsonData = await response.json();
    return jsonData[0];
}