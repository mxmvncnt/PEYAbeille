# Peyabeille
Site web fait avec React et OracleDB

## Installation (MacOS et Linux)

**Le site web requiert une base de données ORACLE**

### Dépendances:
- Oracle Instant Client (Voir: https://www.oracle.com/database/technologies/instant-client/downloads.html)
- Rsync

1. Cloner le dépot du site web.
`git clone https://github.com/BdeB-2CW/h2023-4gw-gr2-PEYAbeille.git`
2. Naviguer à l'emplacement du dépot qui a été cloné et installer les dépendances.
```
cd h2023-4gw-gr2-PEYAbeille
npm install
```
3. Transferer les scripts de base de données. Pour cela, nous utiliserons la commande Rsync pour les déplacer de votre ordinateur vers le serveur contenant la base de données. Notez que la partie entre crochets est optionnelles et sert a spécifier un port pour la connexion au serveur.
```
rsync -a -e 'ssh [-p 2222]' ScriptSQL/ utilisateur_serveur@ip_serveur_bd:~
```
4. Connectez vous au serveur de base de données. Encore une fois, la partie entre les crochets est optionnelle et peut varier.
`ssh [-p 2222] utilisateur_serveur@ip_serveur_bd`
5. Entrer dans le mode d'édition de la base de données. Pour cela, exécutez la commande suivante sur votre connexion ssh:
`sqlplus`
Vous  allez vous faire demander vos identifiants de la base de données (ce n'est pas le même nom d'utilisateur que celui du serveur). **L'utilisateur que vous choisissez doit avoir des privilèges d'administrateur!**
6. Ensuite, il faut exécuter les fichiers de scripts, n'oubliez pas de modifier le nom d'utilisateur entre les accolades!
    - `@/home/{UTILISATEUR_SERVEUR_BD}/Downloads/creerutilisateur.sql;`
    - `exit`
    - `sqlplus` **Ici, connectez vous avec le nom d'utilisateur PEY et le mot de passe "oracle".**
    - `@/home/{UTILISATEUR_SERVEUR_BD}/Downloads/CreationTables.sql;`
    - `@/home/{UTILISATEUR_SERVEUR_BD}/Downloads/Insertion.sql;`
    - `commit;`

7. Vous avez installé la base de données, maintenant, il faut démarrer le serveur web, mais avant cela, il faut modifier les informations que le serveur utilisera pour créer la connexion.
Pour cela:
	1. Fermez votre connexion SSH en tapant `exit` deux fois dans la fenêtre de terminal ouverte.
	2. Ensuite, modifiez le fichier Server.js du site web Peyabeille. Vous pouvez utiliser l'éditeur de votre choix pour cela, nous utiliserons GNU Nano.
	`nano src/server/Server.js`
	3. Naviguez le fichier avec les flèches de votre clavier jusqu'à trouver cette section:
	```js
    const con = await oracledb.getConnection({
      host: "localhost",
      user: "PEY",
      password: "oracle",
      connectString: "localhost/orcl"
    });
	```
	4. Vous devez ensuite modifier les valeurs "host" avec la valeur appropriée. Voici par quoi vous devez la remplacer:
	
		- host: Adresse IP du serveur de la base de données
		
	5.Une fois cela terminé, appuyez sur les touches `CRTL + X` de votre clavier. Ensuite, appuyez sur `y` ou `o` selon la langue de votre ordinateur (y étant en anglais pour "yes").
8. Une fois la configuration du serveur effectuée, il ne vous reste qu'a lancer le site web!
`npm start`


## Installation sur Windows avec Docker

1. Cloner le dépot du site web.
`git clone https://github.com/BdeB-2CW/h2023-4gw-gr2-PEYAbeille.git`
2. Naviguer à l'emplacement du dépot qui a été cloné et installer les dépendances.
```
cd h2023-4gw-gr2-PEYAbeille
npm install
```
3. Sur SQLDevelopper, créez une nouvelle connection que vous allez appeler sys@orcl, connectez vous avec le nom d'utilisateur 'SYS' et mot de passe 'oracle'
Assignez le role comme 'SYSDBA'. Le nom d'hote doit etre 'localhost' et le port '1521' avec comme nom de service 'XEPDB1'

4. Connectez vous avec cette connection et roulez le script de création d'utilisateur

5. Créez une nouvelle connection avec l'utilisateur PEY et le mot de passe oracle

6. Avec cette nouvelle connection, roulez les scripts de créations de table et d'insértion

7. Sur votre terminal, realisez la commande suivante
'''
docker pull gvenzl/oracle-xe:21-full
docker run -d -p 1521:1521 -e ORACLE_PASSWORD={oracle} -v oracle-volume:/opt/oracle/XE21CFULL/oradata gvenzl/oracle-xe:21-full
'''
8. Encore sur votre terminal lancer la commande
'''
npm run dev
'''
9. En parrallèle, ouvrez une autre terminal sur le même repertoire, lancez la commande 
'''
npm start
'''
10. Allez sur le navigateur de votre choix et le site se trouve a l'addresse suivante:
'''
http://localhost:3000/
''''