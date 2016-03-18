var mongoose = require('mongoose');
var VisitorSchema = new mongoose.Schema({
	IPAddress: String,
	visit: Number
})
var Visitor = mongoose.model("Visitor", VisitorSchema);