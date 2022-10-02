
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/vinos', 
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log('Conectado a Mongodb en Local'))

.catch((error) => console.error('No se pudo conectar a MongoDB...'));



module.exports = mongoose;














