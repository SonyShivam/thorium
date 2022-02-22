const express = require('express');
const logger = require('../logger/logger'); 
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    console.log(logger.welcome());
});
router.get('/xyz',function(req,res){
res.send("this is some text")
});





module.exports = router;
// adding this comment for no reason