var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CounterSchema = new mongoose.Schema({
	counter: Number,
	site: String,
	visitor: [{
		type: Schema.ObjectId,
		ref: "Visitor"
	}]
},{timestamps: {
	createdAt: "created_at",
	updatedAt: "updated_at"
}})
var Counter = mongoose.model("CounterBySite", CounterSchema);