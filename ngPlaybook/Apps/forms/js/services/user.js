﻿(function (module) {

    var user = function () {
        return {
            name: "",
            email: "",
            website: "",
            phone: "",
            birthdate: "",
            age: "",
            feelLike: "",
            color: "",
            cuisine: "",
            bio: "",
            terms: "",
            status: ""
        };
    };

    module.factory("user", user);

}(angular.module("forms")));