//setting
require.config({
	paths:{
		angular: 'http://ajax.googleapis.com/ajax/libs/angularjs/1.0.4/angular.min',
		angularGrid:'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-grid/4.2.4/ui-grid',
		app:"js/app"
	},
	shim:{
		"angular": { exports: "angular" },
		"angularGrid": ["angular"],		
		"app":["angular"]	
	}
});
//loading
require([
	'angular',
	'angularGrid',
	'app'
	], function(){		
});
	
