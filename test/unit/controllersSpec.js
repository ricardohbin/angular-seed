'use strict';

/* jasmine specs for controllers go here */

describe('Foo', function () {
    var $scope;

    beforeEach(function () {
        module('myApp');
        inject(function (_$rootScope_, _$controller_) {
           $scope =  _$rootScope_.$new();
            _$controller_('Foo', {
               $scope: $scope
           });
        });
    });


    it('should say "hello"', function () {
        expect($scope.greets).toEqual('hi');
        $scope.hello();
        expect($scope.greets).toEqual('hello');
    });
});