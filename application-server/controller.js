const express = require('express')

var model = require('./model.js')

var db = model.getDb()

const router = express.Router()

router.get('/welcome',function(req,res){
    res.send('Hi welcome who would you want to invite')
})

router.get('/guru',function(req,res){

    
    
    db.collection('slide_bar').find().toArray(function(err,result){

        if(err){
            throw err
        }
        console.log(result)
        res.header('Access-Control-Allow-Origin', '*');
        res.send(result)
    })
    
})

router.get('/vishnu',function(req,res){
    res.send('Hi you rang vishnu,her husband should also be invited')
})

router.get('/guruvishnu',function(req,res){
    res.send('Hi you invited both husband and wife.Thanks')
})

module.exports = router