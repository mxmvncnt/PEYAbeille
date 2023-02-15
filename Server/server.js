/**
* importation des modules requis
**/
const express = require('express');
const app = express()
const http = require('http');
const oracledb = require('oracledb');
const bodyParser = require('body-parser')
const dateFormat = require('dateformat');
const dateNow = new Date();

// const con = oracledb.createConnection({
//     host: "127.0.0.1",
//     user: "scott",
//     password: "oracle",
//     database: "mybd",
// });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("Global")); // css global

app.set('view engine', 'ejs')


const siteTitle = "Application simple";
const baseURL = "http://localhost:4000/";

app.get('/', function (req, res) {
    result = "Requete SQL"
    res.render('../Pages/Client/Accueil/accueil.ejs', {
        siteTitle: siteTitle,
        pageTitle: "Event list",
        items: result
    });
});

app.get('/produits', function (req, res) {
    result = "Requete SQL"
    res.render('../Pages/Client/Produits/produits.ejs', {
        siteTitle: siteTitle,
        pageTitle: "Event list",
        items: result
    });
});

app.get('/apropos', function (req, res) {
    result = "Requete SQL"
    res.render('../Pages/Client/APropos/aPropos.ejs', {
        siteTitle: siteTitle,
        pageTitle: "Event list",
        items: result
    });
});

app.get('/nousjoindre', function (req, res) {
    result = "Requete SQL"
    res.render('../Pages/Client/NousJoindre/nousJoindre.ejs', {
        siteTitle: siteTitle,
        pageTitle: "Event list",
        items: result
    });
});

const server = app.listen(4000, function () {
    console.log("Serveur en marche...");
    console.log(baseURL);
});