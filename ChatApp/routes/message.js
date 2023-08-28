const express = require('express');
const messageRouter = express.Router();
const fs = require('fs')

messageRouter.get('/', (req, res, next) =>{
    const isEmpty = fs.readFileSync('../ChatApp/chat.txt', 'utf8').trim() === '';
    const msg = isEmpty ? 'No messages in this chat yet' : '';

    const read = fs.readFileSync('../ChatApp/chat.txt', 'utf8')
    res.send(`<body><p>${read}</p><p>${msg}<form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST"><input type="text" name="message"><input type="hidden" id="username" name="username"><br><button type"submit">Send</button></form></body>`)
})

messageRouter.post('/', (req, res, next) =>{
   const message = req.body.message;
   const username = req.body.username;
   fs.appendFileSync('../ChatApp/chat.txt', ` ${username}: ${message}`);
   
   res.redirect('/');
})

module.exports = messageRouter;