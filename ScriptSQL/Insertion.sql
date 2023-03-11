-- Insertion dans la table categorie

CREATE SEQUENCE SEQ_CATEGORIE;

Insert into categorie( id_categorie, type_categorie) values (SEQ_CATEGORIE.nextval, 'Miel');
Insert into categorie( id_categorie, type_categorie) values (SEQ_CATEGORIE.nextval, 'Cosmetique');
-- vérification // select * from categorie;
-------------------------------------------------------------------------------

-- Insertion dans la table type_utilisateur

Insert into type_utilisateur( id_type_utilisateur, droit) values (2, 'Admin'); -- Propriétaire du commerce, 
Insert into type_utilisateur( id_type_utilisateur, droit) values (3, 'User'); 
-- vérification // select * from type_utilisateur;
-------------------------------------------------------------------------------

-- Insertion dans la table utilisateur

-- Liaison présente :
-- type_utilisateur est une cle etrangere(FK) dans cette table, elle permet d'identifier le role de l'uilisateur dans le site
-- elle provient de la table type_utilisateur

CREATE SEQUENCE SEQ_UTILISATEUR;

Insert into utilisateur( id_utilisateur, nom, prenom, email, mot_de_passe, type_utilisateur) values
(SEQ_UTILISATEUR.nextval, 'Peychev', 'Monsieur', 'agriculteur@gmail.com', 'bulgarie4life', 2);
Insert into utilisateur( id_utilisateur, nom, prenom, email, mot_de_passe, type_utilisateur) values
(SEQ_UTILISATEUR.nextval, 'BenMekki', 'Mohamed', 'marco@gmail.com', 'hliwa', 3);
Insert into utilisateur( id_utilisateur, nom, prenom, email, mot_de_passe, type_utilisateur) values
(SEQ_UTILISATEUR.nextval, 'Bencheriff', 'Kenza', 'pouepettekenza@gmail.com', 'hans', 3);
-- vérification 1 // select * from utilisateur;
-- vérification 2 // chercher les Super Admin
-- select * from utilisateur where type_utilisateur in (select id_type_utilisateur from type_utilisateur where droit= 'Super Admin') ;
-------------------------------------------------------------------------------

-- Insertion dans la table table_session

-- Liaison présente :
-- utilisateur_id est une cle etrangere(FK) dans cette table, elle provient de la table utilisateur
-- cette cle permet de lier la session a un utilisateur

CREATE SEQUENCE SEQ_TABLE_SESSION;

Insert into table_session ( id_table_session, jettons, utilisateur_id) values
(SEQ_TABLE_SESSION.nextval, 'fdskjLKJIU9867KJH', 6);
Insert into table_session ( id_table_session, jettons, utilisateur_id) values
(SEQ_TABLE_SESSION.nextval, 'fdklsjfdsIOUH8866', 7);
-- vérification // select * from table_session;
-------------------------------------------------------------------------------

-- Insertion dans la table de type_paiement

CREATE SEQUENCE SEQ_TYPE_PAIEMENT;

Insert into type_paiement (id_type_paiement, modalite_paiement, fournisseur_paiement) values
(SEQ_TYPE_PAIEMENT.nextval, 'mastercard', 'PSP collecteur');
Insert into type_paiement (id_type_paiement, modalite_paiement, fournisseur_paiement) values
(SEQ_TYPE_PAIEMENT.nextval, 'visa', 'PSP collecteur');
-- verification // select * from type_paiement;
-------------------------------------------------------------------------------

-- Insertion dans la table paiement

CREATE SEQUENCE SEQ_PAIEMENT;

-- Liaison présente :
-- type_paiement_id_type_paiement est une cle etrangere(FK) dans la table paiement et laisse savoir de quelle mnaniere la facture
-- est reglee.
-- Elle provient de la table type_paiement qui explique le type de paiement.

Insert into paiement (id_paiement, frais_paimt, type_paiement_id_type_paiement) values
(SEQ_PAIEMENT.nextval, 5, 1);
Insert into paiement (id_paiement, frais_paimt, type_paiement_id_type_paiement) values
(SEQ_PAIEMENT.nextval, 5, 1);
Insert into paiement (id_paiement, frais_paimt, type_paiement_id_type_paiement) values
(SEQ_PAIEMENT.nextval, 15, 2);
-- vérification // select * from paiement;
-------------------------------------------------------------------------------

-- Insertion dans la table produit 

-- Liaison présente :
-- categorie_id_categorie est une clé étrangère(FK) dans la table produit. Elle provient de la 
-- table catégorie.

