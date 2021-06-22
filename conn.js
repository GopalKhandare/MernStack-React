const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/merncrud', {useNewUrlParser: true, useUnifiedTopology: true});  


const dbobject = mongoose.connection

dbobject.on('connected', ()=>{console.log('Mongo DB Connection Successfully')})
dbobject.on('error', ()=>{console.log('Mongo DB Connection Failed')})

module.exports = mongoose            