require('../models/genre');

var mongoose = require('mongoose');
Genre = mongoose.model('Genre');


// get all genres
var allGenres = function(req, res) {

	Genre.find().limit(20).exec(function(err, results) {            
         if (err){
			res.send(err)
		}
	    res.json(results);
        })     




};



module.exports = {

	allGenres: allGenres
}