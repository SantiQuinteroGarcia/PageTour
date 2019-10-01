const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://santi_quintero:pagetour2019@pagetour-ucdqg.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const db = client.db("Pagetour");
  // perform actions on the collection object
  console.log("DB is connected");
  client.close();
});

