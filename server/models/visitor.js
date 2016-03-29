var mongoose = require('mongoose');
var VisitorSchema = new mongoose.Schema({
	IPAddress: String,
	visit: Number,
},{timestamps: {
	createdAt: "created_at",
	updatedAt: "updated_at"
}})
var Visitor = mongoose.model("Visitor", VisitorSchema);