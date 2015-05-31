'use strict';

app.controller('EditProfileController',
    function ($scope, $location, profileService, notifyService) {
        $scope.submitChanges = function (editData) {
            profileService.editCurrentUserData(
                editData,
                function success() {
                    notifyService.showInfo("Edit profile successful");
                    $location.path("/home/");
                },
                function error(err) {
                    notifyService.showError("Edit profile failed", err);
                }
            );
        };
    }
);