counterModule.factory('counterFactory', ['$http', function($http){
	var factory = {};
	$http.put('/counter', {site: 'counter site'})
	factory.allCounter = {};
	factory.index = function(callback){
		$http.get('/counter').success(function(data){
			console.log(data);
			callback(data)
		})
	}
	return factory
}])