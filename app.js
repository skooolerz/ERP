const express = require('express')
const app = express()
var cors = require('cors')

//const bodyParser = require('body-parser')


//app.use(express.bodyParser())



var model =  require('./model.js')

model.connectToServer( function( err, client ) {

    if (err) console.log(err);
    let port = 2020

    const controller = require('./controller.js')

    app.use('/',controller)
    app.use(cors());
    

    app.listen(port,'0.0.0.0',()=>{
        console.log('Server is up and running')
    })

  });







