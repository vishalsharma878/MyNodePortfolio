const express = require('express');
const router = express.Router();

router.get('/shop', (req, res, next)=> {
    res.send('<h1>Hello from Express js</h1>');
    
 })

 module.exports = router;