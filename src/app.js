const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
/*  const indexRoutes = require('/routes'); */



app.set('port', process.env.port || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

/*
app.use(morgan, ('dev'));
app.use(express.urlencoded({extended: false}));
  app.use('/', indexRoutes); */

mongoose.connect('mongodb://localhost/admin-celulares')
.then(db => console.log('db connected'))
.catch(err => console.log(err));
