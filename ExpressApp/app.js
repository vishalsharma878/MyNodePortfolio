const express = require('express') ;
const app = express();
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: true}));

app.use('/admin',adminRoutes);
app.use('/shop', shopRoutes);

app.use((req, res, next) =>{
    res.status(404).send('<h2>Page not found</h2>')
})

app.listen(3000);
