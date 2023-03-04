/**
* importation des modules requis
**/
const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const oracledb = require('oracledb');
const fs = require('fs')

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

async function run() {

  const con = await oracledb.getConnection({
    host: "localhost",
    user: "scott",
    password: "oracle",
    connectString: "localhost/orcl"
  });

  const hostname = "localhost";
  const port = 4003;

  app.get('/api/produits', async function (req, res) {
    // Activer le CORS
    res.set('Access-Control-Allow-Origin', '*');

    let result = await con.execute("SELECT * FROM produit", [], { outFormat: oracledb.OUT_FORMAT_OBJECT });
    res.send(result["rows"])
  });

  app.get('/api/produit/:produitID', async function (req, res) {
    // Activer le CORS 
    res.set('Access-Control-Allow-Origin', '*');

    // prendre les parametres de l'url (id du produit)
    let idProduit = req.params;
    idProduit = idProduit['produitID'];
    idProduit = parseInt(idProduit);

    let result = await con.execute("SELECT * FROM produit WHERE ID_PRODUIT = :idProduit", [idProduit], { outFormat: oracledb.OUT_FORMAT_OBJECT });
    res.send(result["rows"])
  });

  const server = app.listen(port, function () {
    console.log("Serveur en marche...");
    console.log("http://" + hostname + ":" + port);
  });
}

run();