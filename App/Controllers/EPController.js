/// <reference path="../AppConfig.js" />

app.controller("EPController", ['$scope', 'EPService', function ($scope, EPService) {

    var EPCtrl = this;
    EPCtrl.Employee = {};
    EPCtrl.Departments = [];
    EPCtrl.PayType = "";
    EPCtrl.Perks = {
        BusinessCar: false,
        Bonus : false,
        Shares : false
    };

    EPCtrl.Init = function() {
        EPCtrl.Employee = EPService.getEmployee();
        EPCtrl.Departments = ["Development", "Services", "Support"];
        EPCtrl.Perks.Bonus = true;
        EPCtrl.Perks.BusinessCar = true;
        EPCtrl.Perks.Shares = true;
        EPCtrl.PayType = "pt";
    }

    EPCtrl.Init();

    EPCtrl.submitForm = function () {
        alert(EPCtrl.Employee.firstName + " " + EPCtrl.Employee.lastName + "\n Payroll:" +
              EPCtrl.PayType + "\n Perks Bonus: " + EPCtrl.Perks.Bonus);
        return;
    }

}]);
