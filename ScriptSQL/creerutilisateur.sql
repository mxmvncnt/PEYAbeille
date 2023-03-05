
--  !! connectez vous en tant que sys@orcl (important ! )
CREATE USER PEY IDENTIFIED BY oracle;
ALTER USER PEY QUOTA UNLIMITED ON system;
ALTER USER PEY QUOTA UNLIMITED ON users;
GRANT CREATE SESSION, CREATE VIEW, CREATE JOB, CREATE TABLE, CREATE SEQUENCE, CREATE TRIGGER, CREATE PROCEDURE, CREATE ANY CONTEXT TO PEY;

--créer une nouvelle connexion ou le username est PEY et le mot de passe est oracle.
--mettez le service name pour orcl