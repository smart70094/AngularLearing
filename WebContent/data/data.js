var app=angular.module("myApp");
app.controller("dataController",['$scope','$http',function($scope,$http){
	$http({
		  method: 'GET',
		  url: 'http://localhost:8080/AngularLearing/AngularServelt',
		  headers: {'Content-Type': "multipart/form-data"},
		  params:{
			  message:"hello"
		  }
			  
		}).then(function successCallback(response) {
		    // this callback will be called asynchronously
		    // when the response is available
			console.log(response.data.message);
			alert(response.data.message);
		  }, function errorCallback(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
			  alert("Failure");
		  });
}]);