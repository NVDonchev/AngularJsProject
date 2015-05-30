'use strict';

app.controller('AuthenticationController',
    function ($scope, $rootScope, $location, usersService, profileService, notifyService) {
        $scope.login = function (userData) {
            usersService.login(userData,
                function success() {
                    notifyService.showInfo("Login successful");
                    $location.path("/home/");
                },
                function error(err) {
                    notifyService.showError("Login failed", err);
                }
            );
        };

        $scope.register = function (userData) {
            usersService.register(userData,
                function success() {
                    notifyService.showInfo("User registered successfully");
                    $location.path("/home/");
                },
                function error(err) {
                    notifyService.showError("User registration failed", err);
                }
            );
        };
    }
);