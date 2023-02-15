INSERT INTO categorie (
    id_categorie,
    type_categorie
)
values (
    0,
    'Miel'
);

INSERT INTO produit (
    id_produit,
    nom,
    description,
    prix_suggere,
    prix_fixe,
    url_catalog,
    inventaire,
    quantite,
    categorie_id_categorie
)
values( 
    12, 
    'miel de manuka',
    'Miel excellent pour la peau gout corse',
    15,
    20,
    '.....',
    1000,
    1000,
    0
);

INSERT INTO produit (
    id_produit,
    nom,
    description,
    prix_suggere,
    prix_fixe,
    url_catalog,
    inventaire,
    quantite,
    categorie_id_categorie
)
values( 
    13, 
    'miel deucalyptus', 
    'description ici', 
    15, 
    20, 
    '.....', 
    100, 
    100,
    0
);

INSERT INTO produit (
    id_produit,
    nom,
    description,
    prix_suggere,
    prix_fixe,
    url_catalog,
    inventaire,
    quantite,
    categorie_id_categorie
)
values (
    14, 
    'miel de tournesol',
    'description a inserer ici', 
    16,
    20,
    '....',
    100,
    100,
    0
);

INSERT INTO produit (
    id_produit,
    nom,
    description,
    prix_suggere,
    prix_fixe,
    url_catalog,
    inventaire,
    quantite,
    categorie_id_categorie
)
values (
    15, 
    'miel de fleurs sauvages',
    'description a inserer ici',
    23,
    30,
    '...',
    200,
    200,
    0
);

commit;