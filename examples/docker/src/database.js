const mongoose = require('mongoose')

mongoose.connect(
  'mongodb://database/learn-docker', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
) 
.then(db => console.log('Db connected', db.connection.host))
.catch(error => console.error(error))