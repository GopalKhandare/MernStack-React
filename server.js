const express = require('express')
const app = express()
const dbfile = require('./conn')
const bodyParser = require('body-parser') 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))
const postroute = require('./routes/Post')

app.use('/api/post' , postroute)

app.get('/', (req , res)=>{
        res.end('Helloworld with Node JS and Express JS')
})

app.listen(5000 , function(){

    console.log('Node JS and Express JS Server Started Successfully')

})