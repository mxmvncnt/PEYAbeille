const hostname = "localhost";
const port = 4003;
const url = `http://${hostname}:${port}`

export async function getProduits() {
    let response = await fetch(url + "/api/produits");
    let jsonData = await response.json();
    return jsonData;
}

export async function getInfosProduit(idProduit) {
    let response = await fetch(url + "/api/produit/" + idProduit);
    let jsonData = await response.json();
    return jsonData;
}
