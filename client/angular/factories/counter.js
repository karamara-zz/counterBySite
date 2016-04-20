counterModule.factory('counterFactory', ['$http','$location', function($http, $location){
	var factory = {};
	if (!factory.detail){
		$location.path('/')
	}
	factory.counter = function(callback){
		$http.post('/counter', {site: 'counter site'}).success(function(data){
			console.log(data);
			callback(data);
		})
	}
	factory.allCounter = [];
	factory.index = function(callback){
		$http.get('/counter').success(function(data){
			console.log(data);
			factory.allCounter = data;
			console.log(callback)
			if (callback){
				callback(data)
			};
		})
	}
	factory.show = function(id, callback){
		for (var site = 0; site < factory.allCounter.length; site++) {
			if (factory.allCounter[site]._id == id){
				$location.path('/detail')
				factory.detail = factory.allCounter[site]
				callback(factory.detail)
			}
		}
	}
	return factory
}])