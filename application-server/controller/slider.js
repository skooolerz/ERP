const express = require('express')
const router = express.Router()
const fs = require('fs')
const glob = require('glob')

var arr=[]

router.get('/sliderimages',(req,res)=>{
    console.log('home')

    glob('/home/guruvayurappan/Documents/ERP/application-server/public/slider/*', function( err, files ) {
        files.forEach(element => { 
            arr.push(fs.readFileSync(element, 'base64'))
          }); 
        db=req.app.locals.db
        db.collection('slider').find({}).project({_id:0}).toArray(function(err, results) {
            results.forEach(function (record, index){
                record['src']= 'data:image/png;base64,'+arr[index]
            })
            result={}
            result['slider_data']=results
            res.send(result)
      })
      });
})




module.exports = router
