const express = require('express')
const router = express.Router()
const glob = require('glob')
var fs = require('fs')
const config = require('../config/server_config.json')


// router.get('/imagesdata',(req,res)=>{
//     let params=req.params
//     console.log(params['url'])
//     fs.readFile('/home/guruvayurappan/Documents/ERP_Nodejs/application-server/public/bannari/' + params['url'], function (err, content) {
//         if (err) {
//             res.writeHead(400, {'Content-type':'text/html'})
//             console.log(err);
//             res.end("No such image");    
//         } else {
//             //specify the content type in the response will be an image
//             res.writeHead(200,{'Content-type':'image/jpg'});
//             res.end(content);
//         }   
//     })
// })

router.get('/getimage',(req,res)=>
{
        var arr=[]
        glob('/home/guruvayurappan/Documents/ERP/application-server/public/gallery/*', function( err, files ) {
                files.forEach(element => { 
                    arr.push(fs.readFileSync(element, 'base64'))
                  }); 
                db=req.app.locals.db

                db.collection('gallery').find({'type':'image'}).project({_id:0}).toArray(function(err, results) {
                    results.forEach(function (record, index){
                        record['url']=arr[index]
                    })

                    res.send(results)
              })
              });
})

router.get('/getvideo',(req,res)=>
{
        db=req.app.locals.db
        
        db.collection('gallery').find({'type':'video'}).project({_id:0}).toArray(function(err, results) {
                res.send(results)
          })
})




module.exports=router
