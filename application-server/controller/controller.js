const express = require('express')
const router = express.Router()
const fs = require('fs')
const glob = require('glob')
const model = require('../models/user_data')

router.get('/allData', async (req, res) => {
    let data = req.query;
    let slider_array = await model.slider_image(req.app.locals.db, data);
    let gallery_array = await model.gallery_image(req.app.locals.db, data);
    gallery_array.header = await model.header_array(req.app.locals.db, data);
    let contact =  await model.contact_array(req.app.locals.db, data);
    let res_send = {
        slider: slider_array,
        gallery: gallery_array,
        contactUs: {
            address :contact.address,
        socialMedia : contact.social
        },
        status: 200
    }
    res.json(res_send)
})


module.exports = router