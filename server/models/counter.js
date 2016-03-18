var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CounterSchema = new mongoose.Schema({
	counter: Number,
	site: String,
	visitor: [{
		type: Schema.ObjectId,
		ref: "Visitor"
	}]
})
var Counter = mongoose.model("CounterBySite", CounterSchema);