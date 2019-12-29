const express = require('express')
const router = express.Router()
const fs = require('fs')
const glob = require('glob')
const model = require('../models/user_data')
const upload_model = require('../models/upload')

router.get('/allData', async (req, res) => {
    let data = req.query;
    let sliderArray = await model.sliderImage(req.app.locals.db, data);
    let galleryArray = await model.galleryImage(req.app.locals.db, data);
    galleryArray.header = await model.headerArray(req.app.locals.db, data);
    let contact =  await model.contactArray(req.app.locals.db, data);
    let aboutUs = await model.aboutUs(req.app.locals.db, data);
    let resSend = {
        slider: sliderArray,
        gallery: galleryArray,
        aboutUs:aboutUs,
        contactUs: {
            address :contact.address,
            socialMedia : contact.social
        },
        intro : contact.intro,
        status: 200
    }
    res.json(resSend)
})

//Upload Slider Image
router.post('/upload_slider_image',upload_model.slider_upload_api_image,async (req,res)=>{
    let data = {
        name : req.file.filename,
        key : req.body.key
    }
    let result = model.upload_slider_photo(req.app.locals.db,data)
    if(result==200){
        res.json({message:"Slider Image Uploaded",status: 200})
    }
})

//Upload Slider Content
router.post('/upload_slider_content',async(req,res)=>{
    let result = model.upload_slider_content(req.app.locals.db,data)
    if(result==200){
        res.json({message:"Slider Content Uploaded",status: 200})
    }
})

module.exports = router