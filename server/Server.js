/**
* importation des modules requis
**/
const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const oracledb = require('oracledb');
const fs = require('fs')
const crypto = require('crypto')
require('dotenv').config();
const bcrypt = require('bcrypt')

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
    host: process.env.ORACLE_HOSTNAME,
    user: process.env.ORACLE_USER,
    password: process.env.ORACLE_PASSWORD,
    connectString: process.env.ORACLE_CONNECTSTRING
  });

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

  app.post('/api/login/', async function (req, res) {
    // Activer le CORS 
    res.set('Access-Control-Allow-Origin', '*');

    /**
     * Le body de la requete post doit contenir le champ email et le champ password
     */

    let email = req.body.email;
    let password = req.body.password;


    // prendre le ID de l'utilisateur pour vérifier s'il existe
    let userID = await con.execute("SELECT ID_UTILISATEUR FROM utilisateur WHERE EMAIL = :email", [email], { outFormat: oracledb.OUT_FORMAT_OBJECT });
    userID = userID["rows"][0];


    if (userID != undefined) {

      // prendre le hash du mdp de la BD
      let passwordHash = await con.execute("SELECT MOT_DE_PASSE FROM utilisateur WHERE EMAIL = :email", [email], { outFormat: oracledb.OUT_FORMAT_OBJECT });
      passwordHash = passwordHash["rows"][0]["MOT_DE_PASSE"];

      // boolean qui retourne true si le mdp est valide
      let mdpValide = await bcrypt.compare(password, passwordHash)

      if (mdpValide) {
        let token = crypto.randomBytes(64).toString('hex');

        // ajouter une ligne a la table_session avec le token
        await con.execute(
          `INSERT INTO 
              table_session ( 
                  id_table_session, 
                  jettons, 
                  utilisateur_id)
              VALUES (
                  seq_table_session.NEXTVAL, 
                  :token, 
                  :userID)`,
          [token, parseInt(userID["ID_UTILISATEUR"])],
          { autoCommit: true }
        );

        // TODO: retourner un json avec un code 200 et le token
        res.cookie('token_session', token)

        res.send("Utilisateur existant: TOKEN=" + token)
      } else {
          res.send("Mot de passe invalide...")
        }
    } else {
      // TODO: retourner du json avec un code 403 et un message
      res.send("Utilisateur inexistant...")
    }
  });

  app.put('/api/register/', async function (req, res) {
    // Activer le CORS 
    res.set('Access-Control-Allow-Origin', '*');

    /**
     * Le body de la requete post doit contenir le champ email et le champ password
     */

    let nom = req.body.nom;
    let prenom = req.body.prenom;
    let email = req.body.email;
    let password = req.body.password;

    let emailDansBd = await con.execute("SELECT ID_UTILISATEUR FROM utilisateur WHERE EMAIL = :email", [email], { outFormat: oracledb.OUT_FORMAT_OBJECT });
    emailDansBd = emailDansBd["rows"][0];

    // si l'email n"existe pas dans la BD
    if (emailDansBd == undefined) {
      
      hash = await bcrypt.hash(password, 16);

      await con.execute(
        `INSERT INTO utilisateur (
            id_utilisateur, 
            nom, 
            prenom, 
            email, 
            mot_de_passe, 
            type_utilisateur) 
        VALUES ( 
            seq_utilisateur.NEXTVAL,
            :nom,
            :prenom,
            :email,
            :password,
            3)`, // Niveau de l'utilisateur est 3 par defaut (utilisateur regulier)
        [nom, prenom, email, hash],
        { autoCommit: true }
      );

      // TODO: retourner un json avec un code 200 et le token
      res.send('compte cree avec succes')
    } else {
      // TODO: retourner du json avec un code 403 et un message
      res.send("Utilisateur existe deja")
    }
  });

  const server = app.listen(process.env.SERVER_PORT, function () {
    console.log("Serveur en marche...");
    console.log("http://" + process.env.SERVER_HOSTNAME + ":" + process.env.SERVER_PORT);
  });
}

run();