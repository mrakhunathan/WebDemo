var exampleScope = angular.module('ScopeExample', []);
exampleScope.controller('ExampleScopeController', function ($scope) {
    //Will Execute Succesfully
    $scope.sampleMethod = function () {
        console.log("sampleMethod Invoked...");
    };
    
    //Wont Execute
    testmethod = function () {
        console.log("sampleMethod Invoked...");
    };
});
