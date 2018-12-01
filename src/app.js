const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/admin-celulares')
.then(db => console.log('db connected'))
.catch(err => console.log(err));

const indexRoutes = require('./routes/index.js'); 


app.set('port', 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.listen(app.get('port') , () => {
 
});


app.use(express.urlencoded({extended: false}));
  app.use('/', indexRoutes); 




