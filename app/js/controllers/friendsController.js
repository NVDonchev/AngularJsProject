'use strict';

app.controller('FriendsController',
    function ($scope, $location, usersService, profileService, postsService, notifyService) {
        $scope.getCurrentUserFriendsList = function () {
            profileService.getCurrentUserFriendsList(
                function success(data) {
                    $scope.friendsList = data;
                }),
                function error(err) {
                    notifyService.showError("Cannot retrieve friends list", err);
                };
        }
        $scope.getCurrentUserFriendsList();
    }
);