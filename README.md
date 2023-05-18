# Peyabeille
Site web fait avec React et OracleDB


**Le site web requiert une base de données ORACLE**


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

4. Connectez vous avec cette connection et roulez le script de création d'utilisateur situé dans le dossier ScriptSQL

5. Créez une nouvelle connection avec l'utilisateur PEY et le mot de passe oracle

6. Avec cette nouvelle connection, roulez les scripts de créations de table et d'insertion situé dans le dossier ScriptSQL

7. Sur votre terminal, realisez la commande suivante
```
docker pull gvenzl/oracle-xe:21-full
docker run -d -p 1521:1521 -e ORACLE_PASSWORD={oracle} -v oracle-volume:/opt/oracle/XE21CFULL/oradata gvenzl/oracle-xe:21-full
```
8. Encore sur votre terminal lancez la commande
```
npm run dev
```
9. En parrallèle, ouvrez une autre terminal sur le même repertoire, lancez la commande 
```
npm start
```
10. Allez sur le navigateur de votre choix et le site se trouve a l'addresse suivante:
```
http://localhost:3000/
```

## Installation MongoDB 
**Le site web requiert une base de données MongoDB**

1. Télécharger l'image docker mongodb sur le lien suivant: https://docs.docker.com/get-docker/

2. Extraire l'image Docker MongoDB avec la commande suivant:
    docker pull mongodb/mongodb-community-server

3. Exécuter l'image en tant que conteneur par cette commande: 
    docker run --name mongo -d mongodb/mongodb-community-server:latest

4. Vérifier que le conteneur est en cours d'exécution: 
    docker container ls

5. Connectez-vous au déploiement MongoDB avec mongosh:
    docker exec -it mongo mongosh

6. Validez votre déploiement : 
  db.runCommand(
   {
      Bonjour le Monde: 1
   }
  )