var counter = require('../controller/counters.js')
module.exports = function(app){
	console.log('route loading')
	app.get('/counter', function(req, res){
		counter.index(req,res);
	})
	app.post('/counter', function(req,res){
		counter.update(req,res);
	})
	app.get('/counter/:site', function(req,res){
		counter.update(req, res);
	})
}
