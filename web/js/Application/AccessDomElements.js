var MyApp = angular.module('XModule', []);
MyApp.controller('XModuleController', 
function ($scope) {
    console.log('XModuleController..');
    $scope.checkChange = function ()
    {
        console.log("Check Change");
    };
    $scope.radioChange = function ()
    {
        console.log("Radio Change");
    };
    $scope.textChange = function ()
    {
        console.log("Text Change");
    };
    $scope.buttonClick = function ()
    {
        console.log("Button Click");
    };
});