define(['app','angular'],function(){
	app.factory("HttpClient",["$http","$q",(function(){
		function HttpClient($http,$q){
			this.$http=$http;
			this.$q=$q;
		}
		
		HttpClient.prototype.findAll=function(){
			var deferred=this.$q.defer();
			var promise=deferred.promise;
			
			$http({
				  method: 'GET',
				  
				  url: 'http://localhost:8080/AngularLearing/AngularServelt?command=findAll',
				  
				  headers: {'Content-Type': "multipart/form-data"},
				  
					  
				}).then(function (response) {
					
					deferred.resolve(response.data);
										
				  }, function (error) {

					deferred.reject(error);
					  
				  });
		}
		return HttpClient;
	})()]);
});