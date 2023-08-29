const express = require('express');
const contactUsController = require('../controllers/contact');

const contactRoute = express.Router();


contactRoute.get('/contact', contactUsController.contactUs);
contactRoute.post('/contact', contactUsController.postContactUs);
contactRoute.get('/success', contactUsController.postContactUsResult);

module.exports = contactRoute;