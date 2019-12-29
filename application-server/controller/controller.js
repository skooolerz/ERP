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
        status: 200
    }
    res.json(resSend)
})

router.post('/upload_slider',upload_model.slider_upload_api,async (req,res)=>{
    let data = req.body;
    data.image_name = req.file.filename
    let result =await model.upload_slider(req.app.locals.db,data)
    if(result==200){
        res.json({message:"Slider Uploaded",status: 200})
    }
})

module.exports = router