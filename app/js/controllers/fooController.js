'use strict';

(function (angular) {
	angular.module('myApp').controller('Foo', ['$scope', function ($scope) {
		$scope.greets = 'hi';
		$scope.hello = function () {
			$scope.greets = 'hello';
		};
	}]);
}(window.angular));