'use strict';

(function (angular) {
// Declare app level module which depends on filters, and services
	angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
		config(['$routeProvider', function ($routeProvider) {
			$routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'Foo'});
			$routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'Foo'});
			$routeProvider.otherwise({redirectTo: '/view1'});
		}]);
}(window.angular));