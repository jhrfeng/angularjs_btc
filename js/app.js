var app = angular.module('GalleryApp', ['ngRoute', 'ui.router']);

app.config(function ($routeProvider, $stateProvider, $urlRouterProvider) { 
	$urlRouterProvider.when('', '/home');
	$stateProvider
		.state('home',{
			url:'/home',
			templateUrl: 'views/home.html',
			controller: 'HomeController', 
		})
		.state('aboutus',{
			url:'/aboutus',
			controller: 'AboutusController', 
			templateUrl: 'views/aboutus.html',
			
		})
		.state('login',{
			url:'/login',
			templateUrl: 'views/login.html',
			controller: 'LoginController', 
		})
		.state('register',{
			url:'/register',
			templateUrl: 'views/register.html',
			controller: 'RegisterController', 
		})
		.state('particulars',{
			url:'/particulars',
			templateUrl: 'views/particulars.html',
			controller: 'particularsController', 
		})
		.state('safety',{
			url:'/safety',
			templateUrl: 'views/safety.html',
			controller: 'SafetyController', 
		})
		.state('invest',{
			url:'/invest',
			templateUrl: 'views/invest.html',
			controller: 'InvestController', 
		})
//		.state('register',{
//			url:'/register',
//			templateUrl: 'views/register.html',
//			controller: 'RegisterController', 
//		});
		
//$routeProvider 
//  .when('/home', { 
//    controller: 'HomeController', 
//    templateUrl: 'views/home.html' 
//  })
//  .when('/aboutus', {
//    controller: 'AboutusController',
//    templateUrl: 'views/aboutus.html'
//  })
//  .when('/login', {
//    controller: 'LoginController',
//    templateUrl: 'views/login.html'
//  })
//  .when('/register', {
//    controller: 'RegisterController',
//    templateUrl: 'views/register.html'
//  })
//  .when('/particulars', {
//    controller: 'particularsController',
//    templateUrl: 'views/particulars.html'
//  })
//  .when('/safety', {
//    controller: 'SafetyController',
//    templateUrl: 'views/safety.html'
//  })
//  .when('/invest', {
//    controller: 'InvestController',
//    templateUrl: 'views/invest.html'
//  })
//  .when('/photos/:id', {
//    controller: 'PhotoController',
//    templateUrl: 'views/photo.html'
//  })
//  .otherwise({ 
//    redirectTo: '/home' 
//  });
});