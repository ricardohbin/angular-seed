'use strict';

describe("Foo test", function () {
	var $scope;

	beforeEach(function () {
		module('myApp');
		inject(function ($rootScope, $controller) {
			$scope = $rootScope.$new();
			$controller('Foo', {
				$scope : $scope
			});
		});
	})

	it("should say hello", function () {
		$scope.hello();
		expect($scope.greets).toEqual('hello');
	});
});