'use strict';

app.controller('ChangePasswordController',
    function ($scope, $location, profileService, notifyService) {
        $scope.changePassword = function (passData) {
            profileService.changeProfilePassword(passData,
                function success() {
                    notifyService.showInfo("Password changed successfully");
                    $location.path("/home/");
                },
                function error(err) {
                    notifyService.showError("Password change failed", err);
                }
            );
        };
    }
);