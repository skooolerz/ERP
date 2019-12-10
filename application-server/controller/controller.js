const express = require('express')
const router = express.Router()
// const fs = require('fs')


const invitation = require('../users/school_invitation.js')
var model = require('../model.js')

router.get('/welcome',function(req,res){
    res.send('API is working fine')
})

router.get('/first_step/:name',async function(req,res){
    let params = req.params;
    let res_send = {};
    res_send.content = invitation[params.name]
    res.json(res_send)

    // fs.readdir(`./public/${params.name}`,(err,data)=>{
    //     let res_send = {};
    //     //res_send.images = data;
    //     res_send.content = invitation[params.name]
    //     res.json(res_send)
    // })
})

module.exports = router