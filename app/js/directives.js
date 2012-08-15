'use strict';

(function (angular) {
/* Directives */
	angular.module('myApp.directives', []).
		directive('appVersion', ['version', function (version) {
			return function (scope, elm, attrs) {
				elm.text(version);
			};
		}]);
}(window.angular));