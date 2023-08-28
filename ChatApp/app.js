const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true})); 

const loginRoutes = require('./routes/login');
const messageRoutes = require('./routes/message');
app.use(loginRoutes);
app.use(messageRoutes);

app.listen(3000);