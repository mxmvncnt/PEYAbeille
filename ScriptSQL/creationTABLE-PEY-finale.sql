-- Generated by Oracle SQL Developer Data Modeler 19.4.0.350.1424
--   at:        2023-02-15 11:56:22 EST
--   site:      Oracle Database 11g
--   type:      Oracle Database 11g



CREATE TABLE categorie (
    id_categorie    NUMBER NOT NULL,
    type_categorie  VARCHAR2(30) NOT NULL
);

ALTER TABLE categorie ADD CONSTRAINT categorie_pk PRIMARY KEY ( id_categorie );

CREATE TABLE commande (
    id_commande                 NUMBER NOT NULL,
    adresse                     VARCHAR2(30) NOT NULL,
    date_commande               DATE NOT NULL,
    statut_envoye               CHAR(1) NOT NULL,
    utilisateur_id_utilisateur  NUMBER NOT NULL,
    paiement_id_paiement        NUMBER NOT NULL
);

ALTER TABLE commande ADD CONSTRAINT commande_pk PRIMARY KEY ( id_commande );

CREATE TABLE item__commande (
    id_item_comm          NUMBER NOT NULL,
    quantite              NUMBER NOT NULL,
    prix                  NUMBER NOT NULL,
    commande_id_commande  NUMBER NOT NULL,
    id_produit            NUMBER NOT NULL --fk key
);

ALTER TABLE item__commande ADD CONSTRAINT item__commande_pk PRIMARY KEY ( id_item_comm );

CREATE TABLE paiement (
    id_paiement                     NUMBER NOT NULL,
    frais_paimt                     NUMBER NOT NULL,
    type_paiement_id_type_paiement  NUMBER NOT NULL
);




ALTER TABLE paiement ADD CONSTRAINT paiement_pk PRIMARY KEY ( id_paiement );

CREATE TABLE produit (
    id_produit                   NUMBER NOT NULL,
    nom                          VARCHAR2(30) NOT NULL,
    description                  VARCHAR2(200),
    prix_suggere                 NUMBER, --peut etre null, puisque l'attribut est optionnel
    prix_fixe                    NUMBER NOT NULL,
    url_catalog                  VARCHAR2(30),
    inventaire                   VARCHAR2(30) NOT NULL,
    quantite                     NUMBER NOT NULL,
    categorie_id_categorie       NUMBER NOT NULL
);

ALTER TABLE produit ADD CONSTRAINT produit_pk PRIMARY KEY ( id_produit );

CREATE TABLE table_session (
    id_table_session            NUMBER NOT NULL,
    jettons                     VARCHAR2(30) NOT NULL,
    utilisateur_id		        NUMBER NOT NULL
);



ALTER TABLE table_session ADD CONSTRAINT table_session_pk PRIMARY KEY ( id_table_session );

CREATE UNIQUE INDEX table_session__idx ON
    table_session (
        utilisateur_id
    ASC );

CREATE TABLE type_paiement (
    id_type_paiement      NUMBER NOT NULL,
    modalite_paiement        VARCHAR2(30) NOT NULL,
    fournisseur_paiement     VARCHAR2(30) NOT NULL
    
);



ALTER TABLE type_paiement ADD CONSTRAINT type_paiement_pk PRIMARY KEY ( id_type_paiement );

CREATE TABLE type_utilisateur (
    id_type_utilisateur  NUMBER NOT NULL,
    droit                VARCHAR2(30) NOT NULL
);

ALTER TABLE type_utilisateur ADD CONSTRAINT type_utilisateur_pk PRIMARY KEY ( id_type_utilisateur );

CREATE TABLE utilisateur (
    id_utilisateur                         NUMBER NOT NULL,
    nom                                    VARCHAR2(30) NOT NULL,
    prenom                                 VARCHAR2(30) NOT NULL,
    email                                  VARCHAR2(30) NOT NULL,
    mot_de_passe                           VARCHAR2(30) NOT NULL, 
    type_utilisateur                       NUMBER NOT NULL
    
);



ALTER TABLE utilisateur ADD CONSTRAINT utilisateur_pk PRIMARY KEY ( id_utilisateur );

-- CRÉATION DES CLÉS ÉTRANGÈRES.

ALTER TABLE commande
    ADD CONSTRAINT commande_paiement_fk FOREIGN KEY ( paiement_id_paiement )
        REFERENCES paiement ( id_paiement );

ALTER TABLE commande
    ADD CONSTRAINT commande_utilisateur_fk FOREIGN KEY ( utilisateur_id_utilisateur )
        REFERENCES utilisateur ( id_utilisateur );

ALTER TABLE item__commande
    ADD CONSTRAINT item__commande_commande_fk FOREIGN KEY ( commande_id_commande )
        REFERENCES commande ( id_commande );

ALTER TABLE paiement
    ADD CONSTRAINT paiement_type_paiement_fk FOREIGN KEY ( type_paiement_id_type_paiement)
        REFERENCES type_paiement ( id_type_paiement );

ALTER TABLE produit
    ADD CONSTRAINT produit_categorie_fk FOREIGN KEY ( categorie_id_categorie )
        REFERENCES categorie ( id_categorie );

ALTER TABLE item__commande ADD CONSTRAINT id_produit_produit_fk FOREIGN KEY ( id_produit )
        REFERENCES produit ( id_produit  );

ALTER TABLE table_session
    ADD CONSTRAINT table_session_utilisateur_fk FOREIGN KEY ( utilisateur_id )
        REFERENCES utilisateur ( id_utilisateur );




ALTER TABLE utilisateur
    ADD CONSTRAINT utilisateur_type_utilisateur_fk FOREIGN KEY ( type_utilisateur )
        REFERENCES type_utilisateur ( id_type_utilisateur );



-- Oracle SQL Developer Data Modeler Summary Report: 
-- 
-- CREATE TABLE                             9
-- CREATE INDEX                             4
-- ALTER TABLE                             19
-- CREATE VIEW                              0
-- ALTER VIEW                               0
-- CREATE PACKAGE                           0
-- CREATE PACKAGE BODY                      0
-- CREATE PROCEDURE                         0
-- CREATE FUNCTION                          0
-- CREATE TRIGGER                           0
-- ALTER TRIGGER                            0
-- CREATE COLLECTION TYPE                   0
-- CREATE STRUCTURED TYPE                   0
-- CREATE STRUCTURED TYPE BODY              0
-- CREATE CLUSTER                           0
-- CREATE CONTEXT                           0
-- CREATE DATABASE                          0
-- CREATE DIMENSION                         0
-- CREATE DIRECTORY                         0
-- CREATE DISK GROUP                        0
-- CREATE ROLE                              0
-- CREATE ROLLBACK SEGMENT                  0
-- CREATE SEQUENCE                          0
-- CREATE MATERIALIZED VIEW                 0
-- CREATE MATERIALIZED VIEW LOG             0
-- CREATE SYNONYM                           0
-- CREATE TABLESPACE                        0
-- CREATE USER                              0
-- 
-- DROP TABLESPACE                          0
-- DROP DATABASE                            0
-- 
-- REDACTION POLICY                         0
-- 
-- ORDS DROP SCHEMA                         0
-- ORDS ENABLE SCHEMA                       0
-- ORDS ENABLE OBJECT                       0
-- 
-- ERRORS                                   0
-- WARNINGS                                 0
