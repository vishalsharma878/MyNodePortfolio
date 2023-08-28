
const express = require('express');

const loginRouter = express.Router();

loginRouter.get('/login', (req, res, next) => {
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/chat" method="POST"><input id="username" type="text" name="title"><button type="submit">add</button></form>')
})

loginRouter.post('/chat', (req, res, next) => {
    res.redirect('/');
});


module.exports = loginRouter;