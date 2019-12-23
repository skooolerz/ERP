const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path');
const MongoConnect = require('mongodb').MongoClient;
const body_parser = require('body-parser')

const controller = require('./controller/controller.js')
const contact = require('./controller/contact.js')

const port = process.env.PORT || 2020



const common_config = require('./config/server_config.json')
var model = require('./model.js')



var dir = path.join(__dirname, 'public');

app.use(cors());
app.use(body_parser.urlencoded({
    extended: true,
    limit: '50mb',
    parameterLimit: 1000000
}));
app.use(body_parser.json());
app.use(body_parser.json({
    limit: '50mb'
}));
app.use(express.static(dir));


app.use('/', controller)
app.use('/contact', contact)



MongoConnect.connect(common_config.mongo_URL, {
    useUnifiedTopology: true
}, function (err, client) {

    if (err) console.log(err)
    else {
        app.locals.db = client.db('skoolerz');
        app.listen(port, '0.0.0.0', () => {
            console.log('Server is up and running on ' + port)
        })
    }
})






// common_config.node_port
// "mongodb+srv://Guru:Welcome$1@skoolerz-dnkoj.mongodb.net/test?retryWrites=true&w=majority"
// VBJZSKUE

// 6169b329-b5b2-41f5-982d-3ca5c12fdb63
// mongodb://localhost:27017"