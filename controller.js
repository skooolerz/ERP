const express = require('express')

const router = express.Router()

router.get('/invite',function(req,res){
    res.send('Hi welcome who would you want to invite')
})

router.get('/guru',function(req,res){
    res.send('Hi you invited guru , his wife should also be invited')
})

router.get('/vishnu',function(req,res){
    res.send('Hi you rang vishnu,her husband should also be invited')
})

router.get('/guruvishnu',function(req,res){
    res.send('Hi you invited both husband and wife.Thanks')
})

module.exports = router