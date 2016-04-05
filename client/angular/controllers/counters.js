counterModule.controller('counterController', [ 'counterFactory',"$cookies", function(counterFactory, $cookies){
	this.data = [];
	var visited = $cookies.get('visited');
	console.log(visited)
	if (!visited){
	counterFactory.counter();
	}
	$cookies.put('visited', 'true');
	var _this = this;
	counterFactory.index(function(data){
		console.log(data)
		_this.data = data;
	})
	this.siteDetail = function(data){
		console.log(data)
		counterFactory.show(data, function(detail){
			_this.detail = detail;
			console.log(detail)
		})
	}
}])
