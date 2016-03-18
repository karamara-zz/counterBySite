counterModule.controller('counterController', [ 'counterFactory', function(counterFactory){
	this.data = {};
	var _this = this;
	counterFactory.index(function(data){
		console.log(data)
		_this.data = data;
	})
}])