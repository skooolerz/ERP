const express = require('express')
const router = express.Router()
const fs = require('fs')  
const glob = require('glob')       
const model = require('../models/user_data')


router.get('/allData',function(req,res){

    console.log('other pages')
    
    
    db=req.app.locals.db
    var data={}
    var path = '/home/guruvayurappan/Documents/ERP/application-server/public'


    // gallery - getimage
    async function getImages(path) 
    {
        return new Promise(function(resolve,reject) 
        {
            var response;
            var arr=[]
            glob(path, function( err, files ) 
            {
                files.forEach(element => 
                { 
                    arr.push(fs.readFileSync(element, 'base64'))
                })
            }) 


            db.collection('gallery_image').find({}).project({_id:0}).toArray(function(err, results) 
            {
                    results.forEach(function (record, index)
                    {
                        record['url']=arr[index]
                    })

                    resolve(results)                    
            })
        })
        
    }

    async function getVideos() 
    {
        return new Promise(function(resolve,reject) 
        {
            db.collection('gallery_video').find({}).project({_id:0}).toArray(function(err, results) 
            {
                resolve(results)
            })
        })
    }

    async function getAddress() 
    {
        return new Promise(function(resolve,reject) 
        {
            db.collection('contactus_address').find({}).project({_id:0}).toArray(function(err, results) 
            {
                resolve(results)
            })
        })
    }

    async function getAllData() {
        let result={}
        let data={}
        data['image'] = await getImages(path+'/gallery/*')
        data['video'] = await getVideos()
        result['gallery']=data
        data={}
        data['address'] = await getAddress()
        result['contactUs']=data
        res.send(result)
    }

    getAllData()

})


router.get('/allData',async (req,res)=>{
    let data = req.query;
    let response = await model.getAllDate(req.app.locals.db,data)
})


module.exports = router




