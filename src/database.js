
const mongoose = require('mongoose');
const URI = "mongodb+srv://santi_quintero:pagetour2019@pagetour-ucdqg.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(URI)
  .then(db => {
    console.log('Db is connected')
    mongoose.connection.close()
  })
  .catch(error => console.error(error));

module.exports = mongoose;
