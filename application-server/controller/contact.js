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

router.get('/welcome1',(req,res)=>
{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
})
// router.post('/sms',async (req,res)=>{
//     let data = req.body;
//     console.log(data)
//     let response = await model.sms(req.app.locals.db,data) 
// })
module.exports = router