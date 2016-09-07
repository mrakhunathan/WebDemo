var exampleScope = angular.module('ScopeExample', ['ScopeExample2']);
exampleScope.controller('ExampleScopeController', 
function ($scope,ScopeExample2Service) {
    $scope.sampleMethod = function () {
        console.log("sampleMethod Invoked...");
        ScopeExample2Service.serviceMethod();
    };
});


var exampleScope = angular.module('ScopeExample2', []);
exampleScope.service('ScopeExample2Service', function () {
    console.log("Loading Service From  ScopeExample2..");
    this.serviceMethod = function ()
    {
        console.log("this.serviceMethod from ScopeExample2Service...");
    };
});