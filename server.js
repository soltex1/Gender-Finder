require('dotenv').config()

var express 	= require('express');
var app 		= express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var port        = process.env.PORT;
var config 		= require('./config.js').get(process.env.NODE_ENV);
var dbconfig    = require('./config/database'); // get db config file
var genre 		= require('./controllers/genreController');
var apiRoutes 	= express.Router();

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.listen(port);

// connect to mongoose
dbconfig.connect();


app.get('/', function(req, res){
	res.send('Welcome Page');
}); 

// connect the api routes under /api/*
app.use('/api', apiRoutes);
app.get('/api/genres', genre.allGenres);
app.get('/api/genres/:name', genre.getGenre);

console.log('Running on port: '+port);
console.log(process.env.NODE_ENV);