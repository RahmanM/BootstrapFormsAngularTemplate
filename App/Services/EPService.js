﻿/// <reference path="../AppConfig.js" />

app.service("EPService", function () {

    var self = this;

    self.employee = {
        firstName: "Rahman",
        lastName: "Mahmoodi",
        department: "Development",
        perks: ["car", "stock"],
        payrollType : "1"
    };

    self.getEmployee = function () {
        return self.employee;
    }
    
});