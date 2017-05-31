require('dotenv').config()

var mongoose    = require('mongoose');
var config 		= require('../config.js').get(process.env.NODE_ENV);
var uristring 	= config.database_uri

module.exports = {
  connect: function() {
	mongoose.connect(uristring, function (err, res) {
		if (err) {
			console.log ('ERROR connecting to: ' + uristring + '. ' + err);
		} else {
			console.log ('Succeeded connected to: ' + uristring);
		}
	});
  }
};