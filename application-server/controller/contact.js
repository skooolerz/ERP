const express = require('express')
const router = express.Router()

// const model = require('../models/contact')

router.get('/welcome',(req,res)=>
{
    db=req.app.locals.db
    db.collection('contactUs').find({}).project({_id:0}).toArray(function(err, results) 
    {         
    res.send(results)
    }
    )})

// router.post('/sms',async (req,res)=>{
//     let data = req.body;
//     console.log(data)
//     let response = await model.sms(req.app.locals.db,data) 
// })
module.exports = router