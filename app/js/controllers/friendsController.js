'use strict';

app.controller('FriendsController',
    function ($scope, $location, $routeParams, usersService, profileService, notifyService) {
        if ($routeParams.username !== $scope.currentUser.userName) {
            $scope.getFriendDetailedFriends = function () {
                usersService.getFriendDetailedFriends(
                    $routeParams.username,
                    function success(data) {
                        $scope.friendsList = data;
                    }),
                    function error(err) {
                        notifyService.showError("Cannot retrieve friends list", err);
                    };
            }
            $scope.getFriendDetailedFriends();
        } else {
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
    }
);