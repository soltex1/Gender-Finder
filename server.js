require('dotenv').config()

var express 	= require('express');
var app 		= express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var port        = process.env.PORT;

app.use(bodyParser.json());

app.get('/', function(req, res){
	res.send('Welcome Page');
}); 

app.listen(port);

console.log('Running on port: '+port);