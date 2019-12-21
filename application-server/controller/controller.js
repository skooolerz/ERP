const express = require('express')
const router = express.Router()
const fs = require('fs')
const glob = require('glob')
const model = require('../models/user_data')


// router.get('/allData',function(req,res){

//     console.log('other pages')


//     db=req.app.locals.db
//     var path = '/home/guruvayurappan/Documents/ERP/application-server/public'


//     // gallery - getimage
//     async function getGalleryHeader(path) 
//     {
//         return new Promise(function(resolve,reject) 
//         {

//             var arr=[]
//             glob(path, function( err, files ) 
//             {
//                 files.forEach(element => 
//                 { 
//                     arr.push(fs.readFileSync(element, 'base64'))
//                 })
//             }) 


//             db.collection('header').find({'type':'gallery'}).project({_id:0}).toArray(function(err, results) 
//             {
//                     results.forEach(function (record, index)
//                     {
//                         record['url']=arr[index]
//                     })

//                     resolve(results[0])                    
//             })
//         })

//     }

//     async function getImages(path) 
//     {
//         return new Promise(function(resolve,reject) 
//         {

//             var arr=[]
//             glob(path, function( err, files ) 
//             {
//                 files.forEach(element => 
//                 { 
//                     arr.push(fs.readFileSync(element, 'base64'))
//                 })
//             }) 


//             db.collection('gallery_image').find({}).project({_id:0}).toArray(function(err, results) 
//             {
//                     results.forEach(function (record, index)
//                     {
//                         record['url']=arr[index]
//                     })


//                     resolve(results)                    
//             })
//         })

//     }

//     async function getVideos() 
//     {
//         return new Promise(function(resolve,reject) 
//         {
//             db.collection('gallery_video').find({}).project({_id:0}).toArray(function(err, results) 
//             {
//                 resolve(results)
//             })
//         })
//     }

//     async function getAddress() 
//     {
//         return new Promise(function(resolve,reject) 
//         {
//             db.collection('contactus_address').find({}).project({_id:0}).toArray(function(err, results) 
//             {
//                 resolve(results)
//             })
//         })
//     }

//     async function getAllData() {
//         let result={}
//         let data={}
//         data['image'] = await getImages(path+'/gallery/*.jpg')
//         data['video'] = await getVideos()
//         data['header'] = await getGalleryHeader(path+'/gallery/header/*')
//         result['gallery']=data
//         data={}
//         data['address'] = await getAddress()
//         result['contactUs']=data
//         res.send(result)
//     }

//     getAllData()

// })


router.get('/allData', async (req, res) => {
    let data = req.query;
    let slider_array = await model.slider_image(req.app.locals.db, data);
    let gallery_array = await model.gallery_image(req.app.locals.db, data);
    let header_array = await model.header_array(req.app.locals.db, data);
    let res_send = {
        slider: slider_array,
        gallery: gallery_array,
        header: header_array,
        status: 200
    }
    res.json(res_send)
})


module.exports = router