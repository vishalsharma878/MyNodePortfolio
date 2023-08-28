const express = require('express');
const path = require('path');

const contactRoute = express.Router();

const rootDir = require('../util/path')

contactRoute.get('/contact', (req, res, next) =>{
    res.sendFile(path.join(rootDir, 'views', 'contact.html'))
})

contactRoute.post('/contact', (req, res, next)=>{
    res.redirect('/success');
})
contactRoute.get('/success', (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'SucsMsg.html'));
})

module.exports = contactRoute;