CREATE SEQUENCE SEQ_PRODUIT;

Insert into produit (id_produit, nom, description, prix_suggere, prix_fixe, url_catalog, inventaire, quantite, categorie_id_categorie)
values
(SEQ_PRODUIT.nextval, 'Miel de Manuka', 'Ce miel est excellent pour combattre la pigmentation de la peau et les cicatrices. Le goût est corsé',
15,20,'....', 1000,1000,1);


Insert into produit (id_produit, nom, description, prix_suggere, prix_fixe, url_catalog, inventaire, quantite, categorie_id_categorie)
values
(SEQ_PRODUIT.nextval, 'Miel de Tournesol', 'Un miel riche en flavonoïde. Ces substances ont des vertus anti-inflammatoires et antioxydantes', 16,
20,'....',100,100,1);


Insert into produit (id_produit, nom, description, prix_suggere, prix_fixe, url_catalog, inventaire, quantite, categorie_id_categorie)
values
(SEQ_PRODUIT.nextval, 'Miel de Fleurs Sauvages', 'Ce nectar renforce le système immunitaire, baisse le mauvais cholestérol et soutient une saine
revitalisation de la peau', 23, 30, '....', 200, 200, 1);


Insert into produit (id_produit, nom, description, prix_suggere, prix_fixe, url_catalog, inventaire, quantite, categorie_id_categorie)
values
(SEQ_PRODUIT.nextval, 'Miel d''Eucalyptus', 'Un remède! Calme la toux, lutte les infections respiratoires(bronchite, tuberculose..), 
soigne les infections des voies urinaires, diminue les sympôtes de certaines migraines et bien plus !', 15,20,'....',100,100,1);
 -- vérification // select * from produit;
-------------------------------------------------------------------------------

-- Insertion dans la table commande

-- Liaison présente :
-- utilisateur_id_utilisateur clé étrangère(FK) dans la table commande qui provient de la table utilisateur
-- paiement_id_paiement clé étrangère(FK) dans la table commande qui provient de la table paiement

CREATE SEQUENCE SEQ_COMMANDE;

Insert into commande (id_commande, adresse, date_commande, statut_envoye, utilisateur_id_utilisateur, paiement_id_paiement)
values (SEQ_COMMANDE.nextval, '914 rue Gouin Ste-do', TO_DATE('2023/01/01', 'yyyy/mm/dd'), 'F', 6, 1); --user Mohamed
Insert into commande (id_commande, adresse, date_commande, statut_envoye, utilisateur_id_utilisateur, paiement_id_paiement)
values (SEQ_COMMANDE.nextval, '500 blv Samson Ste-do', TO_DATE('2023/02/01', 'yyyy/mm/dd'), 'F', 7, 2); --user kenza
-- vérification // select * from commande;
-------------------------------------------------------------------------------

-- Insertion dans la table item__commande 

-- Liaison présente :
--  commande_id_commande est une clé étrangère dans la table item__commande et provient de la table commande
-- id_produit est une clé étrangère dans la table item__commande et provient de la table produit

CREATE SEQUENCE SEQ_ITEM_COMMANDE;

Insert into item__commande (id_item_comm, quantite, prix, commande_id_commande, id_produit)
values (SEQ_ITEM_COMMANDE.nextval, 1, 20, 1, 12); --commande du client mohamed, produit 1 voulu Miel de Manuka (20$)

Insert into item__commande (id_item_comm, quantite, prix, commande_id_commande, id_produit)
values (SEQ_ITEM_COMMANDE.nextval, 2, 40, 1, 13);  --commande du client mohamed, produit 2 voulu Miel de Tournesol commandé 2 fois (40$)

Insert into item__commande (id_item_comm, quantite, prix, commande_id_commande, id_produit)
values (SEQ_ITEM_COMMANDE.nextval, 1, 30, 2, 14); --commande cliente kenza, Miel de Fleurs Sauvages 1 fois (30$)
-- vérification // select * from item__commande;

-- Testons une jointure pour verifier la cohérence de notre database.

-- select u.nom, u.prenom, t.droit, p.nom, p.description, i.quantite from utilisateur u inner join
-- commande c on u.id_utilisateur= c.utilisateur_id_utilisateur inner join item__commande
-- i on i.commande_id_commande= c.id_commande inner join produit p on i.id_produit= p.id_produit
-- inner join  type_utilisateur t on t.id_type_utilisateur= u.type_utilisateur where c.utilisateur_id_utilisateur= 7;

-- Ça marche ! Ceci prouve que les liens sont bons.

commit;



