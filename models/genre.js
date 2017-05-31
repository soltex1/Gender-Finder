var mongoose = require('mongoose');

Schema = mongoose.Schema;

var genreSchema = Schema({

	name:{
		type: String,
		required: true
	},
	gender:{
		type: String,
		required: true
	}

});

var Genre = mongoose.model('Genre', genreSchema);