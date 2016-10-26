/// <reference path="../AppConfig.js" />

app.controller("EPController", ['$scope', 'EPService', function ($scope, EPService) {

    var EPCtrl = this;
    EPCtrl.Employee = {};
    EPCtrl.Departments = [];

    EPCtrl.Init = function() {
        EPCtrl.Employee = EPService.getEmployee();
        EPCtrl.Departments = ["Development", "Services", "Support"];
    }

    EPCtrl.Init();

    EPCtrl.submitForm = function() {
        alert("got it");
        return;
    }
}]);
