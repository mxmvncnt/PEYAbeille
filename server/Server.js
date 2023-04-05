/**
* importation des modules requis
**/
const express = require('express');
const fileUpload = require('express-fileupload');
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

app.use(fileUpload({
  createParentPath: true, // ne pas faire une erreur de chemin introuvable
  safeFileNames: true, // eviter des fichiers mis en ligne tels que ../index.js qui remplaceraient le contenu du site.
  preserveExtension: 4, // .webp utilise 4 char donc on ne veut pas tronquer
  abortOnLimit: true // retourner une erreur si le fichier est trop gros au lieu de couper le flux 
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

async function run() {

  const con = await oracledb.getConnection({
    host: process.env.ORACLE_HOSTNAME,
    user: process.env.ORACLE_USER,
    password: process.env.ORACLE_PASSWORD,
    connectString: process.env.ORACLE_CONNECTSTRING
  });

  /***************************\
   * ======================= *
   *  GET VERIFIER SESSION   *
   * ======================= *
  \***************************/
  app.get('/api/verifier_session/:token', async function (req, res) {
    // Activer le CORS
    res.set('Access-Control-Allow-Origin', '*');

    // prendre les parametres de l'url (token)
    let params = req.params;
    let token = params['token'];

    if (await isSessionOuverte(token)) {

      res.status(200).json({
        "succes": "Le jeton de session est valide."
      }).end();

    }
    else {

      res.status(403).json({
        "erreur": "Vous devez être connecté pour faire cette action."
      }).end();

    }
  });

  /***************************\
   * ======================= *
   *    GET LES PRODUITs     *
   * ======================= *
  \***************************/
  app.get('/api/produits', async function (req, res) {
    // Activer le CORS
    res.set('Access-Control-Allow-Origin', '*');

    // selectioner les produits qui ne sont pas cachés (categorie id = 0)
    let result = await con.execute("SELECT * FROM produit WHERE categorie_id_categorie != 0", [], { outFormat: oracledb.OUT_FORMAT_OBJECT });
    res.send(result["rows"])
  });


  /***************************\
   * ======================= *
   *     GET UN PRODUIT      *
   * ======================= *
  \***************************/
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

  /***************************\
   * ======================= *
   *     POST CONNEXION      *
   * ======================= *
  \***************************/
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

        res.status(200).json({
          "succes": "Connecté avec succès.",
          "token": token
        }).end();

      } else {
        res.status(401).json({
          "erreur": "Mot de passe invalide."
        }).end();
      }
    } else {
      res.status(401).json({
        "erreur": "L'utilisateur n'existe pas."
      }).end();
    }
  });

  /****************************\
   * ======================== *
   *      PUT INSCRIPTION     *
   * ======================== *
  \****************************/
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

      let hash = await bcrypt.hash(password, 16);
      let token = crypto.randomBytes(64).toString('hex');

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

      res.status(201).json({
        "succes": "Compte créé avec succès.",
        "token": token
      }).end();
    } else {
      res.status(409).json({
        "erreur": "Le courriel existe déjà dans la base de données."
      }).end();
    }
  });


  /*******************************\
   * =========================== *
   *  PUT ADMIN AJOUTER PRODUIT  *
   * =========================== *
  \*******************************/
  app.put('/api/admin/ajouter_produit', async function (req, res) {
    // Activer le CORS
    res.set('Access-Control-Allow-Origin', '*');

    let token = req.body.token;

    let nom = req.body.nom;
    let description = req.body.description;
    let prixSuggere = req.body.prix_suggere;
    let prixFixe = req.body.prix_fixe;
    let inventaire = req.body.inventaire;
    let quantite = req.body.quantite;
    let categorie = req.body.categorie; // REMPLACER DROP DOWN PAR LE NOMBRE!!!!


    if (await isSessionOuverte(token)) {

      if (await verifierPermsAdmin(token)) {

        await con.execute(
          `INSERT INTO produit (
            id_produit,
            nom,
            description,
            prix_suggere,
            prix_fixe,
            url_catalog,
            inventaire,
            quantite,
            categorie_id_categorie)
        VALUES ( 
            seq_produit.NEXTVAL,
            :nomProduit,
            :description,
            :prixSuggere,
            :prixFixe,
            '',
            :inventaire,
            :quantite,
            :categorie)`,
          [nom, description, prixSuggere, prixFixe, inventaire, quantite, categorie],
          { autoCommit: true }
        );

        res.status(201).json({
          "succes": "Produit ajouté avec succès."
        }).end();

      } else {

        res.status(403).json({
          "erreur": "Vous n'avez pas les permissions requises."
        }).end();

      }
    } else {

      res.status(403).json({
        "erreur": "Vous devez être connecté pour faire cette action"
      }).end();

    }
  });


  /***************************************\
  |* =================================== *|
  |*  POST ADMIN AJOUTER IMAGES PRODUIT  *|
  |* =================================== *|
  \***************************************/

  // Inspiration prise de: https://pqina.nl/blog/upload-image-with-nodejs/
  app.post('/api/admin/upload_images/:id_produit', async function (req, res) {

    const images = req.files;
    let params = req.params;

    const idProduit = params['id_produit'];

    if (images == null) {
      return res.sendStatus(400);
    }

    // verifie sil y a plus quun image, si oui toutes la ajouter au dossier du produit.
    if (images["images"].length == undefined) {
      images["images"].mv(`${__dirname}/file_upload/id_produit/${idProduit}/${images["images"].name}`);
    } else {
      images["images"].forEach(image => {
        image.mv(`${__dirname}/file_upload/id_produit/${idProduit}/${image.name}`);
      });
    }

    res.sendStatus(200);
  });

  /*********************************\
   * ============================= *
   *  POST ADMIN MODIFIER PRODUIT  *
   * ============================+ *
  \*********************************/
  app.post('/api/admin/modifier_produit', async function (req, res) {
    // Activer le CORS
    res.set('Access-Control-Allow-Origin', '*');

    let token = req.body.token;

    let idProduit = req.body.id_produit;

    let nom = req.body.nom;
    let description = req.body.description;
    let prixSuggere = req.body.prix_suggere;
    let prixFixe = req.body.prix_fixe;
    let inventaire = req.body.inventaire;
    let quantite = req.body.quantite;
    let categorie = req.body.categorie; // REMPLACER DROP DOWN PAR LE NOMBRE DANS LE FRONT-END!!!!


    if (await isSessionOuverte(token)) {

      if (await verifierPermsAdmin(token)) {

        await con.execute(
          `UPDATE produit SET 
              nom = :nom,
              description = :description,
              prix_suggere = :prixSuggere,
              prix_fixe = :prixFixe,
              inventaire = :inventaire,
              quantite = :quantite,
              categorie_id_categorie = :categorie
            WHERE ID_PRODUIT = :idProduit`,
          [nom, description, prixSuggere, prixFixe, inventaire, quantite, categorie, idProduit],
          { autoCommit: true }
        );

        res.status(201).json({
          "succes": "Produit modifié avec succès."
        }).end();

      } else {

        res.status(403).json({
          "erreur": "Vous n'avez pas les permissions requises."
        }).end();

      }
    } else {

      res.status(403).json({
        "erreur": "Vous devez être connecté pour faire cette action"
      }).end();

    }
  });

  /************************************\
   * ================================ *
   *  DELETE ADMIN SUPPRIMER PRODUIT  *
   * ================================ *
  \************************************/
  app.delete('/api/admin/supprimer_produit', async function (req, res) {
    // Activer le CORS
    res.set('Access-Control-Allow-Origin', '*');

    let token = req.body.token;

    let idProduit = req.body.id_produit;


    if (await isSessionOuverte(token)) {

      if (await verifierPermsAdmin(token)) {

        // Ne supprime pas reellement le produit. A la place, on set la categorie a 0 dans la BD.
        await con.execute(
          `UPDATE produit SET categorie_id_categorie = 0 WHERE ID_PRODUIT = :idProduit`,
          [idProduit],
          { autoCommit: true }
        );

        res.status(201).json({
          "succes": "Produit retiré avec succès."
        }).end();

      } else {

        res.status(403).json({
          "erreur": "Vous n'avez pas les permissions requises."
        }).end();

      }
    } else {

      res.status(403).json({
        "erreur": "Vous devez être connecté pour faire cela."
      }).end();

    }
  });

  /**************************************\
   * ================================== *
   *  GET ADMIN DASHBOARD STATISTIQUES  *
   * ================================== *
  \**************************************/
  app.get('/api/admin/infos_ventes/:token', async function (req, res) {
    // Activer le CORS
    res.set('Access-Control-Allow-Origin', '*');

    // prendre les parametres de l'url (token)
    let params = req.params;
    let token = params['token'];

    if (await isSessionOuverte(token)) {

      if (await verifierPermsAdmin(token)) {

        let nbCommandes = await con.execute("SELECT count(*) FROM commande", [], { outFormat: oracledb.OUT_FORMAT_OBJECT });

        let nbVentes = await con.execute("SELECT SUM(quantite) from item__commande", [], { outFormat: oracledb.OUT_FORMAT_OBJECT });

        // ======== ID Du produit le plus populaire
        let infosProduitPlusPopulaire = await con.execute(`
        SELECT * FROM (
            SELECT
                id_produit,
                COUNT(*) occurences,
                RANK()
                OVER( ORDER BY COUNT(*) DESC ) AS position
            FROM
                item__commande
            GROUP BY
                id_produit
            ) produitspopulaires
        WHERE
            produitspopulaires.position = 1
            AND ROWNUM = 1`, [], { outFormat: oracledb.OUT_FORMAT_OBJECT });
        infosProduitPlusPopulaire = infosProduitPlusPopulaire["rows"][0]

        // ======== Infos du produit le plus populaire
        let produitPlusPopulaire = await con.execute("SELECT * FROM produit WHERE id_produit = :idProduit", [infosProduitPlusPopulaire["ID_PRODUIT"]], { outFormat: oracledb.OUT_FORMAT_OBJECT });
        produitPlusPopulaire = produitPlusPopulaire["rows"][0]

        // ======= ID du Produit moins populaire
        let infosProduitMoinsPopulaire = await con.execute(`
        SELECT * FROM (
            SELECT
                id_produit,
                COUNT(*) occurences,
                RANK()
                OVER( ORDER BY COUNT(*) ASC ) AS position
            FROM
                item__commande
            GROUP BY
                id_produit
            ) produitspopulaires
        WHERE
            produitspopulaires.position = 1
            AND ROWNUM = 1`, [], { outFormat: oracledb.OUT_FORMAT_OBJECT });
        infosProduitMoinsPopulaire = infosProduitMoinsPopulaire["rows"][0]

        //  ======== Infos du produit le moins populaire
        let produitMoinsPopulaire = await con.execute("SELECT * FROM produit WHERE id_produit = :idProduit", [infosProduitMoinsPopulaire["ID_PRODUIT"]], { outFormat: oracledb.OUT_FORMAT_OBJECT });
        produitMoinsPopulaire = produitMoinsPopulaire["rows"][0]


        res.status(201).json(
          {
            "commandes": nbCommandes["rows"][0]["COUNT(*)"],
            "ventes": nbVentes["rows"][0]["SUM(QUANTITE)"],
            "produits": {
              "plus_populaire": {
                "ventes": infosProduitPlusPopulaire["OCCURENCES"],
                "produit": {
                  "id": produitPlusPopulaire["ID_PRODUIT"],
                  "nom": produitPlusPopulaire["NOM"],
                  "prix": produitPlusPopulaire["PRIX_SUGGERE"],
                  "prix_fixe": produitPlusPopulaire["PRIX_FIXE"],
                  "en_stock": produitPlusPopulaire["QUANTITE"]
                }
              },
              "moins_populaire": {
                "ventes": infosProduitMoinsPopulaire["OCCURENCES"],
                "produit": {
                  "id": produitMoinsPopulaire["ID_PRODUIT"],
                  "nom": produitMoinsPopulaire["NOM"],
                  "prix": produitMoinsPopulaire["PRIX_SUGGERE"],
                  "prix_fixe": produitMoinsPopulaire["PRIX_FIXE"],
                  "en_stock": produitMoinsPopulaire["QUANTITE"]
                }
              }
            }
          }
        ).end();

      } else {

        res.status(403).json({
          "erreur": "Vous n'avez pas les permissions requises."
        }).end();

      }
    } else {

      res.status(403).json({
        "erreur": "Vous devez être connecté pour faire cela."
      }).end();

    }
  });

  /***********************************\
   * =============================== *
   *  GET ADMIN DASHBOARD COMMANDES  *
   * =============================== *
  \***********************************/
  app.get('/api/admin/commandes/:token', async function (req, res) {
    // Activer le CORS
    res.set('Access-Control-Allow-Origin', '*');

    // prendre les parametres de l'url (token)
    let params = req.params;
    let token = params['token'];

    if (await isSessionOuverte(token)) {

      if (await verifierPermsAdmin(token)) {

        let commandes = await con.execute(`
        SELECT COMMANDE.ID_COMMANDE,
            COMMANDE.ADRESSE,
            COMMANDE.DATE_COMMANDE,
            COMMANDE.STATUT_ENVOYE,
            U.NOM,
            U.PRENOM,
            U.EMAIL,
            IC.QUANTITE,
            IC.PRIX,
            P.ID_PRODUIT,
            P.NOM,
            P.PRIX_SUGGERE
        FROM commande
            inner join UTILISATEUR U on U.ID_UTILISATEUR = COMMANDE.UTILISATEUR_ID_UTILISATEUR
            inner join ITEM__COMMANDE IC on COMMANDE.ID_COMMANDE = IC.COMMANDE_ID_COMMANDE
            inner join PRODUIT P on IC.ID_PRODUIT = P.ID_PRODUIT`, [], { outFormat: oracledb.OUT_FORMAT_OBJECT });
        commandes = commandes["rows"]
        console.log(commandes);
        let commandesJson = {
          "commandes": [

          ],
        };


        commandes.forEach(element => {
          let commandeElement;

          // la premiere commande est ajoutee manuellement et sans items
          if (commandesJson["commandes"].length == 0) {
            commandeElement = {
              id: element["ID_COMMANDE"],
              adresse: element["ADRESSE"],
              date: Date.toString(element["DATE_COMMANDE"]),
              statut: element["STATUT_ENVOYE"],
              prix_sous_total: element["PRIX"],
              client: {
                nom: element["NOM"],
                prenom: element["PRENOM"],
                email: element["EMAIL"]
              },
              items: [

              ]
            }

            commandesJson["commandes"].push(commandeElement)
          }

          commandesJson["commandes"].forEach(elementCommandeJson => {

            /**
             * Si le ID de la commande dans le json est le meme que la ligne 
             * de la BD, on ajoute que l'item a la commande precedente au lieu
             * de creer un deuxieme element a larray.
             */
            if (elementCommandeJson["id"] == element["ID_COMMANDE"]) {

              commandeElement = {
                id: element["ID_PRODUIT"],
                nom: element["NOM_1"],
                prix_unite: element["PRIX_SUGGERE"],
                quantite: element["QUANTITE"]
              }

              elementCommandeJson["items"].push(commandeElement);

              // Si le ID nest pas le meme on ajoute un nouvel element a larray
            } else {

              commandeElement = {
                id: element["ID_COMMANDE"],
                adresse: element["ADRESSE"],
                date: Date.toString(element["DATE_COMMANDE"]),
                statut: element["STATUT_ENVOYE"],
                prix_sous_total: element["PRIX"],
                client: {
                  nom: element["NOM"],
                  prenom: element["PRENOM"],
                  email: element["EMAIL"]
                },
                items: [
                  {
                    id: element["ID_PRODUIT"],
                    nom: element["NOM_1"],
                    prix_unite: element["PRIX_SUGGERE"],
                    quantite: element["QUANTITE"]
                  }
                ]
              }

              commandesJson["commandes"].push(commandeElement);
            }
          });
        });

        res.status(201).json(commandesJson).end();

      } else {

        res.status(403).json({
          "erreur": "Vous n'avez pas les permissions requises."
        }).end();

      }
    } else {

      res.status(403).json({
        "erreur": "Vous devez être connecté pour faire cela."
      }).end();

    }
  });

  /**
   * Retourne TRUE ou FALSE selon le statut de connexion de lutilisateur. (true = connecte)
   */
  async function isSessionOuverte(token) {
    let tokenExiste = await con.execute("SELECT count(*) FROM DUAL WHERE EXISTS (SELECT 1 FROM table_session WHERE jettons = :token)", [token], { outFormat: oracledb.OUT_FORMAT_OBJECT })
    // retourne 1 si le token existe, 0 s'il n'existe pas
    tokenExiste = tokenExiste["rows"][0]["COUNT(*)"];

    if (token == 0 || token == undefined || token == "") {
      return false;
    }
    if (tokenExiste == 1) {
      return true;
    }
    else return false;
  }

  /**
   * Retourne TRUE ou FALSE selon le rang de l'utilisateur
   */
  async function verifierPermsAdmin(token) {
    let userID = await con.execute("SELECT utilisateur_id FROM table_session WHERE jettons = :token", [token], { outFormat: oracledb.OUT_FORMAT_OBJECT });
    userID = userID["rows"][0]["UTILISATEUR_ID"];

    let permissionUser = await con.execute("SELECT type_utilisateur FROM utilisateur WHERE id_utilisateur = :userID", [userID], { outFormat: oracledb.OUT_FORMAT_OBJECT });
    permissionUser = permissionUser["rows"][0]["TYPE_UTILISATEUR"];

    // Permission niveau 2 = administrateur
    if (permissionUser == 2) {
      return true;
    }
    else return false;
  }


  const server = app.listen(process.env.SERVER_PORT, function () {
    console.log("Serveur en marche...");
    console.log("http://" + process.env.SERVER_HOSTNAME + ":" + process.env.SERVER_PORT);
  });
}


run();