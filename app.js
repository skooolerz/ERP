const express = require('express')
const app = express()
// const cors = require('cors')
// const path = require('path');
const MongoConnect = require('mongodb').MongoClient;
// const body_parser = require('body-parser

// MongoConnect.connect(common_config.mongo_URL, function (err, client) {
    
//     if (err) console.log(err)
//     else {
//         app.locals.db = client.db('skoolerz');
//         app.listen(port, '0.0.0.0', () => {
//             console.log('Server is up and running on ' + port)
//         })
//     }
// }))

// const controller = require('./controller/controller.js')
// const gallery = require('./controller/gallery.js')
// const slider = require('./controller/slider.js')
const contact = require('./application-server/controller/contact.js')

const port = process.env.PORT || 3000

const mongo_URL = process.env.PORT || "mongodb+srv://Guru:Welcome$1@skoolerz-dnkoj.mongodb.net/test?retryWrites=true&w=majority"


const common_config = require('./application-server/config/server_config.json')
// var model =  require('./model.js')



// var dir = path.join(__dirname, 'public');

// app.use(cors());
// app.use(body_parser.urlencoded({ extended: true, limit: '50mb', parameterLimit: 1000000 }));
// app.use(body_parser.json());
// app.use(body_parser.json({ limit: '50mb' }));
// app.use(express.static(dir));


// app.use('/',controller)
// app.use('/slider',slider)
// app.use('/gallery',gallery)
app.use('/contact',contact)


MongoConnect.connect(mongo_URL,{ useUnifiedTopology:true }, function (err, client) {
    
    if (err) console.log(err)
    else {
        app.locals.db = client.db('skoolerz');
        app.listen(port, () => {
            console.log('Server is up and running on ' + port)
        })
    }
})

// common_config.node_port


// const http = require('http');
// const port = process.env.PORT || 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port,() => {
//   console.log(`Server running at port `+port);
// });


// common_config.node_port

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://Guru:<password>@skoolerz-dnkoj.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// mongo "mongodb+srv://skoolerz-dnkoj.mongodb.net/test" --username Guru




