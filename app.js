var express = require('express') ;
var app = express();
var mongoose = require('mongoose') ;
var config =require('./config');
var setupController = require('./controllers/setupController');

var port = process.env.PORT || 3001;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});


setupController(app);


app.listen(port);