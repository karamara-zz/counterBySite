var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
mongoose.connect('mongodb://sung:dkssud1@ds015849.mlab.com:15849/heroku_c9w6j14s');
var models_path = path.join(__dirname, './../models');
fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') >= 0){
		require(models_path + '/' + file);
	}
})