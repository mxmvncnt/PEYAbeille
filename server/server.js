/**
* importation des modules requis
**/
const express = require('express');
const app = express()
const oracledb = require('oracledb');

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
        host: "192.169.2.35",
        user: "scott",
        password: "oracle",
        connectString: "localhost/orcl"
    });
    
    const hostname = "localhost";
    const port = 4001;
    
    app.get('/produits', async function (req, res) {
        let result = await con.execute("SELECT * FROM produit", [],{ outFormat: oracledb.OUT_FORMAT_OBJECT });
        res.send(result["rows"])
    });

    app.get('/produit/:produitID', async function (req, res) {
        let idProduit = req.params;
        let result = await con.execute("SELECT * FROM produit", [],{ outFormat: oracledb.OUT_FORMAT_OBJECT });
        res.render('../Pages/Client/Produit/produit.ejs', {
            siteTitle: siteTitle,
            pageTitle: "Produit",
            items: result["rows"]
        });
    });
    
    const server = app.listen(4001, function () {
        console.log("Serveur en marche...");
        console.log("http://" + hostname + ":" + port);
    });
}



run();