var holderVariable = angular.module('ExampleModule', []);
holderVariable.controller('ExampleModuleController', 
function (ExampleModuleServiceOne, ExampleModuleServiceTwo) {
    console.log("ExampleModuleController Invoked..");
    ExampleModuleServiceOne.functionOne();
    ExampleModuleServiceOne.functionTwo();
    ExampleModuleServiceTwo.functionOne();
    ExampleModuleServiceTwo.functionTwo();
});

holderVariable.service('ExampleModuleServiceOne', function () {
    this.functionOne = function ()
    {
        console.log("this.functionOne from ExampleModuleServiceOne");
    };

    this.functionTwo = function ()
    {
        console.log("this.functionTwo from ExampleModuleServiceOne");
    };
});

holderVariable.service('ExampleModuleServiceTwo', function () {
    this.functionOne = function ()
    {
        console.log("this.functionOne from ExampleModuleServiceTwo");
    };

    this.functionTwo = function ()
    {
        console.log("this.functionTwo from ExampleModuleServiceTwo");
    };
});