
const express = require('express') ;
const app = express();

app.use((req, res, next) => {
    console.log("This is Midleware");
    next();
})
app.use((req, res, next)=> {
    res.send({"key": 4});
})

app.listen(3000);
