const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path');
const MongoConnect = require('mongodb').MongoClient;

const controller = require('./controller/controller.js')
const gallery = require('./controller/gallery.js')
// const home = require('./controller/home.js')
const common_config = require('./config/server_config.json')
var model =  require('./model.js')


var dir = path.join(__dirname, 'public');

app.use(cors());
app.use(express.static(dir));

app.use('/',controller)
app.use('/gallery',gallery)
// app.use('/home',home)

MongoConnect.connect(common_config.mongo_URL, function (err, client) {
    
    if (err) console.log(err)
    else {
        app.locals.db = client.db('ERP');
        app.listen(common_config.node_port, '0.0.0.0', () => {
            console.log('Server is up and running on ' + common_config.node_port)
        })
    }
})


module.exports = app.locals.db





