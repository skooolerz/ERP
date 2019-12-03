const express = require('express')

const controller = require('./controller.js')

//const bodyParser = require('body-parser')

const app = express()

//app.use(express.bodyParser())

app.use('/',controller)

let port = 2020

app.listen(port,()=>{
    console.log('Server is up and running')
})

