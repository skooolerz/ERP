const express = require('express')
const router = express.Router()
const {check , validationResult} = require('express-validator')
const model = require('../models/contact')

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

router.post('/sms',async (req,res)=>{
    let data = req.body;
    console.log(data)
    let response = await model.sms(req.app.locals.db,data) 
})

//Get Feedback 
router.post('/GetFeedback',[
    check('email').isEmail().withMessage('Invalid Email'),
    check('name').not().isEmpty().withMessage('Name should not be empty'),
  ], async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array(),status: 199 });
    }
    let data = req.body;
    let res_send = {}
    let response = await model.GetFeedback(req.app.locals.db, data)
    if(response==200){
        res_send.messsage = "Feedback Updated"
        res_send.status = 200
    }else{
        res_send.status = 199
    }
    res.json(res_send)
})
module.exports = router