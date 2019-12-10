const express = require('express')
const router = express.Router()
var fs = require('fs')


router.get('/imagesdata',(req,res)=>{
    let params=req.params
    console.log(params['url'])
    fs.readFile('/home/guruvayurappan/Documents/ERP_Nodejs/application-server/public/bannari/' + params['url'], function (err, content) {
        if (err) {
            res.writeHead(400, {'Content-type':'text/html'})
            console.log(err);
            res.end("No such image");    
        } else {
            //specify the content type in the response will be an image
            res.writeHead(200,{'Content-type':'image/jpg'});
            res.end(content);
        }
            
    })
    
})

module.exports = router