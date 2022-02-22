const express = require('express');
const logger = require('../logger/logger'); 
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    console.log(logger.welcome());
});

module.exports = router;
// adding this comment for no reason