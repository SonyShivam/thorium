const express = require('express');
const logger = require('../logger/logger'); 
const router = express.Router();

// router.get('/test-me', function (req, res) {
//     res.send('My first ever api!')
//     console.log(logger.welcome());
// });
// router.get('/xyz',function(req,res){
// res.send("this is some text")
// });


// // done sucessufly and postman // 
// router.get('/student/:name',function(req,res){
//     const stuNumber =req.params
//     console.log(stuNumber)
// res.send("8931032323")
// });

// done sucessufly and postman // 
router.get('/movies:num',function(req,res){
    const movNum =req.p arams
    console.log(movNum)
res.send("8931032323")
});




module.exports = router;
// adding this comment for no reason