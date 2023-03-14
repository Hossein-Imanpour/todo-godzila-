const mongoose = require('mongoose');

 async function connect (uri) {
   await mongoose.connect(uri)
}

module.exports  = connect;