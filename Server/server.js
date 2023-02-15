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

let libPath;
if (process.platform === "win32") {
  // Windows
  libPath = "C:\\oracle\\instantclient_19_17";
} else if (process.platform === "darwin") {
  // macOS
  libPath = process.env.HOME + "/instantclient_19_8";
}
if (libPath && fs.existsSync(libPath)) {
  oracledb.initOracleClient({ libDir: libPath });
}

async function run (){

    const con = await oracledb.getConnection({
        host: "localhost",
        user: "scott",
        password: "oracle",
        connectString: "localhost/orcl"
    });
    
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
    
    app.get('/produits', async function (req, res) {
        let result = await con.execute("SELECT * FROM produit");
        console.log(result)
        res.render('../Pages/Client/Produits/produits.ejs', {
            siteTitle: siteTitle,
            pageTitle: "Produits",
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
}



run();