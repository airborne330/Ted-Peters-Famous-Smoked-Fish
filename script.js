// script.js

    // create the module and name it scotchApp
    var app = angular.module('myApp', ['ngRoute']);

    // configure put routes
    app.config(function($routeProvider) {
		$routeProvider			
			//route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})
				//route for the menu page
			.when('/menu', {
				templateUrl : 'pages/menu.html',
				controller  : 'menuController'
			})
			//route for the history page
			.when('/history', {
				templateUrl  : 'pages/history.html',
				controller   : 'historyController'
			})
			//route for the media page
			.when('/media', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})
			.when('/directions', {
				templateUrl : 'pages/directions.html',
				controller : 'directionsController'
		});
			
    });

//create the controller and inject Angular's $scope
app.controller('mainController', function($scope){
	$scope.message = 'Menu Page';
});
app.controller('menuController', function($scope){
	$scope.message = 'Main Page';
});
app.controller('historyController', function($scope){
	$scope.message = 'History Page';
});
app.controller('aboutController', function($scope){
	$scope.message = 'Welcome to the Media Page';
});
app.controller('directionsController', function($scope){
	$scope.message = 'Here is where we are located!';
});