'use strict';

app.controller('AppController',
    function ($scope, $location, usersService, notifyService) {
        $scope.usersService = usersService;
        $scope.currentUser = usersService.getCurrentUser();

        $scope.logout = function () {
            usersService.logout();
            notifyService.showInfo("Logout successful");
            $location.path('/#/');
        };
    }
);
