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

var getGenre = function(req, res) {

	original_name = req.params.name
	name = cleanUpSpecialChars(req.params.name)

	Genre.findOne({'name':name},function(err, results) {
		if (err){
			res.send(err)
		}
		if (results != null){
	    	res.json(results);

		}else{
			res.send('Gender for name: '+original_name+' not found!');
		}
	});
};

function cleanUpSpecialChars(str)
{
    str = str.replace(/[ÀÁÂÃÄÅàáâãäåĀāĂăĄą]/g,"a");
    str = str.replace(/[ÈÉÊËèéêëĒēĔĕĖėĘęĚě]/g,"e");
    str = str.replace(/[ÌÍÎÏìíîïĨĩĪīĬĭĮįİı]/g,"i");
    str = str.replace(/[ÒÓÔÕÖØòóôõöøŌōŎŏŐő]/g,"o");
    str = str.replace(/[ÙÚÛÜùúûüŨũŪūŬŭŮůŰűŲų]/g,"u");
    str = str.replace(/[ÇçĆćĈĉĊċČč]/g,"c");
    str = str.replace(/[ŚśŜŝŞşŠš]/g,"s");

    return str.replace(/[^a-z0-9]/gi,'').toLowerCase(); // final clean up
};

module.exports = {

	allGenres: allGenres,
	getGenre: getGenre

}