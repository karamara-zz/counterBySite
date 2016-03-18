var mongoose = require('mongoose');
var Counter = mongoose.model("CounterBySite");
var Visitor = mongoose.model('Visitor');
module.exports = (function(){
	return {
		update: function(req, res){
			Counter.findOne({site: req.body.site}, function(err, counter){
				if (err){
					console.log(err);
				} else if (!counter) {
					var counter = new Counter ({
						counter: 1,
						site: req.body.site,
					})
				} else {
					counter.counter ++;
				}
				console.log(req.ip)
				Visitor.findOne({IPAddress: req.ip}, function(err, visitor){
					if (err){
						console.log("error");
					} else if (!visitor){
						console.log("making new visitor")
						var visitor = new Visitor ({
							IPAddress : req.ip,
							visit: 1
						})
					} else {
						visitor.visit++;
					}
					console.log("d", visitor)
					counter.visitor.push(visitor._id)
					counter.save(function(err){
						if (err){
							console.log(err);
						} else {
							visitor.save(function(err){
								if (err){
									console.log(err);
								}else {
									console.log("success");
								}
							})
						}
					})
				})
			})
		},
		// index: function(req, res){
		// 	Counter.find({}, function(err, counters){
		// 		if (err){
		// 			console.log('there was error');
		// 		} else {
		// 			console.log(req.ip);
		// 			res.json(counters);
		// 		}
		// 	})
		// },
		index: function(req, res){
			Counter.find({})
			.populate('visitor')
			.exec(function(err, counters){
				if (err){
					console.log('there was error');
				} else {
					// console.log(counters, " this is index");
					res.json(counters);
				}
			})
		}
	}
})()

