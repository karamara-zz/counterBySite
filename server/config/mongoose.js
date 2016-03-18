var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
mongoose.connect('mongodb://user1:dkssud1@ds057954.mongolab.com:57954/heroku_754s2lbl');
var models_path = path.join(__dirname, './../models');
fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') >= 0){
		require(models_path + '/' + file);
	}
})