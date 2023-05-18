const { MongoClient } = require('mongodb');
const oracledb = require('oracledb');
let mongoClient;

async function VerifierMongoDB(){
  let collection;
try {
    mongoClient = new MongoClient(process.env.DB_URI);
    console.log("Connection à MongoDB...");
    await mongoClient.connect();

    const db = mongoClient.db("Peyabeille");
    collection = db.collection("Contact");
    console.log("Connecté à MongoDB!");
    process.exit(0);
  } catch (error) {
    console.error("Erreur de connexion à MongoDB!", error);
    process.exit(1);
  }
}
async function VerfierOracle(){
  
  try{ 
    const con = await oracledb.getConnection({
    host: process.env.ORACLE_HOSTNAME,
    user: process.env.ORACLE_USER,
    password: process.env.ORACLE_PASSWORD,
    connectString: process.env.ORACLE_CONNECTSTRING
  });
  process.exit(0);
}catch (error) {
    console.log("Erreur de connexion a Oracle", error)
    process.exit(1);
}
}

VerifierMongoDB()
  .then(()=> {
    VerfierOracle()
  });
